import {useToggle} from '@vueuse/core'
import {ref} from 'vue'

export function useTyping(modelValue: Ref<any>) {
    const [typing, toggle] = useToggle(false)
    const timeout = ref()

    watch(modelValue, () => {
        typing.value = true
        if (timeout.value) {
            clearTimeout(timeout.value)
        }

        const toggleTimeout = setTimeout(toggle, 500)
        timeout.value = toggleTimeout
    })

    return {typing}
}
