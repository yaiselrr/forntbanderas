import {InputState} from '../enums'
import {getTextValidation, InjectionKeys} from '../validation'
import {useCommonValidation} from './useCommonValidation'
import {useStateClasses} from './useStateClasses'

export function useFormValidation() {
    const vue_object: Ref<any> | undefined | null = inject(InjectionKeys.VUE_OBJECT)
    const feedbacks: Ref<Record<string, any>> | undefined = inject(InjectionKeys.FEEDBACKS)
    const validateKey: Ref<boolean> | undefined = inject<Ref<boolean>>(InjectionKeys.VALIDATEKEY)
    const clearKey: Ref<boolean> | undefined = inject<Ref<boolean>>(InjectionKeys.CLEARKEY)

    const vobject = computed!(() => {
        if (!vue_object || !path.value) return null
        return unref(vue_object)
    })

    const object = computed!(() => {
        if (!vobject.value) return null
        if (!path.value.includes('.')) {
            return unref(vobject)[path.value]
        } else {
            const properties = path.value.split('.')
            const provisionalObject = ref({...vobject.value})

            for (let i = 0; i < properties.length; i++) {
                const property = properties[i]
                provisionalObject.value = provisionalObject.value[property]
            }
            return provisionalObject.value
        }
    })

    const {
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
        inputRef,
        isLoading,
        syncValidationsValid,
        typing,
        status,
    } = useCommonValidation(object)

    const {path, asyncRules, loading, successStatus} = toRefs(props)

    const vfeedback = computed!(() => {
        if (!vue_object) return null
        return unref(feedbacks)
    })

    const validateStatus: ComputedRef<string> = computed!(() => {
        if (!vue_object) return 'none'

        const vobject = unref(object)
        if ((syncValidationsValid.value && typing.value) || !unref(isBlur) || isLoading.value) {
            return 'none'
        }

        return vobject?.$error
            ? InputState.ERROR
            : !vobject?.$invalid && vobject?.$dirty
                ? InputState.SUCCESS
                : InputState.NONE
    })

    const getText = computed!(() => {
        if (!vue_object) return null

        const vobject = unref(object)
        const feedback = unref(vfeedback)

        if (vobject?.$pending || !unref(isBlur)) {
            return ''
        }

        for (const error of vobject?.$errors) {
            const validator = error?.$validator
            if (feedback) {
                if (path.value.includes('.')) {
                    const properties = path.value.split('.')
                    let aux = feedback
                    for (let i = 0; i < properties.length; i++) {
                        const property = properties[i]
                        aux = aux[property]
                    }
                    if (aux[validator]) {
                        return aux[validator]
                    }
                } else {
                    if (feedback[path.value] && feedback[path.value][validator]) {
                        return feedback[path.value][validator]
                    }
                }
            }

            return getTextValidation(validator, error.$params)
        }
        return ''
    })

    const blurInput = () => {
        if (path.value) {
            isBlur.value = true
            object.value?.$touch()
            emit?.('onblur')
        }
    }

    const validate = () => {
        if (path.value) {
            isBlur.value = true
            object.value?.$touch()
            if (object.value?.$invalid || object.value?.$pending) {
                if (!object.value?.$pending) {
                    shake()
                }
                return false
            }
        }
        return true
    }

    clearKey &&
    watch!(clearKey, (val: boolean) => {
        if (val == true) {
            clear()
        }
    })

    validateKey &&
    watch!(validateKey, (val: boolean) => {
        if (val == true) {
            validate()
        }
    })

    onMounted!(() => {
        if (asyncRules?.value.length && path.value) {
            object.value?.$touch()
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
        vobject: object,
        isLoading,
        syncValidationsValid,
        status,
    }
}
