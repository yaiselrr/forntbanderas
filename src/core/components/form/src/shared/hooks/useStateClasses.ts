import {InputState} from '../enums'


export function useStateClasses(
    state: Ref<string>,
    focused: Ref<boolean>,
    successStatus: Ref<boolean>
) {
    return computed!(() => {
        return {
            '!border-gray-600': state.value == InputState.NONE && !focused.value,
            '!ring-primary-500 !border-primary-500':
                (state.value == InputState.NONE && focused.value) ||
                (state.value == InputState.SUCCESS && !successStatus.value && focused.value),
            'border-gray-300': state.value == InputState.NONE && !focused.value,
            '!ring-red-400 !border-red-400': state.value == InputState.ERROR,
            '!ring-green-400 border-green-400': state.value == InputState.SUCCESS && successStatus.value,
            '!ring-yellow-300 border-yellow-300': state.value == InputState.WARNING,
        }
    })
}
