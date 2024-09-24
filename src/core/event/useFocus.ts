import {whenever} from '@vueuse/core'
import {not} from '@vueuse/math'
import {ref, onBeforeUnmount} from 'vue'

export function useFocus(defaultFocus = false, isInputNumber: MaybeRef<boolean> = false) {
    const input = ref<HTMLElement>()
    const focused = ref<boolean>(defaultFocus)

    const focusListener = () => {
        focused.value = true
    }

    const blurListener = () => {
        focused.value = false
    }

    const onBlur = (cb: Fn) => whenever(not(focused), cb)
    const onFocus = (cb: Fn) => whenever(focused, cb)

    watch(input, () => {
        if (input.value) {
            if (input.value?.addEventListener) {
                input.value?.addEventListener('focus', focusListener)
                input.value?.addEventListener('blur', blurListener)
            } else {
                if (!unref(isInputNumber)) {
                    input.value['$el'].addEventListener('focus', focusListener)
                    input.value['$el'].addEventListener('blur', blurListener)
                } else {
                    if (input.value['$refs']) {
                        const el = input.value?.['$el'] as HTMLElement

                        if (el) {
                            const firstChildren = el?.children.item(0)
                            if (firstChildren) {
                                const secondChildren = firstChildren.children[0]
                                secondChildren.addEventListener('focus', focusListener)
                                secondChildren.addEventListener('blur', blurListener)
                            }
                        }
                        // input.value['$refs']?.inputNumberRef.inputRef.addEventListener('focus', focusListener)
                        // input.value['$refs']?.inputNumberRef.inputRef.addEventListener('blur', blurListener)
                    }
                }
            }
        }
    })

    watch(focused, (val, old) => {
        if (val) {
            input.value?.focus()
        } else {
            input.value?.blur()
        }
    })

    onBeforeUnmount(() => {
        if (input.value) {
            if (input.value.removeEventListener) {
                input.value.removeEventListener('focus', focusListener)
                input.value.removeEventListener('blur', blurListener)
            } else {
                if (!unref(isInputNumber)) {
                    input.value['$el'].removeEventListener('focus', focusListener)
                    input.value['$el'].removeEventListener('blur', blurListener)
                } else {
                    if (input.value['$refs']?.inputNumberRef) {
                        input.value['$refs']?.inputNumberRef.inputRef.removeEventListener(
                            'focus',
                            focusListener
                        )
                        input.value['$refs']?.inputNumberRef.inputRef.removeEventListener('blur', blurListener)
                    }
                }
            }
        }
    })

    function focus() {
        input.value?.focus()
    }

    function blur() {
        input.value?.blur()
    }

    return {ref: input, focused, focus, blur, onBlur, onFocus}
}
