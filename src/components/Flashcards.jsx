import { useState, useEffect, useRef, useMemo } from 'react';
import { flashcards } from '../data/flashcards';

const INITIAL_LIVES = 3;
const COMBO_BONUS = 10;
const BASE_SCORE = 50;
const TIME_LIMIT = 15;

function getGrade(score, total) {
  const pct = total > 0 ? score / total : 0;
  if (pct >= 0.95) return { label: 'S', color: '#f59e0b' };
  if (pct >= 0.85) return { label: 'A', color: '#22c55e' };
  if (pct >= 0.70) return { label: 'B', color: '#3b82f6' };
  if (pct >= 0.55) return { label: 'C', color: '#8b5cf6' };
  if (pct >= 0.40) return { label: 'D', color: '#f97316' };
  return { label: 'F', color: '#ef4444' };
}

export default function Flashcards({ onBack }) {
  const deck = useMemo(() => [...flashcards].sort(() => Math.random() - 0.5), []);
  const [index, setIndex] = useState(0);
  const [lives, setLives] = useState(INITIAL_LIVES);
  const [combo, setCombo] = useState(0);
  const [maxCombo, setMaxCombo] = useState(0);
  const [score, setScore] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [totalAttempted, setTotalAttempted] = useState(0);
  const [timeLeft, setTimeLeft] = useState(TIME_LIMIT);
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const timerRef = useRef(null);

  const card = deck[index];
  const isCode = card?.type === 'code';
  const isQa = card?.type === 'qa' || !card?.type;
  const isMultipleChoice = isCode;

  useEffect(() => {
    if (gameOver || !card) return;
    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 0) {
          clearInterval(timerRef.current);
          handleTimeout();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [index, gameOver]);

  const handleTimeout = () => {
    if (answered) return;
    setAnswered(true);
    setCombo(0);
    setTotalAttempted(prev => prev + 1);
    setLives(prev => {
      const next = prev - 1;
      if (next <= 0) setGameOver(true);
      return Math.max(0, next);
    });
  };

  const handleAnswer = (answer) => {
    if (answered || gameOver) return;
    clearInterval(timerRef.current);
    setSelected(answer);
    setAnswered(true);
    setTotalAttempted(prev => prev + 1);

    if (isMultipleChoice) {
      if (answer === card.answer) {
        const bonus = Math.floor(combo * COMBO_BONUS);
        setScore(prev => prev + BASE_SCORE + bonus);
        setCombo(prev => {
          const next = prev + 1;
          setMaxCombo(mc => Math.max(mc, next));
          return next;
        });
        setCorrectCount(prev => prev + 1);
      } else {
        setCombo(0);
        setLives(prev => {
          const next = prev - 1;
          if (next <= 0) setTimeout(() => setGameOver(true), 100);
          return Math.max(0, next);
        });
      }
    } else {
      setCorrectCount(prev => prev + 1);
      setScore(prev => prev + BASE_SCORE);
      setCombo(prev => {
        const next = prev + 1;
        setMaxCombo(mc => Math.max(mc, next));
        return next;
      });
    }
  };

  const handleNext = () => {
    if (index + 1 >= deck.length) {
      setShowResult(true);
      return;
    }
    setIndex(prev => prev + 1);
    setTimeLeft(TIME_LIMIT);
    setSelected(null);
    setAnswered(false);
  };

  const handleQuit = () => {
    setShowResult(true);
    setGameOver(true);
  };

  const handleRestart = () => {
    setIndex(0);
    setLives(INITIAL_LIVES);
    setCombo(0);
    setMaxCombo(0);
    setScore(0);
    setCorrectCount(0);
    setTotalAttempted(0);
    setTimeLeft(TIME_LIMIT);
    setSelected(null);
    setAnswered(false);
    setGameOver(false);
    setShowResult(false);
  };

  const grade = getGrade(correctCount, totalAttempted || 1);

  if (showResult || gameOver) {
    return (
      <div className="page">
        <div className="page-header">
          <button className="back-btn" onClick={onBack}>← 돌아가기</button>
          <h1>🃏 플래시카드</h1>
        </div>
        <div className="flashcard-complete">
          <div style={{ fontSize: '4rem', marginBottom: 8 }}>🎉</div>
          <h2 style={{ color: grade.color, fontSize: '2rem', marginBottom: 8 }}>등급 {grade.label}</h2>
          <div style={{ color: '#d1d5db', marginBottom: 20, lineHeight: 2 }}>
            <div>정답: {correctCount}/{totalAttempted}</div>
            <div>점수: {score}점</div>
            <div>최대 콤보: {maxCombo}연속</div>
          </div>
          <button className="add-btn" onClick={handleRestart}>🔄 다시 시작</button>
        </div>
      </div>
    );
  }

  if (!card) return null;

  return (
    <div className="page">
      <div className="page-header">
        <button className="back-btn" onClick={onBack}>← 돌아가기</button>
        <h1>🃏 플래시카드</h1>
        <button className="toolbar-btn" onClick={handleQuit} style={{ color: '#ef4444' }}>그만두기</button>
      </div>

      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '8px 16px', marginBottom: 12,
        background: '#1e1f2b', borderRadius: 10
      }}>
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <span style={{ color: '#ef4444', fontSize: '1.1rem' }}>
            {'♥'.repeat(lives)}{'♡'.repeat(INITIAL_LIVES - lives)}
          </span>
          <span style={{
            background: combo >= 5 ? '#f59e0b33' : '#818cf833',
            color: combo >= 5 ? '#f59e0b' : '#818cf8',
            padding: '2px 10px', borderRadius: 12, fontWeight: 600, fontSize: '.85rem'
          }}>
            🔥 {combo}콤보
          </span>
        </div>
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <span style={{ color: '#22c55e', fontWeight: 600 }}>{score}점</span>
          <span style={{
            color: timeLeft <= 5 ? '#ef4444' : '#d1d5db',
            fontWeight: 700, fontSize: '1.1rem',
            animation: timeLeft <= 3 ? 'pulse .5s infinite' : 'none'
          }}>
            ⏱ {timeLeft}s
          </span>
          <span style={{ color: '#6b7280', fontSize: '.85rem' }}>
            {index + 1}/{deck.length}
          </span>
        </div>
      </div>

      <div className="flashcard-container">
        <div className={`flashcard ${answered ? 'flipped' : ''}`}>
          <div className="flashcard-inner">
            <div className="flashcard-front">
              <div className="fc-label" style={{ fontSize: '.85rem', color: '#818cf8' }}>
                {isCode ? '🔮 코드 실행 예측' : '❓ 질문'}
              </div>
              {isCode ? (
                <pre className="fc-code" style={{
                  background: '#0f0f1a', padding: '14px 18px', borderRadius: 8,
                  fontSize: '.9rem', lineHeight: 1.6, textAlign: 'left',
                  overflowX: 'auto', margin: '10px 0', border: '1px solid #2a2b3d'
                }}><code>{card.code}</code></pre>
              ) : (
                <div className="fc-text">{card.front}</div>
              )}
              {!answered && <div className="fc-hint">답을 선택하세요 ⏱ {timeLeft}초</div>}
            </div>
            <div className="flashcard-back">
              <div className="fc-label" style={{ fontSize: '.85rem', color: '#22c55e' }}>
                {selected === card.answer ? '✅ 정답!' : '❌ 오답'}
              </div>
              {isCode ? (
                <>
                  <div className="fc-text" style={{ fontSize: '1rem', margin: '8px 0' }}>
                    정답: <strong style={{ color: '#22c55e' }}>{card.answer}</strong>
                  </div>
                  <div style={{
                    background: '#1a1b23', padding: '10px 14px', borderRadius: 8,
                    fontSize: '.85rem', color: '#eab308', marginTop: 8,
                    lineHeight: 1.5, textAlign: 'left'
                  }}>
                    💡 {card.explanation}
                  </div>
                </>
              ) : (
                <>
                  <div className="fc-text" style={{ fontSize: '1rem' }}>{card.back}</div>
                  <div className={`fc-check-result ${selected === card.answer ? 'correct' : 'wrong'}`}>
                    {selected === card.answer ? '' : ''}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {!answered ? (
          <div className="fc-input-area" style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {isMultipleChoice ? (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                {card.options.map((opt, i) => (
                  <button key={i}
                    onClick={() => handleAnswer(opt)}
                    className="fc-choice-btn"
                    style={{
                      padding: '12px 16px', borderRadius: 10, border: '1px solid #2a2b3d',
                      background: '#1e1f2b', color: '#e5e7eb', cursor: 'pointer',
                      fontSize: '.95rem', fontWeight: 500,
                      transition: 'all .15s'
                    }}
                    onMouseOver={e => e.target.style.background = '#2a2b3d'}
                    onMouseOut={e => e.target.style.background = '#1e1f2b'}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            ) : (
              <div style={{ display: 'flex', gap: 10 }}>
                <button className="fc-btn wrong-btn" onClick={() => handleAnswer('wrong')} style={{ flex: 1 }}>
                  ❌ 틀렸어요
                </button>
                <button className="fc-btn right-btn" onClick={() => handleAnswer('right')} style={{ flex: 1 }}>
                  ✅ 맞았어요
                </button>
              </div>
            )}
          </div>
        ) : (
          <button className="add-btn" onClick={handleNext} style={{ width: '100%', marginTop: 10 }}>
            {index + 1 >= deck.length ? '📊 결과 보기' : '➡️ 다음'}
          </button>
        )}
      </div>
    </div>
  );
}
