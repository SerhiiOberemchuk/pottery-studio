import { create } from "zustand";
import { api } from "@/api/axios";

export interface UserProps {
  id?: string;
  username?: string;
  email: string;
  avatar?: string;
  password: string;
}

export interface AuthTokensProps {
  access_token: string;
  refresh_token: string;
}

import { RegisterProps } from "@/components/shared/form/input/Input";

export interface AuthStateProps {
  user: UserProps | null;
  logIn: ({ email, password }: RegisterProps) => Promise<void>;
  isLoggedIn: boolean;
  error: string | null;
}

export const useAuthStore = create<AuthStateProps>((set) => ({
  user: null,

  logIn: async ({ email, password }: RegisterProps): Promise<void> => {
    try {
      const response = await api.post("/auth/login", {
        email,
        password,
      });
      console.log("+++", response.data);
    } catch (error: unknown) {
      console.log("ПОМИЛКА ", error);
      set({ user: null });
    }
  },

  tokens: null,
  isLoggedIn: false,
  error: null,
}));

// export const useStore = create((set) => ({
//   bears: 0,
//   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//   removeAllBears: () => set({ bears: 0 }),
//   updateBears: (newBears) => set({ bears: newBears }),
// }));
