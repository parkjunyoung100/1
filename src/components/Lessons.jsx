import { lessons } from '../data/lessons';

export default function Lessons({ onSelect, onBack }) {
  return (
    <div className="page">
      <div className="page-header">
        <button className="back-btn" onClick={onBack}>← 돌아가기</button>
        <h1>📖 학습 로드맵</h1>
      </div>
      <div className="lessons-list">
        {lessons.map((lesson, idx) => (
          <button key={lesson.id} className="lesson-card" onClick={() => onSelect(lesson.id)}>
            <span className="lesson-number">{idx + 1}</span>
            <span className="lesson-icon">{lesson.icon}</span>
            <div className="lesson-info">
              <span className="lesson-title">{lesson.title}</span>
              <span className="lesson-desc">
                {lesson.content.split('\n')[0].trim()}
              </span>
            </div>
            <span className="lesson-arrow">→</span>
          </button>
        ))}
      </div>
    </div>
  );
}
