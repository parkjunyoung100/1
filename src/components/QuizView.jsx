import { useState } from 'react';
import { quizzes } from '../data/quizzes';
import { useProgress } from '../context/ProgressContext';

export default function QuizView({ quizId, onBack }) {
  const quiz = quizzes.find(q => q.id === quizId);
  const { completeQuiz, progress } = useProgress();
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  if (!quiz) return null;

  const handleAnswer = (qIdx, ans) => {
    if (submitted) return;
    setAnswers(prev => ({ ...prev, [qIdx]: ans }));
  };

  const handleSubmit = () => {
    let correct = 0;
    quiz.questions.forEach((q, i) => {
      if (answers[i] === q.answer) correct++;
    });
    const pct = Math.round((correct / quiz.questions.length) * 100);
    setScore(pct);
    setSubmitted(true);
    completeQuiz(quizId, pct);
  };

  const prevScore = progress[`quiz_${quizId}`];

  return (
    <div className="page">
      <div className="page-header">
        <button className="back-btn" onClick={onBack}>← 목록</button>
        <h1>📝 {quiz.title}</h1>
        {prevScore && <span className="badge prev-score">이전: {prevScore.score}점</span>}
      </div>

      <div className="quiz-list">
        {quiz.questions.map((q, idx) => {
          const isCorrect = submitted && answers[idx] === q.answer;
          const isWrong = submitted && answers[idx] !== undefined && answers[idx] !== q.answer;
          return (
            <div key={idx} className={`quiz-item ${isCorrect ? 'correct' : ''} ${isWrong ? 'wrong' : ''}`}>
              <div className="quiz-question">
                <span className="q-num">{idx + 1}.</span>
                <span>{q.q}</span>
              </div>
              <div className="quiz-options">
                {q.options.map((opt, oi) => (
                  <button
                    key={oi}
                    className={`quiz-option ${answers[idx] === oi ? 'selected' : ''} ${submitted && oi === q.answer ? 'correct' : ''} ${submitted && answers[idx] === oi && oi !== q.answer ? 'wrong' : ''}`}
                    onClick={() => handleAnswer(idx, oi)}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {submitted ? (
        <div className="quiz-result">
          <div className="result-score">{score}점</div>
          <div className="result-label">{score >= 80 ? '🎉 훌륭합니다!' : score >= 60 ? '👍 더 노력하세요!' : '💪 다시 도전하세요!'}</div>
          <button className="toolbar-btn" onClick={() => { setAnswers({}); setSubmitted(false); setScore(0); }}>
            다시 풀기
          </button>
        </div>
      ) : (
        <div className="lesson-actions">
          <button
            className="add-btn"
            onClick={handleSubmit}
            disabled={Object.keys(answers).length < quiz.questions.length}
          >
            {Object.keys(answers).length}/{quiz.questions.length} 제출하기
          </button>
        </div>
      )}
    </div>
  );
}
