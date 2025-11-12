import { create } from "zustand";

interface UuidStore {
  uuid: string;
  updated: boolean;
  setUuid: (uuid: string) => void;
  setUpdated: (updated: boolean) => void;
}

export const useUuidStore = create<UuidStore>((set) => ({
  uuid: "",
  updated: false,
  setUuid: (uuid: string) => set({ uuid }),
  setUpdated: (updated: boolean) => set({ updated }),
}));
