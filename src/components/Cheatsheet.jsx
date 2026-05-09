import { useState } from 'react';
import { cheatsheet } from '../data/cheatsheet';

const sectionKeys = Object.keys(cheatsheet);

export default function Cheatsheet({ onBack }) {
  const [activeSection, setActiveSection] = useState(sectionKeys[0]);

  return (
    <div className="page">
      <div className="page-header">
        <button className="back-btn" onClick={onBack}>← 돌아가기</button>
        <h1>📋 문법 참고서</h1>
        <span className="page-desc">C 언어 주요 문법을 한눈에</span>
      </div>

      <div className="cheatsheet-tabs">
        {sectionKeys.map(key => (
          <button
            key={key}
            className={`toolbar-btn ${activeSection === key ? 'active' : ''}`}
            onClick={() => setActiveSection(key)}
          >
            {cheatsheet[key].title}
          </button>
        ))}
      </div>

      <div className="cheatsheet-content">
        <h2 className="cheatsheet-section-title">{cheatsheet[activeSection].title}</h2>
        <div className="cheatsheet-table">
          <div className="cs-header">
            <span className="cs-syntax">문법</span>
            <span className="cs-desc">설명</span>
          </div>
          {cheatsheet[activeSection].items.map((item, idx) => (
            <div key={idx} className={`cs-row ${item.bold ? 'bold' : ''}`}>
              <span className="cs-syntax"><code>{item.syntax}</code></span>
              <span className="cs-desc">{item.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
