import { create } from "zustand";
import { persist } from "zustand/middleware";

interface NamespacedNameStore {
  _hasHydrated: boolean;
  setHasHydrated: (state: boolean) => void;
  namespace: string;
  setNamespace: (namespace: string) => void;
  name: string;
  setName: (name: string) => void;
}

export const useNamespacedNameStore = create<NamespacedNameStore>()(
  persist(
    (set) => ({
      _hasHydrated: false,
      setHasHydrated: (state) => set({ _hasHydrated: state }),
      namespace: "123e4567-e89b-12d3-a456-426614174000",
      name: "hellouuid.com",
      setNamespace: (namespace: string) => set({ namespace }),
      setName: (name: string) => set({ name }),
    }),
    {
      name: "namespaced-name-store",
      onRehydrateStorage: (state) => {
        return () => state.setHasHydrated(true);
      },
    },
  ),
);
