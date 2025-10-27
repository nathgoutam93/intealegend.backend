import { create } from "zustand";
import { persist } from "zustand/middleware";
import { User, BuyerProfile } from "@intealegend/api-contract";

interface Buyer extends User {
  profile: BuyerProfile;
}

interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  user: Buyer | null;
  setAuth: (accessToken: string, refreshToken: string, user: Buyer) => void;
  clearAuth: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      accessToken: null,
      refreshToken: null,
      user: null,
      setAuth: (accessToken, refreshToken, user) =>
        set({ accessToken, refreshToken, user }),
      clearAuth: () => set({ accessToken: null, user: null }),
    }),
    {
      name: "auth-storage",
    }
  )
);
