import { useState, useEffect, useRef } from 'react';
import { EditorView, basicSetup } from 'codemirror';
import { EditorState } from '@codemirror/state';
import { cpp } from '@codemirror/lang-cpp';
import { oneDark } from '@codemirror/theme-one-dark';

const battles = [
  {
    id: 1, title: '두 정수의 합',
    desc: '두 정수 a, b를 입력받아 합을 출력하는 프로그램을 작성하세요.',
    input: '3 7',
    sampleCode: `#include <stdio.h>

int main() {
    int a, b;
    scanf("%d %d", &a, &b);
    printf("%d", a + b);
    return 0;
}`,
    hint: 'scanf로 두 정수를 입력받고 printf로 합을 출력하세요.',
    difficulty: '쉬움'
  },
  {
    id: 2, title: '배열 최댓값',
    desc: '5개의 정수를 입력받아 배열에 저장하고, 그 중 최댓값을 출력하는 프로그램을 작성하세요.',
    input: '12 45 7 23 9',
    sampleCode: `#include <stdio.h>

int main() {
    int arr[5], max;
    for (int i = 0; i < 5; i++) {
        scanf("%d", &arr[i]);
    }
    max = arr[0];
    for (int i = 1; i < 5; i++) {
        if (arr[i] > max) max = arr[i];
    }
    printf("%d", max);
    return 0;
}`,
    hint: '첫 번째 값을 max로 초기화하고, 나머지 값들과 비교하세요.',
    difficulty: '중간'
  },
  {
    id: 3, title: '팩토리얼 계산',
    desc: '정수 n(1~10)을 입력받아 n! (팩토리얼)을 계산하여 출력하는 프로그램을 작성하세요.',
    input: '5',
    sampleCode: `#include <stdio.h>

int main() {
    int n, fact = 1;
    scanf("%d", &n);
    for (int i = 2; i <= n; i++) {
        fact *= i;
    }
    printf("%d", fact);
    return 0;
}`,
    hint: '반복문으로 1부터 n까지 곱해나가세요.',
    difficulty: '중간'
  },
  {
    id: 4, title: '문자열 길이',
    desc: '문자열을 입력받아 길이를 출력하는 프로그램을 작성하세요. (strlen 사용 금지)',
    input: 'Coding',
    sampleCode: `#include <stdio.h>

int main() {
    char str[100];
    int len = 0;
    scanf("%s", str);
    while (str[len] != '\\0') {
        len++;
    }
    printf("%d", len);
    return 0;
}`,
    hint: '널 문자(\\0)가 나올 때까지 문자를 세세요.',
    difficulty: '중간'
  },
  {
    id: 5, title: '소수 판별',
    desc: '정수 n을 입력받아 소수이면 "prime", 아니면 "not prime"을 출력하는 프로그램을 작성하세요.',
    input: '7',
    sampleCode: `#include <stdio.h>

int main() {
    int n, isPrime = 1;
    scanf("%d", &n);
    if (n < 2) isPrime = 0;
    for (int i = 2; i * i <= n; i++) {
        if (n % i == 0) { isPrime = 0; break; }
    }
    printf(isPrime ? "prime" : "not prime");
    return 0;
}`,
    hint: '2부터 sqrt(n)까지 나누어 떨어지는지 확인하세요.',
    difficulty: '어려움'
  }
];

async function runCode(code, input) {
  const res = await fetch('/.netlify/functions/execute', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ source_code: code, input }),
  });
  if (!res.ok) throw new Error('API 오류');
  const data = await res.json();
  if (data.status === 'error') throw new Error(data.stderr || '컴파일 오류');
  return { stdout: (data.stdout || '').replace(/\r\n/g, '\n').replace(/\r/g, '\n').trim(), stderr: data.stderr };
}

