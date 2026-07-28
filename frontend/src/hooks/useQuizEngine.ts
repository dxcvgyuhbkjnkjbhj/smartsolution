import { useState, useCallback } from 'react';

interface QuizOption {
  id: string;
  points: number;
  isCorrect?: boolean;
}

interface UseQuizEngineProps {
  totalQuestions: number;
  animationDurationMs?: number;
  onComplete: (totalScore: number, answers: Record<string, QuizOption>) => void;
}

export function useQuizEngine({ 
  totalQuestions, 
  animationDurationMs = 500, 
  onComplete 
}: UseQuizEngineProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, QuizOption>>({});
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleSelectAnswer = useCallback((questionId: string, option: QuizOption) => {
    // 1. Bloqueo de estado estricto (Previene race conditions con Framer Motion)
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setAnswers(prev => ({ ...prev, [questionId]: option }));

    // 2. Feedback visual delay (Optimistic UI response)
    setTimeout(() => {
      // 3. Validación matemática de límites
      if (currentIndex < totalQuestions - 1) {
        setCurrentIndex(prev => prev + 1);
        
        // 4. Liberar bloqueo sincronizado con la animación de salida
        setTimeout(() => {
          setIsTransitioning(false);
        }, animationDurationMs);
        
      } else {
        // 5. Finalizar evaluación con inmutabilidad
        const finalAnswers = { ...answers, [questionId]: option };
        const totalScore = Object.values(finalAnswers).reduce((acc, curr) => acc + curr.points, 0);
        onComplete(totalScore, finalAnswers);
      }
    }, 400); // Feedback delay
  }, [currentIndex, isTransitioning, totalQuestions, animationDurationMs, answers, onComplete]);

  return {
    currentIndex,
    isTransitioning,
    answers,
    handleSelectAnswer,
    progressPercentage: ((currentIndex) / totalQuestions) * 100,
  };
}