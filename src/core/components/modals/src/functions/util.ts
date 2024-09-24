export function genericModalExpose() {
    const genericModal = ref()

    const exposeObj = {
        reset: () => genericModal.value.reset(),
        loadData: (data) => genericModal.value.loadData(data),
    }

    return {
        genericModal,
        exposeObj,
    }
}
