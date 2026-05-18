import { useState, useEffect, useRef } from 'react';
import { EditorView, basicSetup } from 'codemirror';
import { EditorState } from '@codemirror/state';
import { cpp } from '@codemirror/lang-cpp';
import { oneDark } from '@codemirror/theme-one-dark';
import { exercises } from '../data/exercises';
import { useProgress } from '../context/ProgressContext';

function normalizeOutput(text) {
  return text.replace(/\r\n/g, '\n').replace(/\r/g, '\n').trim();
}

async function runCode(code, input) {
  const res = await fetch('/.netlify/functions/execute', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ source_code: code, input }),
  });
  if (!res.ok) throw new Error('API 오류');
  const data = await res.json();
  if (data.status === 'error') throw new Error('컴파일 오류');
  return normalizeOutput(data.stdout || '');
}

export default function ExerciseView({ exerciseId, onBack }) {
  const ex = exercises.find(e => e.id === exerciseId);
  const { completeExercise, progress } = useProgress();
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [passed, setPassed] = useState(!!progress[`exercise_${exerciseId}`]);
  const [submitting, setSubmitting] = useState(false);
  const [testResults, setTestResults] = useState(null);
  const editorRef = useRef(null);
  const viewRef = useRef(null);

  useEffect(() => {
    if (editorRef.current) {
      if (viewRef.current) {
        viewRef.current.destroy();
        viewRef.current = null;
      }
      const startState = EditorState.create({
        doc: ex?.starter || '',
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
  }, [exerciseId]);

  if (!ex) return null;

  const getCode = () => viewRef.current?.state.doc.toString() || '';

  const handleSubmit = async () => {
    const tests = ex.testCases || [{ input: '', expected: '' }];
    setSubmitting(true);
    setTestResults(null);
    const code = getCode();
    const results = [];

    for (const tc of tests) {
      try {
        const output = await runCode(code, tc.input);
        const lines = output.split('\n');
        const lastLine = lines[lines.length - 1] || '';
        const match = lastLine.includes(tc.expected);
        results.push({ input: tc.input, expected: tc.expected, actual: lastLine, passed: match });
      } catch (e) {
        results.push({ input: tc.input, expected: tc.expected, actual: '(오류)', passed: false, error: e.message });
      }
    }

    setTestResults(results);
    const allPassed = results.every(r => r.passed);
    setPassed(allPassed);
    if (allPassed) completeExercise(exerciseId);
    setSubmitting(false);
  };

  const handleReset = () => {
    if (viewRef.current) {
      viewRef.current.dispatch({
        changes: { from: 0, to: viewRef.current.state.doc.length, insert: ex.starter },
      });
    }
    setTestResults(null);
  };

  return (
    <div className="page">
      <div className="page-header">
        <button className="back-btn" onClick={onBack}>← 목록</button>
        <h1>⚡ {ex.title}</h1>
        <span className="badge" style={{ background: ex.difficulty === '쉬움' ? '#22c55e' : ex.difficulty === '중간' ? '#eab308' : '#ef4444' }}>
          {ex.difficulty}
        </span>
      </div>

      <div className="exercise-card">
        <h3>📝 문제</h3>
        <p className="exercise-desc">{ex.desc}</p>
      </div>

      <div className="exercise-code-box">
        <h3>💻 코드 작성</h3>
        <div className="editor-panel exercise-editor" ref={editorRef} />
      </div>

      <div className="lesson-actions">
        <button className="toolbar-btn" onClick={handleReset}>↺ 초기화</button>
        <button className="toolbar-btn" onClick={() => setShowHint(!showHint)}>
          💡 힌트 {showHint ? '숨기기' : '보기'}
        </button>
        <button className="toolbar-btn" onClick={() => setShowSolution(!showSolution)}>
          🔍 정답 {showSolution ? '숨기기' : '보기'}
        </button>
        {passed ? (
          <span className="completed-badge">✓ 합격</span>
        ) : (
          <button className="add-btn" onClick={handleSubmit} disabled={submitting}>
            {submitting ? '검사 중...' : '📤 제출하기'}
          </button>
        )}
      </div>

      {showHint && (
        <div className="hint-box">
          <h3>💡 힌트</h3>
          <p>{ex.hint}</p>
        </div>
      )}

      {showSolution && (
        <div className="solution-box">
          <h3>🔍 모범 답안</h3>
          <pre className="code-block"><code>{ex.solution}</code></pre>
        </div>
      )}

      {testResults && (
        <div className="solution-box" style={{ marginTop: 16 }}>
          <h3>📊 채점 결과</h3>
          {testResults.map((r, i) => (
            <div key={i} style={{
              padding: '10px 14px', margin: '8px 0',
              background: r.passed ? '#22c55e1a' : '#ef44441a',
              borderRadius: 8, borderLeft: `4px solid ${r.passed ? '#22c55e' : '#ef4444'}`
            }}>
              <div style={{ fontWeight: 600, color: r.passed ? '#22c55e' : '#ef4444', marginBottom: 4 }}>
                {r.passed ? '🟢 통과' : '🔴 실패'} — 테스트 {i + 1}
              </div>
              <div style={{ fontSize: '.85rem', color: '#d1d5db' }}>
                <div>입력: <code style={{ color: '#818cf8' }}>{r.input || '(없음)'}</code></div>
                {!r.passed && (
                  <>
                    <div>예상 출력: <code style={{ color: '#22c55e' }}>{r.expected}</code></div>
                    <div>실제 출력: <code style={{ color: '#ef4444' }}>{r.actual}</code></div>
                    {r.error && <div>오류: {r.error}</div>}
                    <div style={{ marginTop: 6, padding: '8px 10px', background: '#1a1b23', borderRadius: 6, color: '#eab308' }}>
                      💡 {r.expected.includes('짝수') || r.expected.includes('홀수')
                        ? '% 연산자로 2로 나눈 나머지를 확인하세요. num % 2 == 0이면 짝수입니다.'
                        : r.expected.includes('GCD')
                        ? '유클리드 호제법을 사용하세요. while (b != 0) { temp = b; b = a % b; a = temp; }'
                        : '출력 형식을 문제의 예시와 정확히 일치시켜보세요.'}
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
          <div style={{
            textAlign: 'center', padding: 12, marginTop: 12, borderRadius: 8,
            background: testResults.every(r => r.passed) ? '#22c55e1a' : '#ef44441a',
            color: testResults.every(r => r.passed) ? '#22c55e' : '#ef4444',
            fontWeight: 700, fontSize: '1.1rem'
          }}>
            {testResults.every(r => r.passed) ? '🎉 모든 테스트 통과!' : '💪 다시 시도해보세요!'}
          </div>
        </div>
      )}
    </div>
  );
}
