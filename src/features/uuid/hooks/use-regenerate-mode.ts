import { useRegenerateModeStore } from "@/features/uuid/stores/use-regenerate-mode-store";

export const useRegenerateMode = () => {
  const regenerateMode = useRegenerateModeStore(
    (state) => state.regenerateMode,
  );
  const hasHydrated = useRegenerateModeStore((state) => state._hasHydrated);

  return {
    regenerateMode,
    isLoading: !hasHydrated,
  };
};
