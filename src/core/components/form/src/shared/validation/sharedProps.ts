import {pt} from '~h/types/propTypes'
import {InputState} from '../enums'

export const sharedProps = {
    label: pt.string,
    hint: pt.string,
    loading: pt.bool.def(false),
    allowClear: pt.bool.def(false),
    labelClass: pt.string.def(''),
    rounded: pt.bool.def(true),
    disabled: pt.bool.def(false),
    containerClass: pt.string.def('ctn-input'),
    state: pt.oneOf(['success', 'warning', 'error', 'none']).def('none'),
    path: pt.string,
    placeholder: pt.string,
    asyncRules: pt.arrayOf(String).def([]),
    requiredMark: pt.bool.def(false),
    optionalMark: pt.bool.def(false),
    successStatus: pt.bool.def(false),
    validations: pt.object.def({}),
    feedbacks: pt.object,
    size: pt.oneOf(['small', 'medium', 'large']).def('medium'),
}

export interface SharedProps {
    modelValue: string
    label: string
    asyncRules: string[]
    hint: string
    loading: boolean
    allowClear: boolean
    disabled: boolean
    successStatus: boolean
    state: InputState
    feedbacks: Record<any, any>
    path: string
    showRequired: boolean
    validations?: Record<any, any>
}
