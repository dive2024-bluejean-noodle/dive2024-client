import { create } from "zustand";
import { IUserInfo } from "@/type/user";

interface IUserInfoStore {
  userId: number | null;
  setUserId: (userId: number) => void; // set
  userInfo: IUserInfo | null;
  setUserInfo: (userInfo: IUserInfo) => void;
  resetUserInfo: () => void;
}

export const useUserInfoStore = create<IUserInfoStore>((set) => ({
  userId: null,
  setUserId: (userId: number) => set({ userId }),
  userInfo: null,
  setUserInfo: (userInfo: IUserInfo) => set({ userInfo }),
  resetUserInfo: () => set({ userInfo: null }),
}));
