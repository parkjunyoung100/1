import { useState } from 'react';
import { useProgress } from './context/ProgressContext';
import { ProgressProvider } from './context/ProgressContext';
import Layout from './components/Layout';
import Home from './components/Home';
import Lessons from './components/Lessons';
import LessonView from './components/LessonView';
import Playground from './components/Playground';
import Quizzes from './components/Quizzes';
import QuizView from './components/QuizView';
import Exercises from './components/Exercises';
import ExerciseView from './components/ExerciseView';
import Cheatsheet from './components/Cheatsheet';
import Flashcards from './components/Flashcards';

function AppContent() {
  const [page, setPage] = useState('home');
  const [lessonId, setLessonId] = useState(null);
  const [quizId, setQuizId] = useState(null);
  const [exerciseId, setExerciseId] = useState(null);
  const { stats } = useProgress();

  const navigate = (p) => { setPage(p); setLessonId(null); setQuizId(null); setExerciseId(null); };

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <Home stats={stats} onNavigate={navigate} />;
      case 'lessons':
        return lessonId !== null
          ? <LessonView lessonId={lessonId} onBack={() => setLessonId(null)} onNext={() => navigate('quizzes')} />
          : <Lessons onSelect={(id) => setLessonId(id)} onBack={() => navigate('home')} />;
      case 'quizzes':
        return quizId !== null
          ? <QuizView quizId={quizId} onBack={() => setQuizId(null)} />
          : <Quizzes onSelect={(id) => setQuizId(id)} onBack={() => navigate('home')} />;
      case 'exercises':
        return exerciseId !== null
          ? <ExerciseView exerciseId={exerciseId} onBack={() => setExerciseId(null)} />
          : <Exercises onSelect={(id) => setExerciseId(id)} onBack={() => navigate('home')} />;
      case 'playground':
        return <Playground onBack={() => navigate('home')} />;
      case 'cheatsheet':
        return <Cheatsheet onBack={() => navigate('home')} />;
      case 'flashcards':
        return <Flashcards onBack={() => navigate('home')} />;
      default:
        return <Home stats={stats} onNavigate={navigate} />;
    }
  };

  return (
    <Layout currentPage={page} onNavigate={navigate}>
      {renderPage()}
    </Layout>
  );
}

export default function App() {
  return (
    <ProgressProvider>
      <AppContent />
    </ProgressProvider>
  );
}
