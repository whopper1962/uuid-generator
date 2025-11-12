import { useNamespacedNameStore } from "@/features/uuid/stores/use-namespaced-name-store";
import { useUuidStore } from "@/features/uuid/stores/use-uuid-store";
import { UuidVersion } from "@/features/uuid/types";
import { createUuid } from "@/features/uuid/utils/create-uuid";

export const useCreateUuid = () => {
  const nameInStore = useNamespacedNameStore((state) => state.name);
  const namespaceInStore = useNamespacedNameStore((state) => state.namespace);
  const setUuid = useUuidStore((state) => state.setUuid);
  const setUpdated = useUuidStore((state) => state.setUpdated);

  return {
    createUuid: (version: UuidVersion, name?: string, namespace?: string) => {
      const newUuid = createUuid(
        version,
        name || nameInStore,
        namespace || namespaceInStore,
      );
      if (!newUuid) {
        throw new Error("Failed to create UUID");
      }
      setUuid(newUuid);
      setUpdated(true);
      setTimeout(() => {
        setUpdated(false);
      }, 300);
    },
  };
};
