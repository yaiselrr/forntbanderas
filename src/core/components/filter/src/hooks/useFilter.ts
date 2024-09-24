import {isDef, useToString} from '@vueuse/core'

export function useFilter() {
    const condition = ref()
    const value = ref()

    function clear() {
        condition.value = null
        value.value = null
    }

    const disabled = computed!(() => {
        return condition.value === 'null' || condition.value === 'not_null'
    })

    const filter = computed!(() => {
        if (condition.value) {
            if (condition.value === 'null') {
                return {$eq: null}
            } else if (condition.value === 'not_null') {
                return {$ne: null}
            }

            if (isDef(value.value)) {
                if (!useToString(value.value) || value.value.length) {
                    if (condition.value === '$sw') {
                        return {$regex: `^${value.value}`, $options: 'i'}
                    } else if (condition.value === '$c') {
                        return {$regex: value.value, $options: 'i'}
                    } else if (condition.value === '$ew') {
                        return {$regex: `${value.value}$`, $options: 'i'}
                    }

                    return {[condition.value]: value.value}
                }
            }
        }
        return null
    })

    return {
        filter,
        condition,
        value,
        disabled,
        clear,
    }
}