export default function BattleView({ onBack }) {
  const [battleId, setBattleId] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const editorRef = useRef(null);
  const viewRef = useRef(null);

  const battle = battles.find(b => b.id === battleId);

  useEffect(() => {
    if (battle && editorRef.current) {
      if (viewRef.current) { viewRef.current.destroy(); viewRef.current = null; }
      const startState = EditorState.create({
        doc: `#include <stdio.h>\n\nint main() {\n    \\/\\/ 여기에 코드를 작성하세요\n    return 0;\n}`,
        extensions: [basicSetup, cpp(), oneDark],
      });
      const view = new EditorView({ state: startState, parent: editorRef.current });
      viewRef.current = view;
    }
    return () => { if (viewRef.current) { viewRef.current.destroy(); viewRef.current = null; } };
  }, [battleId]);

  const handleSubmit = async () => {
    if (!battle || !viewRef.current) return;
    setLoading(true);
    setResult(null);
    const code = viewRef.current.state.doc.toString();

    try {
      const user = await runCode(code, battle.input);
      const ai = await runCode(battle.sampleCode, battle.input);

      const userPass = user.stdout === battle.sampleCode.replace(/.*printf\("([^"]*)".*/, '$1').trim();
      const aiPass = ai.stdout === battle.sampleCode.replace(/.*printf\("([^"]*)".*/, '$1').trim();

      const userLines = code.split('\n').length;
      const aiLines = battle.sampleCode.split('\n').length;

      setResult({
        userOutput: user.stdout,
        aiOutput: ai.stdout,
        userError: user.stderr,
        userPass: true,
        aiPass: true,
        userLines,
        aiLines,
      });
    } catch (e) {
      setResult({ error: e.message, userOutput: '', aiOutput: '' });
    }
    setLoading(false);
  };

  const handleReset = () => {
    if (viewRef.current) {
      viewRef.current.dispatch({
        changes: { from: 0, to: viewRef.current.state.doc.length, insert: `#include <stdio.h>\n\nint main() {\n    \\/\\/ 여기에 코드를 작성하세요\n    return 0;\n}` },
      });
    }
    setResult(null);
  };

  if (!battle) {
    return (
      <div className="page">
        <div className="page-header">
          <button className="back-btn" onClick={onBack}>← 돌아가기</button>
          <h1>⚔️ AI 코드 배틀</h1>
          <span className="page-desc">AI와 코드 대결을 펼쳐보세요!</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {battles.map(b => (
            <div key={b.id} className="exercise-card" onClick={() => setBattleId(b.id)}
              style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h3 style={{ color: '#22c55e', marginBottom: 4 }}>{b.title}</h3>
                <p style={{ color: '#9ca3af', fontSize: '.88rem' }}>{b.desc.slice(0, 50)}...</p>
              </div>
              <span className="badge" style={{
                background: b.difficulty === '쉬움' ? '#22c55e' : b.difficulty === '중간' ? '#eab308' : '#ef4444'
              }}>{b.difficulty}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="page-header">
        <button className="back-btn" onClick={() => { setBattleId(null); setResult(null); }}>← 목록</button>
        <h1>⚔️ {battle.title}</h1>
        <span className="badge" style={{
          background: battle.difficulty === '쉬움' ? '#22c55e' : battle.difficulty === '중간' ? '#eab308' : '#ef4444'
        }}>{battle.difficulty}</span>
      </div>

      <div className="exercise-card">
        <h3 style={{ fontSize: '.95rem', marginBottom: 6 }}>📝 문제</h3>
        <p className="exercise-desc" style={{ fontSize: '.9rem' }}>{battle.desc}</p>
        <div style={{ marginTop: 8, padding: '8px 12px', background: '#1a1b23', borderRadius: 6, fontSize: '.85rem' }}>
          <span style={{ color: '#818cf8' }}>테스트 입력:</span> <code style={{ color: '#22c55e' }}>{battle.input}</code>
        </div>
      </div>

      <div className="exercise-code-box">
        <h3 style={{ fontSize: '.95rem' }}>💻 내 코드</h3>
        <div className="editor-panel exercise-editor" ref={editorRef} />
      </div>

      <div className="lesson-actions">
        <button className="toolbar-btn" onClick={handleReset}>↺ 초기화</button>
        <button className="add-btn" onClick={handleSubmit} disabled={loading}>
          {loading ? '⚔️ 대결 중...' : '⚔️ AI와 대결'}
        </button>
      </div>

      {result && !result.error && (
        <div className="solution-box" style={{ marginTop: 16 }}>
          <h3 style={{ fontSize: '1rem', marginBottom: 12 }}>📊 배틀 결과</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
            <div style={{ background: '#1e1f2b', borderRadius: 8, padding: '12px 16px' }}>
              <div style={{ fontWeight: 600, color: '#818cf8', marginBottom: 6, fontSize: '.9rem' }}>👤 내 코드</div>
              <div style={{ color: '#d1d5db', fontSize: '.88rem', marginBottom: 4 }}>출력: <code style={{ color: '#22c55e' }}>{result.userOutput || '(없음)'}</code></div>
              <div style={{ color: '#9ca3af', fontSize: '.82rem' }}>코드 라인: {result.userLines}줄</div>
            </div>
            <div style={{ background: '#1e1f2b', borderRadius: 8, padding: '12px 16px' }}>
              <div style={{ fontWeight: 600, color: '#f59e0b', marginBottom: 6, fontSize: '.9rem' }}>🤖 AI 모범 답안</div>
              <div style={{ color: '#d1d5db', fontSize: '.88rem', marginBottom: 4 }}>출력: <code style={{ color: '#22c55e' }}>{result.aiOutput || '(없음)'}</code></div>
              <div style={{ color: '#9ca3af', fontSize: '.82rem' }}>코드 라인: {result.aiLines}줄</div>
            </div>
          </div>
          <div style={{
            padding: '12px 16px', borderRadius: 8, fontSize: '.9rem',
            background: result.userOutput === result.aiOutput ? '#22c55e1a' : '#ef44441a',
            color: result.userOutput === result.aiOutput ? '#22c55e' : '#ef4444',
            fontWeight: 600
          }}>
            {result.userOutput === result.aiOutput
              ? '🎉 AI와 같은 결과를 출력했습니다!'
              : `💪 예상 출력과 다릅니다. AI의 답안을 참고해보세요.`}
          </div>
          {result.userOutput !== result.aiOutput && (
            <details style={{ marginTop: 12, background: '#1a1b23', borderRadius: 8, padding: '10px 14px' }}>
              <summary style={{ color: '#eab308', fontWeight: 600, cursor: 'pointer', fontSize: '.9rem' }}>
                🤖 AI 모범 답안 보기
              </summary>
              <pre className="code-block" style={{ marginTop: 10, background: '#0f0f1a' }}><code>{battle.sampleCode}</code></pre>
              <div style={{ marginTop: 8, padding: '8px 12px', background: '#2a2b3d', borderRadius: 6, fontSize: '.85rem', color: '#eab308' }}>
                💡 힌트: {battle.hint}
              </div>
            </details>
          )}
        </div>
      )}

      {result?.error && (
        <div className="solution-box" style={{ marginTop: 16, borderLeft: '3px solid #ef4444' }}>
          <h3 style={{ color: '#ef4444', marginBottom: 8 }}>⚠️ 오류 발생</h3>
          <p>{result.error}</p>
        </div>
      )}
    </div>
  );
}
