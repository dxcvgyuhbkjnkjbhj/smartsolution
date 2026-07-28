import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ProgressState {
  xp: number;
  level: number;
  completedLessons: string[]; // IDs de lecciones completadas
  unlockedModules: string[];  // IDs de módulos desbloqueados
  
  // Acciones
  addXp: (amount: number) => void;
  completeLesson: (lessonId: string, nextModuleIdToUnlock?: string) => void;
  resetProgress: () => void;
}

export const useProgressStore = create<ProgressState>()(
  persist(
    (set) => ({
      xp: 0,
      level: 1,
      completedLessons: [],
      unlockedModules: ['module-0'], // Módulo 0 siempre desbloqueado por defecto

      addXp: (amount) => set((state) => {
        const newXp = state.xp + amount;
        const newLevel = Math.floor(newXp / 1000) + 1; // Sube de nivel cada 1000 XP
        return { xp: newXp, level: newLevel };
      }),

      completeLesson: (lessonId, nextModuleIdToUnlock) => set((state) => {
        // Evita duplicados si la recarga
        if (state.completedLessons.includes(lessonId)) return state;

        const updatedModules = nextModuleIdToUnlock && !state.unlockedModules.includes(nextModuleIdToUnlock)
          ? [...state.unlockedModules, nextModuleIdToUnlock]
          : state.unlockedModules;

        return {
          completedLessons: [...state.completedLessons, lessonId],
          unlockedModules: updatedModules
        };
      }),

      resetProgress: () => set({ xp: 0, level: 1, completedLessons: [], unlockedModules: ['module-0'] }),
    }),
    {
      name: 'learning-progress-storage', // Persistencia en localStorage
    }
  )
);