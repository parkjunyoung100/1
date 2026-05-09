import { useState, useEffect, useRef } from 'react';
import { EditorView, basicSetup } from 'codemirror';
import { EditorState } from '@codemirror/state';
import { cpp } from '@codemirror/lang-cpp';
import { oneDark } from '@codemirror/theme-one-dark';

export default function Playground({ onBack }) {
  const [code, setCode] = useState(`#include <stdio.h>

int main() {
    printf("Hello, C Language!\\n");
    
    int a = 10, b = 20;
    printf("a + b = %d\\n", a + b);
    
    for (int i = 1; i <= 5; i++) {
        printf("%d ", i);
    }
    printf("\\n");
    
    return 0;
}`);
  const [output, setOutput] = useState('');
  const [running, setRunning] = useState(false);
  const editorRef = useRef(null);
  const viewRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (editorRef.current && !viewRef.current) {
      const startState = EditorState.create({
        doc: code,
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
    return code;
  };

  const handleRun = async () => {
    const source = getCode();
    setRunning(true);
    setOutput('컴파일 중...');

    try {
      const res = await fetch('https://api.paiza.io:8443/runners/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source_code: source,
          language: 'c',
          input: inputRef.current?.value || '',
          api_key: 'guest',
        }),
      });

      if (!res.ok) throw new Error('API 오류');

      const { id, status } = await res.json();

      if (status === 'error') {
        setOutput('컴파일 오류가 발생했습니다.');
        setRunning(false);
        return;
      }

      // Poll for result
      let done = false;
      for (let i = 0; i < 30 && !done; i++) {
        await new Promise(r => setTimeout(r, 1000));
        const detail = await fetch(`https://api.paiza.io:8443/runners/get_details?id=${id}&api_key=guest`);
        const data = await detail.json();

        if (data.status === 'completed') {
          setOutput(data.stdout || data.stderr || '(출력 없음)');
          if (data.stderr) setOutput(prev => prev + '\n\n[오류]\n' + data.stderr);
          if (data.exit_code && data.exit_code !== 0) setOutput(prev => prev + `\n\n종료 코드: ${data.exit_code}`);
          done = true;
        } else if (data.status === 'error') {
          setOutput('실행 중 오류가 발생했습니다.');
          done = true;
        } else if (data.status === 'timeout') {
          setOutput('실행 시간이 초과되었습니다.');
          done = true;
        }
      }

      if (!done) setOutput('응답 시간 초과');
    } catch (err) {
      setOutput('API 연결 실패: ' + err.message);
    } finally {
      setRunning(false);
    }
  };

  const handleReset = () => {
    if (viewRef.current) {
      viewRef.current.dispatch({
        changes: { from: 0, to: viewRef.current.state.doc.length, insert: code },
      });
    }
    setOutput('');
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
  };

  return (
    <div className="page playground-page">
      <div className="page-header">
        <button className="back-btn" onClick={onBack}>← 돌아가기</button>
        <h1>💻 코드 편집기</h1>
        <span className="page-desc">C 코드를 작성하고 실행해보세요</span>
      </div>

      <div className="playground-toolbar">
        <div className="playground-examples">
          <span className="toolbar-label">예제:</span>
          {examples.map(ex => (
            <button key={ex.label} className="toolbar-btn" onClick={() => loadExample(ex)}>{ex.label}</button>
          ))}
        </div>
        <div className="playground-actions">
          <button className="toolbar-btn" onClick={handleReset} title="초기화">↺ 초기화</button>
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
