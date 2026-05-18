export default function Home({ stats, onNavigate }) {
  return (
    <div className="page home-page">
      <div className="hero">
        <h1 className="hero-title">C 언어 마스터하기</h1>
        <p className="hero-subtitle">기초부터 고급까지, 체계적으로 배우는 C 프로그래밍</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card" onClick={() => onNavigate('lessons')}>
          <div className="stat-icon">📖</div>
          <div className="stat-value">{stats.lessonsDone}/{stats.lessonsTotal}</div>
          <div className="stat-label">학습 완료</div>
        </div>
        <div className="stat-card" onClick={() => onNavigate('quizzes')}>
          <div className="stat-icon">📝</div>
          <div className="stat-value">{stats.avgQuizScore}%</div>
          <div className="stat-label">퀴즈 평균</div>
        </div>
        <div className="stat-card" onClick={() => onNavigate('exercises')}>
          <div className="stat-icon">⚡</div>
          <div className="stat-value">{stats.exercisesDone}/{stats.exercisesTotal}</div>
          <div className="stat-label">연습문제 완료</div>
        </div>
        <div className="stat-card" onClick={() => onNavigate('flashcards')}>
          <div className="stat-icon">🃏</div>
          <div className="stat-value">{stats.flashcardsStudied}</div>
          <div className="stat-label">플래시카드 학습</div>
        </div>
      </div>

      <div className="quick-actions">
        <h2>빠른 시작</h2>
        <div className="action-grid">
          <button className="action-card primary" onClick={() => onNavigate('lessons')}>
            <span className="action-icon">📖</span>
            <span className="action-title">학습 시작하기</span>
            <span className="action-desc">C 언어 기초부터 차근차근</span>
          </button>
          <button className="action-card" onClick={() => onNavigate('playground')}>
            <span className="action-icon">💻</span>
            <span className="action-title">코드 실습하기</span>
            <span className="action-desc">실제 C 코드를 작성하고 실행</span>
          </button>
          <button className="action-card" onClick={() => onNavigate('cheatsheet')}>
            <span className="action-icon">📋</span>
            <span className="action-title">문법 참고서</span>
            <span className="action-desc">주요 문법을 한눈에</span>
          </button>
          <button className="action-card" onClick={() => onNavigate('flashcards')}>
            <span className="action-icon">🃏</span>
            <span className="action-title">플래시카드</span>
            <span className="action-desc">핵심 개념 암기하기</span>
          </button>
          <button className="action-card" onClick={() => onNavigate('battle')} style={{ borderColor: '#ef4444' }}>
            <span className="action-icon">⚔️</span>
            <span className="action-title">AI 코드 배틀</span>
            <span className="action-desc">AI와 코드 대결</span>
          </button>
        </div>
      </div>
    </div>
  );
}
