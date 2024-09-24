import {getCurrentInstance, nextTick} from 'vue'

export function useSelections() {
    const instance = getCurrentInstance()

    const emit = instance?.emit
    const props = instance?.props

    function safeEmit(event: string, ...args: any[]) {
        emit?.(event, ...args)
    }

    function addSelection(key, item) {
        if (props) {
            const {modelValue} = toRefs(props)
            if (modelValue) {
                modelValue && safeEmit('update:modelValue', [...(modelValue.value as any), key])
            }
        }
    }

    function removeSelection(key) {
        if (props) {
            const {modelValue, idKey} = toRefs(props)
            if (modelValue) {
                const filtered = (modelValue.value as string[]).filter(
                    (selectionKey) => selectionKey !== key
                )

                safeEmit('update:modelValue', filtered)
            }
        }
    }

    watch!(
        () => props?.modelValue,
        async () => {
            if (props?.multiple && !props.modelValue) {
                nextTick(() => safeEmit('update:modelValue', []))
            }
        },
        {immediate: true}
    )

    function setSelection(key, item) {
        safeEmit('update:modelValue', key)
    }

    function onSelect({key, item, event}) {
        if (props && props.multiple) {
            if (
                !props.maxSelections ||
                (props.modelValue as any)?.length < (props.maxSelections as any)
            ) {
                if ((props.modelValue as any)?.includes(key)) {
                    removeSelection(key)
                } else {
                    addSelection(key, item)
                }
                event.stopPropagation()
            }
        } else {
            setSelection(key, item)
        }

        safeEmit('clickedItem', {val: key, item, event})
    }

    function clearSelection() {
        if (props?.multiple) {
            safeEmit('update:modelValue', [])
        } else {
            safeEmit('update:modelValue', null)
        }
    }

    return {
        addSelection,
        removeSelection,
        setSelection,
        onSelect,
        clearSelection,
    }
}
