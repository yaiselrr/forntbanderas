import {getCurrentInstance} from 'vue'
import {useTyping} from "~co/event/useTyping"
import {SharedProps} from '../validation/sharedProps'
import {useInput} from './useInput'

export function useCommonValidation(vobject: ComputedRef<any>) {
    const isBlur = ref(false)
    const autofillKey = ref('new-password')
    const formContainer = ref<any>()

    const instance = getCurrentInstance()
    const emit = instance?.emit
    const props: SharedProps = instance?.props as any
    const {asyncRules, loading, modelValue} = toRefs(props)
    const {type} = toRefs(props as any)
    const {focused, handleChange, clear, inputRef} = useInput(type)

    const syncValidationsValid = computed!(() => {
        let valid = true
        for (let i = 0; i < vobject.value?.$silentErrors?.length && valid; i++) {
            const error = vobject?.value?.$silentErrors[i]
            if (!asyncRules?.value.includes(error.$validator)) {
                valid = false
            }
        }
        return valid
    })

    const {typing} = useTyping(modelValue)

    const pendingValidation = computed!<boolean>(() => {
        return vobject.value?.$pending
    })

    const hasError = computed!<boolean>(() => {
        return vobject.value.value?.$error
    })

    const isInvalid = computed!<boolean>(() => {
        return vobject.value.value?.$invalid
    })

    const status = reactive({
        pending: pendingValidation,
        hasError,
        isInvalid,
    })

    const isLoading = computed!(() => {
        return (
            loading.value ||
            (pendingValidation.value && isBlur.value && syncValidationsValid.value && !typing.value)
        )
    })

    function shake() {
        formContainer.value?.classList.add('animated', 'vshake')
        setTimeout(() => {
            formContainer.value?.classList.remove('animated', 'vshake')
        }, 500)
    }

    const emitEmpty = () => {
        emit?.('update:modelValue', '')
        inputRef.value?.focus()
        emit?.('after-clear')
    }

    return {
        inputRef,
        isBlur,
        autofillKey,
        formContainer,
        emit,
        props,
        handleChange,
        shake,
        emitEmpty,
        clear,
        focused,
        isLoading,
        syncValidationsValid,
        typing,
        status,
    }
}
