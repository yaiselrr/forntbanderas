import {computed, ref} from 'vue'

export function usePopupContainer(trigger?: MaybeRef<string>, getPopupContainer?: MaybeRef<any>) {
    const container = ref()
    const getPopupContainerFn = ref()

    getPopupContainerFn.value = unref(getPopupContainer)
        ? unref(getPopupContainer)
        : () => container.value

    const triggerMode = computed(() => {
        return [unref(trigger)] as any
    })

    return {
        container,
        getPopupContainerFn,
        triggerMode,
    }
}
