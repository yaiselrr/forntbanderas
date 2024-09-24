import useVuelidate from '@vuelidate/core'
import {getCurrentInstance} from 'vue'
import {InputState} from '../enums'
import {getTextValidation} from '../validation'
import {useCommonValidation} from './'
import {useStateClasses} from './useStateClasses'

export function useSingleValidation() {
    const instance = getCurrentInstance()
    const props: any = instance?.props as any

    const {path, loading, feedbacks, asyncRules, successStatus, modelValue} = toRefs(props)

    const vobject = useVuelidate(
        {value: instance?.props.validations},
        reactive({value: modelValue}),
        {$lazy: true}
    )

    const {
        inputRef,
        isBlur,
        autofillKey,
        formContainer,
        emit,
        handleChange,
        shake,
        emitEmpty,
        clear,
        focused,
        isLoading,
        syncValidationsValid,
        typing,
        status,
    } = useCommonValidation(vobject as any)

    const validateStatus: ComputedRef<string> = computed!(() => {
        if ((syncValidationsValid.value && typing.value) || !unref(isBlur) || isLoading.value) {
            return 'none'
        }

        return vobject.value?.$error
            ? InputState.ERROR
            : !vobject.value?.$invalid && vobject.value?.$dirty
                ? InputState.SUCCESS
                : InputState.NONE
    })

    const getText = computed!(() => {
        if (vobject.value?.$pending || !unref(isBlur)) {
            return ''
        }

        for (const error of vobject.value?.$errors) {
            const validator = error?.$validator
            return feedbacks.value?.[validator] ?? getTextValidation(validator, error?.$params)
        }
        return ''
    })

    const blurInput = () => {
        isBlur.value = true
        vobject.value.value?.$touch()
        emit?.('onblur')
    }

    const validate = () => {
        isBlur.value = true
        vobject.value.value?.$touch()
        if (vobject.value.value?.$invalid || vobject.value.value?.$pending) {
            if (!vobject.value.value?.$pending) {
                shake()
            }
            return false
        }
        return true
    }

    onMounted!(() => {
        if (asyncRules.value?.length && path.value) {
            vobject.value.value?.$touch()
        }
    })

    const stateClasses = useStateClasses(validateStatus, focused, successStatus)

    return {
        feedbacks,
        formContainer,
        inputRef,
        isBlur,
        autofillKey,
        validateStatus,
        getText,
        handleChange,
        shake,
        emitEmpty,
        clear,
        blurInput,
        validate,
        focused,
        stateClasses,
        vobject,
        isLoading,
        syncValidationsValid,
        status,
    }
}
