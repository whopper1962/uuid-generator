import { useVersionStore } from "@/features/uuid/stores/use-version-store";
import { UuidVersion } from "@/features/uuid/types";

export const useUpdateVersion = () => {
  const setVersion = useVersionStore((state) => state.setVersion);

  return {
    updateVersion: (version: UuidVersion) => {
      setVersion(version);
    },
  };
};
