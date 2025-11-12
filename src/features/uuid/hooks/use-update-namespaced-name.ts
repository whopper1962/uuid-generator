import { validate } from "uuid";
import { useNamespacedNameStore } from "@/features/uuid/stores/use-namespaced-name-store";

export const useUpdateNamespacedName = () => {
  const setNamespace = useNamespacedNameStore((state) => state.setNamespace);
  const setName = useNamespacedNameStore((state) => state.setName);

  return {
    updateNamespacedName: (name: string, namespace: string) => {
      setName(name);
      setNamespace(namespace);
    },
    validateNamespace: (namespace: string) => {
      return validate(namespace);
    },
  };
};
