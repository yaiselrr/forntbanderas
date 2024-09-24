export function useTransfer(disabledKeys: MaybeRef<any[]>, keys: Ref<any[]>) {
    const checkedKeys = ref<any[]>([])

    const availableKeys = computed!(() => {
        return unref(keys).filter((key: any) => !unref(disabledKeys).includes(key))
    })

    const isIndeterminate = computed!(() => {
        return checkedKeys.value.length < availableKeys.value.length && checkedKeys.value.length > 0
    })

    const isCheckedAll = computed!(() => {
        return checkedKeys.value.length == availableKeys.value.length && checkedKeys.value.length > 0
    })

    return [checkedKeys, isIndeterminate, isCheckedAll, availableKeys] as any[]
}
