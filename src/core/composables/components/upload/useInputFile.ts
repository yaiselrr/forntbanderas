export function useInputFile() {
    const inputFile = ref()

    function openReader() {
        inputFile.value.click()
    }

    function clear() {
        if (inputFile.value) {
            inputFile.value.value = ''
        }
    }

    return {
        inputFile,
        openReader,
        clear,
    }
}
