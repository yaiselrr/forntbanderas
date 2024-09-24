import {useFormValidation} from './useFormValidation'
import {useSingleValidation} from './useSingleValidation'

export function useValidation(single: boolean) {
    return single ? useSingleValidation() : useFormValidation()
}
