"use client";

import { RegenerateUuid } from "@/features/uuid/components/regenerate-uuid";
import { EditNamespacedName } from "@/features/uuid/components/edit-namespaced-name";
import { useVersion } from "@/features/uuid/hooks/use-version";
import { UuidVersion } from "@/features/uuid/types";
import { Spinner } from "@/components/ui/spinner";

export function UuidActions() {
  const { version, isLoading } = useVersion();

  return (
    <div className="flex items-center justify-center gap-5 h-12">
      {isLoading ? (
        <Spinner size="md" color="gray" />
      ) : (
        <>
          <RegenerateUuid />
          {(version === UuidVersion.v3 || version === UuidVersion.v5) && (
            <EditNamespacedName />
          )}
        </>
      )}
    </div>
  );
}
