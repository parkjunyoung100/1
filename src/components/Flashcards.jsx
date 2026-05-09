import { useState, useMemo } from 'react';
import { flashcards } from '../data/flashcards';
import { useProgress } from '../context/ProgressContext';

export default function Flashcards({ onBack }) {
  const { addFlashcardResult } = useProgress();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [done, setDone] = useState(new Set());
  const [input, setInput] = useState('');
  const [checked, setChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const card = flashcards[currentIndex];
  const remaining = flashcards.length - done.size;

  const shuffle = useMemo(() => {
    return [...flashcards].sort(() => Math.random() - 0.5);
  }, []);

  const currentCard = done.has(flashcards[currentIndex]?.id)
    ? shuffle.find(c => !done.has(c.id))
    : flashcards[currentIndex];

  const actualIndex = currentCard ? flashcards.indexOf(currentCard) : -1;

  const normalizeAnswer = (str) => str.toLowerCase().trim().replace(/\s+/g, ' ');

  const handleCheck = () => {
    if (!currentCard || !input.trim()) return;
    const correct = normalizeAnswer(input) === normalizeAnswer(currentCard.back);
    setIsCorrect(correct);
    setChecked(true);
  };

  const handleResult = (correct) => {
    if (!currentCard) return;
    addFlashcardResult(currentCard.id, correct);
    setDone(prev => new Set([...prev, currentCard.id]));
    setFlipped(false);
    setChecked(false);
    setInput('');

    const next = flashcards.findIndex(c => !done.has(c.id) && c.id !== currentCard.id);
    if (next >= 0) setCurrentIndex(next);
  };

  const handleNext = () => {
    if (flipped) setFlipped(false);
    setChecked(false);
    setInput('');
    const nextUnseen = flashcards.findIndex(c => !done.has(c.id) && c.id !== currentCard?.id);
    if (nextUnseen >= 0) setCurrentIndex(nextUnseen);
    else if (done.size === flashcards.length) return;
    else {
      const nextIdx = (currentIndex + 1) % flashcards.length;
      setCurrentIndex(nextIdx);
    }
  };

  const handleFlip = () => setFlipped(!flipped);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !checked) handleCheck();
  };

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
        <div className={`flashcard ${flipped || checked ? 'flipped' : ''}`} onClick={!checked ? handleFlip : undefined}>
          <div className="flashcard-inner">
            <div className="flashcard-front">
              <div className="fc-label">문제</div>
              <div className="fc-text">{currentCard?.front}</div>
              <div className="fc-hint">정답을 입력하세요</div>
            </div>
            <div className="flashcard-back">
              <div className="fc-label">정답</div>
              <div className="fc-text">{currentCard?.back}</div>
              {checked && (
                <div className={`fc-check-result ${isCorrect ? 'correct' : 'wrong'}`}>
                  {isCorrect ? '✅ 정답!' : '❌ 오답'}
                </div>
              )}
            </div>
          </div>
        </div>

        {!checked ? (
          <div className="fc-input-area">
            <input
              type="text"
              className="fc-input"
              placeholder="정답을 입력하세요..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button className="add-btn" onClick={handleCheck}>정답 확인</button>
          </div>
        ) : (
          <div className="fc-actions">
            <button className="fc-btn wrong-btn" onClick={() => handleResult(false)}>
              ❌ 틀렸어요
            </button>
            <button className="fc-btn right-btn" onClick={() => handleResult(true)}>
              ✅ 맞았어요
            </button>
          </div>
        )}

        {!checked && (
          <div className="fc-actions center">
            <button className="toolbar-btn" onClick={handleNext}>건너뛰기 →</button>
          </div>
        )}
      </div>
    </div>
  );
}