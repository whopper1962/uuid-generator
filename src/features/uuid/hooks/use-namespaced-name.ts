import { useNamespacedNameStore } from "@/features/uuid/stores/use-namespaced-name-store";

export const useNamespacedName = () => {
  const namespace = useNamespacedNameStore((state) => state.namespace);
  const name = useNamespacedNameStore((state) => state.name);
  const hasHydrated = useNamespacedNameStore((state) => state._hasHydrated);

  return { namespace, name, isLoading: !hasHydrated };
};
