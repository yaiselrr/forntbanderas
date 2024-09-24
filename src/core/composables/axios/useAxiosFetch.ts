import { AxiosRequestConfig, AxiosStatic } from 'axios'
import { AxiosOptionsParameter } from '~c/axios/AxiosOptionsParameter'
import { useDebounceFn } from '@vueuse/core'
export function useAxiosFetch(
  axios: AxiosStatic,
  axiosRequest: AxiosRequestConfig,
  options: AxiosOptionsParameter = {}
) {
  const { defaultEnabled = true, defaultValue = null, debounceMs = 0 } = options
  const loading = ref(false)
  const error = ref(null)
  const result = ref(defaultValue)
  const [enabled, toggleEnabled] = useToggle(unref(defaultEnabled))

  const errorCallbacks = ref<Fn[]>([])
  const resultCallbacks = ref<Fn[]>([])

  function call() {
    loading.value = true
    useDebounceFn(() => {
      axios(axiosRequest)
        .then((data) => {
          loading.value = false
          result.value = data.data
          resultCallbacks.value.forEach((cb: any) => cb(data))
        })
        .catch((e) => {
          loading.value = false
          errorCallbacks.value.map((cb: any) => cb(e))
        })
    }, debounceMs)()
  }

  function onError(callback: Fn) {
    errorCallbacks.value.push(callback)
  }

  function onResult(cb: Fn) {
      resultCallbacks.value.push(cb)
  }

    unref(enabled) && call()

    const refetch = () => unref(enabled) && call()

    whenever(enabled, call)


    return {
        loading,
        error,
        result,
        onError,
        onResult,
        refetch,
        enabled,
        toggleEnabled,
    }
}
