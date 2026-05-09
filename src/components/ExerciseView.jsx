import { useState, useEffect, useRef } from 'react';
import { EditorView, basicSetup } from 'codemirror';
import { EditorState } from '@codemirror/state';
import { cpp } from '@codemirror/lang-cpp';
import { oneDark } from '@codemirror/theme-one-dark';
import { exercises } from '../data/exercises';
import { useProgress } from '../context/ProgressContext';

export default function ExerciseView({ exerciseId, onBack }) {
  const ex = exercises.find(e => e.id === exerciseId);
  const { completeExercise, progress } = useProgress();
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [done, setDone] = useState(!!progress[`exercise_${exerciseId}`]);
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

  const handleDone = () => {
    completeExercise(exerciseId);
    setDone(true);
  };

  const handleReset = () => {
    if (viewRef.current) {
      viewRef.current.dispatch({
        changes: { from: 0, to: viewRef.current.state.doc.length, insert: ex.starter },
      });
    }
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
        <h3>💻 시작 코드</h3>
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
        {!done ? (
          <button className="add-btn" onClick={handleDone}>✅ 문제 완료</button>
        ) : (
          <span className="completed-badge">✅ 완료됨</span>
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
    </div>
  );
}
