import { create } from "zustand";

interface IOpenSideScreenStore {
  isOpenSideScreen: boolean;
  setIsOpenSideScreen: (value: boolean) => void;
  toggleOpenSideScreen: () => void;
}

export const useOpenSideScreenStore = create<IOpenSideScreenStore>((set) => ({
  isOpenSideScreen: false,
  setIsOpenSideScreen: (value) => set({ isOpenSideScreen: value }),
  toggleOpenSideScreen: () =>
    set((state) => ({ isOpenSideScreen: !state.isOpenSideScreen })),
}));
