import { UuidVersion } from "@/features/uuid/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface VersionStore {
  _hasHydrated: boolean;
  setHasHydrated: (state: boolean) => void;
  version: UuidVersion;
  setVersion: (version: UuidVersion) => void;
}

export const useVersionStore = create<VersionStore>()(
  persist(
    (set) => ({
      _hasHydrated: false,
      setHasHydrated: (state) => set({ _hasHydrated: state }),
      version: UuidVersion.v4,
      setVersion: (version: UuidVersion) => set({ version }),
    }),
    {
      name: "version-store",
      onRehydrateStorage: (state) => {
        return () => state.setHasHydrated(true);
      },
    },
  ),
);
