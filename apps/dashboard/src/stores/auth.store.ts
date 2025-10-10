import { create } from "zustand";
import { persist } from "zustand/middleware";
import { BuyerProfile, User } from "@intealegend/api-contract";

interface Buyer extends User {
  profile: BuyerProfile;
}

interface AuthState {
  accessToken: string | null;
  user: Buyer | null;
  setAuth: (accessToken: string, user: Buyer) => void;
  clearAuth: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      accessToken: null,
      user: null,
      setAuth: (accessToken, user) => set({ accessToken, user }),
      clearAuth: () => set({ accessToken: null, user: null }),
    }),
    {
      name: "auth-storage",
    }
  )
);
