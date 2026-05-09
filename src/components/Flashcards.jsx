import { useState, useMemo } from 'react';
import { flashcards } from '../data/flashcards';
import { useProgress } from '../context/ProgressContext';

export default function Flashcards({ onBack }) {
  const { addFlashcardResult } = useProgress();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [done, setDone] = useState(new Set());

  const card = flashcards[currentIndex];
  const remaining = flashcards.length - done.size;

  const shuffle = useMemo(() => {
    return [...flashcards].sort(() => Math.random() - 0.5);
  }, []);

  const currentCard = done.has(flashcards[currentIndex]?.id)
    ? shuffle.find(c => !done.has(c.id))
    : flashcards[currentIndex];

  const actualIndex = currentCard ? flashcards.indexOf(currentCard) : -1;

  const handleNext = () => {
    if (flipped) setFlipped(false);
    const nextUnseen = flashcards.findIndex(c => !done.has(c.id) && c.id !== currentCard?.id);
    if (nextUnseen >= 0) setCurrentIndex(nextUnseen);
    else if (done.size === flashcards.length) return;
    else {
      const nextIdx = (currentIndex + 1) % flashcards.length;
      setCurrentIndex(nextIdx);
    }
  };

  const handleResult = (correct) => {
    if (!currentCard) return;
    addFlashcardResult(currentCard.id, correct);
    setDone(prev => new Set([...prev, currentCard.id]));
    setFlipped(false);

    const next = flashcards.findIndex(c => !done.has(c.id) && c.id !== currentCard.id);
    if (next >= 0) setCurrentIndex(next);
  };

  const handleFlip = () => setFlipped(!flipped);

  if (remaining === 0) {
    return (
      <div className="page">
        <div className="page-header">
          <button className="back-btn" onClick={onBack}>← 돌아가기</button>
          <h1>🃏 플래시카드</h1>
        </div>
        <div className="flashcard-complete">
          <div className="fc-done-icon">🎉</div>
          <h2>모든 카드 학습 완료!</h2>
          <button className="add-btn" onClick={() => { setDone(new Set()); setCurrentIndex(0); }}>
            다시 시작
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="page-header">
        <button className="back-btn" onClick={onBack}>← 돌아가기</button>
        <h1>🃏 플래시카드</h1>
        <span className="counter">{remaining}/{flashcards.length} 남음</span>
      </div>

      <div className="flashcard-container">
        <div className={`flashcard ${flipped ? 'flipped' : ''}`} onClick={handleFlip}>
          <div className="flashcard-inner">
            <div className="flashcard-front">
              <div className="fc-label">문제</div>
              <div className="fc-text">{currentCard?.front}</div>
              <div className="fc-hint">클릭하여 정답 확인</div>
            </div>
            <div className="flashcard-back">
              <div className="fc-label">정답</div>
              <div className="fc-text">{currentCard?.back}</div>
              <div className="fc-hint">얼마나 맞췄나요?</div>
            </div>
          </div>
        </div>

        {flipped && (
          <div className="fc-actions">
            <button className="fc-btn wrong-btn" onClick={() => handleResult(false)}>
              ❌ 틀렸어요
            </button>
            <button className="fc-btn right-btn" onClick={() => handleResult(true)}>
              ✅ 맞았어요
            </button>
          </div>
        )}

        {!flipped && (
          <div className="fc-actions center">
            <button className="toolbar-btn" onClick={handleNext}>건너뛰기 →</button>
          </div>
        )}
      </div>
    </div>
  );
}
