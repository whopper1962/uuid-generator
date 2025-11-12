import { useRegenerateModeStore } from "@/features/uuid/stores/use-regenerate-mode-store";

export const useUpdateRegenerateMode = () => {
  const regenerateMode = useRegenerateModeStore(
    (state) => state.regenerateMode,
  );
  const setRegenerateMode = useRegenerateModeStore(
    (state) => state.setRegenerateMode,
  );

  return {
    updateRegenerateMode: () => {
      setRegenerateMode(!regenerateMode);
    },
  };
};
