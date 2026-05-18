import { useState } from 'react';
import { cheatsheet, cheatsheetLegacy } from '../data/cheatsheet';

const sectionKeys = Object.keys(cheatsheet);

export default function Cheatsheet({ onBack }) {
  const [activeSection, setActiveSection] = useState(sectionKeys[0]);

  const section = cheatsheet[activeSection];

  return (
    <div className="page">
      <div className="page-header">
        <button className="back-btn" onClick={onBack}>← 돌아가기</button>
        <h1>📰 C 언어 잡지사</h1>
        <span className="page-desc">C 언어의 역사, 문화, 실생활 이야기</span>
      </div>

      <div className="cheatsheet-tabs" style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 20 }}>
        {sectionKeys.map(key => (
          <button
            key={key}
            className={`toolbar-btn ${activeSection === key ? 'active' : ''}`}
            onClick={() => setActiveSection(key)}
          >
            {cheatsheet[key].icon} {cheatsheet[key].title}
          </button>
        ))}
      </div>

      <div className="cheatsheet-content">
        <h2 style={{
          fontSize: '1.4rem', fontWeight: 700, marginBottom: 16,
          paddingBottom: 8, borderBottom: '2px solid #22c55e',
          display: 'flex', alignItems: 'center', gap: 8
        }}>
          {section.icon} {section.title}
        </h2>

        {section.articles.map((article, idx) => (
          <div key={idx} style={{
            background: '#1e1f2b', borderRadius: 12, padding: '20px 24px',
            marginBottom: 16, border: '1px solid #2a2b3d'
          }}>
            <h3 style={{
              fontSize: '1.15rem', fontWeight: 600, color: '#22c55e',
              marginBottom: 12, display: 'flex', alignItems: 'center', gap: 8
            }}>
              {article.title}
            </h3>
            <div style={{ lineHeight: 1.8, color: '#d1d5db', fontSize: '.95rem' }}>
              {article.body.split('\n').map((line, i) => (
                <p key={i} style={{ margin: '0 0 8px 0' }}>{line}</p>
              ))}
            </div>
            {article.funFact && (
              <div style={{
                marginTop: 12, padding: '10px 14px', background: '#2a2b3d',
                borderRadius: 8, borderLeft: '3px solid #eab308',
                fontSize: '.88rem', color: '#eab308'
              }}>
                💡 {article.funFact}
              </div>
            )}
          </div>
        ))}

        <details style={{
          background: '#1a1b23', borderRadius: 12, padding: '14px 20px',
          marginBottom: 16, border: '1px solid #2a2b3d', cursor: 'pointer'
        }}>
          <summary style={{
            fontSize: '1rem', fontWeight: 600, color: '#818cf8'
          }}>
            📋 빠른 문법 참고
          </summary>
          <div className="cheatsheet-table" style={{ marginTop: 16 }}>
            <div className="cs-header">
              <span className="cs-syntax">문법</span>
              <span className="cs-desc">설명</span>
            </div>
            {cheatsheetLegacy.map((item, idx) => (
              <div key={idx} className="cs-row">
                <span className="cs-syntax"><code>{item.syntax}</code></span>
                <span className="cs-desc">{item.desc}</span>
              </div>
            ))}
          </div>
        </details>
      </div>
    </div>
  );
}
