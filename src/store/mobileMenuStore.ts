import { create } from 'zustand';

type MenuState = {
  isMenuOpen: boolean;
  togleOpenMenu: () => void;
};
export const useMobileMenuState = create<MenuState>((set) => ({
  isMenuOpen: false,
  togleOpenMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
}));
