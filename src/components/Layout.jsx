export default function Layout({ children, currentPage, onNavigate }) {
  const navItems = [
    { key: 'home', label: '홈', icon: '🏠' },
    { key: 'lessons', label: '학습', icon: '📖' },
    { key: 'playground', label: '코드편집기', icon: '💻' },
    { key: 'quizzes', label: '퀴즈', icon: '📝' },
    { key: 'exercises', label: '연습문제', icon: '⚡' },
    { key: 'cheatsheet', label: '참고서', icon: '📋' },
    { key: 'flashcards', label: '플래시카드', icon: '🃏' },
  ];

  return (
    <div className="app-layout">
      <nav className="sidebar">
        <div className="sidebar-header" onClick={() => onNavigate('home')}>
          <span className="sidebar-logo">C</span>
          <span className="sidebar-title">C 언어 학습</span>
        </div>
        <div className="sidebar-nav">
          {navItems.map(item => (
            <button
              key={item.key}
              className={`nav-btn ${currentPage === item.key ? 'active' : ''}`}
              onClick={() => onNavigate(item.key)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </button>
          ))}
        </div>
        <div className="sidebar-footer">
          <span>v1.0</span>
        </div>
      </nav>
      <main className="main-content">
        {children}
      </main>
    </div>
  );
}
