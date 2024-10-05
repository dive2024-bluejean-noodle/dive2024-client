import { create } from "zustand";
import { IUserInfo } from "@/type/user";

interface IUserInfoStore {
  userInfo: IUserInfo | null;
  setUserInfo: (userInfo: IUserInfo) => void;
  resetUserInfo: () => void;
}

export const useUserInfoStore = create<IUserInfoStore>((set) => ({
  userInfo: null,
  setUserInfo: (userInfo: IUserInfo) => set({ userInfo }),
  resetUserInfo: () => set({ userInfo: null }),
}));
