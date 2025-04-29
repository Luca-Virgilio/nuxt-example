import { ref } from "vue";

export function useHelpers() {
  const loading = ref(false);
  const open = ref(false);

  return {
    loading,
    open,
  };
}
