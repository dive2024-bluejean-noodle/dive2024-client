import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { IQuestionAnswer, TQuestionOption } from '@/type/bupt';

interface IBuptStore {
  questionOption: TQuestionOption | null;
  setQuestionOption: (value: TQuestionOption) => void;
  qaList: Array<IQuestionAnswer>;
  setQaList: (value: Array<IQuestionAnswer>) => void;
  reset: () => void;
}

export const useQaListStorage = create(
  persist<IBuptStore>(
    (set, get) => ({
      questionOption: null,
      setQuestionOption: (value) => {
        set({ questionOption: value });
      },
      qaList: [],
      setQaList: (value) => {
        set({ qaList: value });
      },
      reset: () => {
        set({ questionOption: null, qaList: [] });
      },
    }),
    {
      name: 'bu-meet-bupt-qa-list', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    },
  ),
);
