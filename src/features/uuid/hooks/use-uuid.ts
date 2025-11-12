import { useEffect } from "react";
import { useNamespacedNameStore } from "@/features/uuid/stores/use-namespaced-name-store";
import { useUuidStore } from "@/features/uuid/stores/use-uuid-store";
import { useVersionStore } from "@/features/uuid/stores/use-version-store";
import { useCreateUuid } from "./use-create-uuid";

export const useUuid = () => {
  const version = useVersionStore((state) => state.version);
  const versionHasHydrated = useVersionStore((state) => state._hasHydrated);
  const namespacedNameHasHydrated = useNamespacedNameStore(
    (state) => state._hasHydrated,
  );
  const uuid = useUuidStore((state) => state.uuid);
  const updated = useUuidStore((state) => state.updated);
  const { createUuid } = useCreateUuid();

  useEffect(() => {
    if (!versionHasHydrated || !namespacedNameHasHydrated) return;
    if (!uuid) {
      createUuid(version);
    }
  }, [
    versionHasHydrated,
    namespacedNameHasHydrated,
    uuid,
    version,
    createUuid,
  ]);

  return {
    uuid,
    updated,
    isLoading: !versionHasHydrated || !namespacedNameHasHydrated,
  };
};
