import {useRefs} from "~c/core/useRefs"

export function useValidateArray() {
    const {refs, removeRef, setRef} = useRefs<FormValidation>()

    async function validate() {
        let valid = true

        for (const form of refs.value) {
            if (form) {
                const isFormValid = await form!.validate()
                if (!isFormValid) {
                    valid = false
                }
            }
        }
        return valid
    }

    function clear() {
        refs.value = []
    }

    const isEmpty = computed!(() => {
        return refs.value.length === 0
    })

    return {validate, removeRef, setRef, clear, isEmpty}
}
