import { useState } from 'react';
import { lessons } from '../data/lessons';
import { useProgress } from '../context/ProgressContext';

export default function LessonView({ lessonId, onBack, onNext }) {
  const lesson = lessons.find(l => l.id === lessonId);
  const { completeLesson, progress } = useProgress();
  const [completed, setCompleted] = useState(!!progress[`lesson_${lessonId}`]);

  if (!lesson) return null;

  const handleComplete = () => {
    completeLesson(lessonId);
    setCompleted(true);
  };

  const renderContent = (text) => {
    const lines = text.split('\n');
    const elements = [];
    let inCode = false;
    let codeLines = [];

    lines.forEach((line, i) => {
      if (line.trim().startsWith('```c') && !inCode) {
        inCode = true;
        codeLines = [];
      } else if (line.trim() === '```' && inCode) {
        inCode = false;
        elements.push(<pre key={i} className="code-block"><code>{codeLines.join('\n')}</code></pre>);
      } else if (inCode) {
        codeLines.push(line);
      } else if (line.startsWith('**') && line.endsWith('**')) {
        elements.push(<h3 key={i} className="lesson-subtitle">{line.replace(/\*\*/g, '')}</h3>);
      } else if (line.startsWith('- ')) {
        elements.push(<li key={i} className="lesson-li">{line.slice(2)}</li>);
      } else if (line.trim() === '') {
        elements.push(<div key={i} className="lesson-spacer" />);
      } else if (line.startsWith('`')) {
        elements.push(<p key={i} className="lesson-text"><code className="inline-code">{line.replace(/`/g, '')}</code></p>);
      } else {
        elements.push(<p key={i} className="lesson-text">{line}</p>);
      }
    });

    return elements;
  };

  return (
    <div className="page">
      <div className="page-header">
        <button className="back-btn" onClick={onBack}>← 목록</button>
        <h1>{lesson.icon} {lesson.title}</h1>
      </div>

      <div className="lesson-content">
        {renderContent(lesson.content)}
      </div>

      <div className="lesson-code-preview">
        <h3>💻 예제 코드</h3>
        <pre className="code-block"><code>{lesson.code}</code></pre>
      </div>

      <div className="lesson-actions">
        {!completed ? (
          <button className="add-btn" onClick={handleComplete}>✅ 학습 완료</button>
        ) : (
          <span className="completed-badge">✅ 완료됨</span>
        )}
        <button className="toolbar-btn" onClick={onNext}>다음: 퀴즈 풀기 →</button>
      </div>
    </div>
  );
}
