import { quizzes } from '../data/quizzes';

export default function Quizzes({ onSelect, onBack }) {
  return (
    <div className="page">
      <div className="page-header">
        <button className="back-btn" onClick={onBack}>← 돌아가기</button>
        <h1>📝 퀴즈</h1>
        <span className="page-desc">C 언어 지식을 테스트해보세요</span>
      </div>
      <div className="lessons-list">
        {quizzes.map(quiz => (
          <button key={quiz.id} className="lesson-card" onClick={() => onSelect(quiz.id)}>
            <span className="lesson-icon">📝</span>
            <div className="lesson-info">
              <span className="lesson-title">{quiz.title}</span>
              <span className="lesson-desc">{quiz.questions.length}문제</span>
            </div>
            <span className="lesson-arrow">→</span>
          </button>
        ))}
      </div>
    </div>
  );
}
