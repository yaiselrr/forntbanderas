import { useDebounceFn } from '@vueuse/core';
export function useAxiosFetch(axios, axiosRequest, options = {}) {
    const { defaultEnabled = true, defaultValue = null, debounceMs = 0 } = options;
    const loading = ref(false);
    const error = ref(null);
    const result = ref(defaultValue);
    const [enabled, toggleEnabled] = useToggle(unref(defaultEnabled));
    const errorCallbacks = ref([]);
    const resultCallbacks = ref([]);
    function call() {
        loading.value = true;
        useDebounceFn(() => {
            axios(axiosRequest)
                .then((data) => {
                loading.value = false;
                result.value = data.data;
                resultCallbacks.value.forEach((cb) => cb(data));
            })
                .catch((e) => {
                loading.value = false;
                errorCallbacks.value.map((cb) => cb(e));
            });
        }, debounceMs)();
    }
    function onError(callback) {
        errorCallbacks.value.push(callback);
    }
    function onResult(cb) {
        resultCallbacks.value.push(cb);
    }
    unref(enabled) && call();
    const refetch = () => unref(enabled) && call();
    whenever(enabled, call);
    return {
        loading,
        error,
        result,
        onError,
        onResult,
        refetch,
        enabled,
        toggleEnabled,
    };
}
