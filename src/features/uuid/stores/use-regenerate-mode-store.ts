import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UseRegenerateModeStore {
  _hasHydrated: boolean;
  setHasHydrated: (state: boolean) => void;
  regenerateMode: boolean;
  setRegenerateMode: (regenerateMode: boolean) => void;
}

export const useRegenerateModeStore = create<UseRegenerateModeStore>()(
  persist(
    (set) => ({
      _hasHydrated: false,
      setHasHydrated: (state) => set({ _hasHydrated: state }),
      regenerateMode: true,
      setRegenerateMode: (regenerateMode: boolean) => set({ regenerateMode }),
    }),
    {
      name: "regenerate-mode-store",
      onRehydrateStorage: (state) => {
        return () => state.setHasHydrated(true);
      },
    },
  ),
);
