import { useVersionStore } from "@/features/uuid/stores/use-version-store";

export const useVersion = () => {
  const version = useVersionStore((state) => state.version);
  const hasHydrated = useVersionStore((state) => state._hasHydrated);

  return { version, isLoading: !hasHydrated };
};
