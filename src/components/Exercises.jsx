import { exercises } from '../data/exercises';

const difficultyColor = { '쉬움': '#22c55e', '중간': '#eab308', '어려움': '#ef4444' };

export default function Exercises({ onSelect, onBack }) {
  return (
    <div className="page">
      <div className="page-header">
        <button className="back-btn" onClick={onBack}>← 돌아가기</button>
        <h1>⚡ 연습문제</h1>
        <span className="page-desc">직접 코딩하며 실력을 키워보세요</span>
      </div>
      <div className="lessons-list">
        {exercises.map(ex => (
          <button key={ex.id} className="lesson-card" onClick={() => onSelect(ex.id)}>
            <span className="lesson-icon">⚡</span>
            <div className="lesson-info">
              <span className="lesson-title">{ex.title}</span>
              <span className="lesson-desc" style={{ color: difficultyColor[ex.difficulty] }}>
                난이도: {ex.difficulty}
              </span>
            </div>
            <span className="lesson-arrow">→</span>
          </button>
        ))}
      </div>
    </div>
  );
}
