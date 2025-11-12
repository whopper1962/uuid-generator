"use client";

import { Spinner } from "@/components/ui/spinner";
import { Toggle } from "@/components/ui/toggle";
import { useRegenerateMode } from "@/features/uuid/hooks/use-regenerate-mode";
import { useUpdateRegenerateMode } from "@/features/uuid/hooks/use-update-regenerate-mode";

export function SwitchRegenerateMode() {
  const { regenerateMode, isLoading } = useRegenerateMode();
  const { updateRegenerateMode } = useUpdateRegenerateMode();

  return (
    <div className="flex items-center justify-center h-12">
      {isLoading ? (
        <Spinner size="md" color="gray" />
      ) : (
        <Toggle
          checked={regenerateMode}
          onChange={updateRegenerateMode}
          size="sm"
          color="green"
          label="Regenerate on copy"
        />
      )}
    </div>
  );
}
