import { useState, useEffect, useRef } from 'react';
import { EditorView, basicSetup } from 'codemirror';
import { EditorState } from '@codemirror/state';
import { cpp } from '@codemirror/lang-cpp';
import { oneDark } from '@codemirror/theme-one-dark';

const DEFAULT_CODE = `#include <stdio.h>

int main() {
    printf("Hello, C Language!\\n");

    int a = 10, b = 20;
    printf("a + b = %d\\n", a + b);

    for (int i = 1; i <= 5; i++) {
        printf("%d ", i);
    }
    printf("\\n");

    return 0;
}`;

const ALLOWED_HEADERS = ['stdio.h', 'stdlib.h', 'string.h', 'math.h', 'time.h', 'ctype.h', 'stdbool.h', 'stdint.h', 'stdarg.h', 'assert.h', 'errno.h', 'float.h', 'limits.h', 'signal.h', 'stddef.h', 'setjmp.h', 'complex.h'];

function validateCode(code) {
  if (code.length > 10000) return '코드가 너무 깁니다 (최대 10,000자)';
  const lines = code.split('\n');
  for (const line of lines) {
    const match = line.match(/#\s*include\s*[<"](\S+)[>"]/);
    if (match && !ALLOWED_HEADERS.includes(match[1])) {
      return `허용되지 않은 헤더입니다: ${match[1]}`;
    }
  }
  return null;
}

export default function Playground({ onBack }) {
  const [output, setOutput] = useState('');
  const [running, setRunning] = useState(false);
  const [validationError, setValidationError] = useState('');
  const editorRef = useRef(null);
  const viewRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (editorRef.current && !viewRef.current) {
      const startState = EditorState.create({
        doc: DEFAULT_CODE,
        extensions: [basicSetup, cpp(), oneDark],
      });
      const view = new EditorView({
        state: startState,
        parent: editorRef.current,
      });
      viewRef.current = view;
    }
    return () => {
      if (viewRef.current) {
        viewRef.current.destroy();
        viewRef.current = null;
      }
    };
  }, []);

  const getCode = () => {
    if (viewRef.current) return viewRef.current.state.doc.toString();
    return DEFAULT_CODE;
  };

  const handleRun = async () => {
    const source = getCode();
    const err = validateCode(source);
    if (err) { setValidationError(err); return; }
    setValidationError('');
    setRunning(true);
    setOutput('컴파일 중...');

    try {
      const res = await fetch('/.netlify/functions/execute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source_code: source,
          input: inputRef.current?.value || '',
        }),
      });

      if (!res.ok) throw new Error('API 오류');

      const data = await res.json();

      if (data.status === 'error') {
        setOutput('컴파일 오류가 발생했습니다.');
        return;
      }

      let text = '';
      if (data.stdout) text += data.stdout;
      if (data.stderr) {
        if (text) text += '\n';
        text += data.stderr;
      }
      if (!text) text = '(출력 없음)';
      if (data.exit_code && data.exit_code !== 0) text += `\n\n종료 코드: ${data.exit_code}`;
      setOutput(text);
    } catch (err) {
      setOutput('API 연결 실패: ' + err.message);
    } finally {
      setRunning(false);
    }
  };

  const handleReset = () => {
    if (viewRef.current) {
      viewRef.current.dispatch({
        changes: { from: 0, to: viewRef.current.state.doc.length, insert: DEFAULT_CODE },
      });
    }
    setOutput('');
    setValidationError('');
  };

  const examples = [
    { label: 'Hello World', code: `#include <stdio.h>\n\nint main() {\n    printf("Hello, World!\\n");\n    return 0;\n}` },
    { label: '구구단', code: `#include <stdio.h>\n\nint main() {\n    for (int i = 2; i <= 9; i++) {\n        for (int j = 1; j <= 9; j++) {\n            printf("%d x %d = %d\\n", i, j, i * j);\n        }\n    }\n    return 0;\n}` },
    { label: '피보나치', code: `#include <stdio.h>\n\nint fib(int n) {\n    if (n <= 1) return n;\n    return fib(n-1) + fib(n-2);\n}\n\nint main() {\n    for (int i = 0; i < 10; i++) {\n        printf("%d ", fib(i));\n    }\n    return 0;\n}` },
  ];

  const loadExample = (ex) => {
    if (viewRef.current) {
      viewRef.current.dispatch({
        changes: { from: 0, to: viewRef.current.state.doc.length, insert: ex.code },
      });
    }
    setValidationError('');
  };

  return (
    <div className="page playground-page">
      <div className="page-header">
        <button className="back-btn" onClick={onBack}>← 돌아가기</button>
        <h1>💻 코드 편집기</h1>
        <span className="page-desc">C 코드를 작성하고 실행해보세요</span>
      </div>

      {validationError && (
        <div className="hint-box" style={{ marginBottom: 12, borderColor: '#ef4444' }}>
          <p style={{ color: '#ef4444' }}>⚠ {validationError}</p>
        </div>
      )}

      <div className="playground-toolbar">
        <div className="playground-examples">
          <span className="toolbar-label">예제:</span>
          {examples.map(ex => (
            <button key={ex.label} className="toolbar-btn" onClick={() => loadExample(ex)}>{ex.label}</button>
          ))}
        </div>
        <div className="playground-actions">
          <button className="toolbar-btn" onClick={handleReset}>↺ 초기화</button>
          <button className="add-btn" onClick={handleRun} disabled={running}>
            {running ? <span className="btn-spinner" /> : '▶ 실행'}
          </button>
        </div>
      </div>

      <div className="playground-main">
        <div className="editor-panel" ref={editorRef} />
        <div className="output-panel">
          <div className="output-header">
            <span>실행 결과</span>
            {output && <button className="delete-btn" onClick={() => setOutput('')}>✕</button>}
          </div>
          <div className="output-content">
            <div className="input-row">
              <input ref={inputRef} className="todo-input" placeholder="표준 입력 (필요시)" style={{ fontSize: '.85rem' }} />
            </div>
            <pre className={`output-text ${output.includes('오류') ? 'error' : ''}`}>
              {output || '▶ 실행 버튼을 눌러 코드를 실행하세요'}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
