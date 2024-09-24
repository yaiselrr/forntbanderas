/* eslint-disable no-inner-declarations */
import {getCurrentInstance} from 'vue'
import {useFocus} from "~co/event/useFocus"
import dayjs from 'dayjs'

export function useInput(type: MaybeRef<string | any> = 'text') {
    const instance = getCurrentInstance()
    if (!instance?.emit) {
        throw new Error('Use Input hook can only be used inside a component instance')
    }

    const {props, emit} = instance

    const isInputNumber = computed!(() => {
        return unref(type) == 'number'
    })

    const {focused, ref, focus, blur} = useFocus(false, isInputNumber)

    function handleChange(event) {
        if (unref(type) == 'date') {
            emit('update:modelValue', dayjs(new Date(event)))
        } else if (unref(type) == 'number') {
            if (event?.target) {
                emit('update:modelValue', Number(event.target.value))
            } else if (event) {
                emit('update:modelValue', Number(event))
            } else {
                emit('update:modelValue', 0)
            }
        } else if (unref(type) == 'editor') {
            emit('update:modelValue', event)
        } else {
            emit('update:modelValue', event.target?.value)
        }
    }

    function clear() {
        emit('update:modelValue', null)
    }

    return {handleChange, clear, focused, inputRef: ref, focus, blur}
}
