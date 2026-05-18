import { createContext, useContext, useState, useCallback } from 'react';

const ProgressContext = createContext(null);

export function ProgressProvider({ children }) {
  const [progress, setProgress] = useState(() => {
    try { return JSON.parse(localStorage.getItem('c_progress')) || {}; } catch { return {}; }
  });

  const save = useCallback((data) => {
    localStorage.setItem('c_progress', JSON.stringify(data));
    setProgress(data);
  }, []);

  const completeLesson = useCallback((id) => {
    const next = { ...progress, [`lesson_${id}`]: true };
    save(next);
  }, [progress, save]);

  const completeQuiz = useCallback((id, score) => {
    const prev = progress[`quiz_${id}`] || { score: 0, tries: 0 };
    const next = { ...progress, [`quiz_${id}`]: { score: Math.max(prev.score, score), tries: prev.tries + 1 } };
    save(next);
  }, [progress, save]);

  const completeExercise = useCallback((id) => {
    const next = { ...progress, [`exercise_${id}`]: true };
    save(next);
  }, [progress, save]);

  const addFlashcardResult = useCallback((id, correct) => {
    const prev = progress[`card_${id}`] || { correct: 0, total: 0 };
    const next = { ...progress, [`card_${id}`]: { correct: prev.correct + (correct ? 1 : 0), total: prev.total + 1 } };
    save(next);
  }, [progress, save]);

  const stats = {
    lessonsDone: Object.keys(progress).filter(k => k.startsWith('lesson_')).length,
    lessonsTotal: 20,
    avgQuizScore: (() => {
      const scores = Object.entries(progress).filter(([k]) => k.startsWith('quiz_')).map(([, v]) => v.score);
      return scores.length ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;
    })(),
    exercisesDone: Object.keys(progress).filter(k => k.startsWith('exercise_')).length,
    exercisesTotal: 20,
    flashcardsStudied: Object.keys(progress).filter(k => k.startsWith('card_')).length,
  };

  return (
    <ProgressContext.Provider value={{ progress, stats, completeLesson, completeQuiz, completeExercise, addFlashcardResult }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  return useContext(ProgressContext);
}
