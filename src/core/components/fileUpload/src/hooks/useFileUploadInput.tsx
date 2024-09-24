import {useDropZone} from '@vueuse/core'
import {WritableComputedRef} from 'vue'
import {ModalFn} from "~co/components/modals"
import {useInputFile} from "~c/components/upload/useInputFile"
import {getFileSizeMB} from "~h/file/utils"

export function useFileUploadInput(
    allFiles: Ref<any[]> | WritableComputedRef<any[]>,
    accept: MaybeRef<string>,
    maxFilesCount: MaybeRef<number>,
    maxSizeMb: MaybeRef<number | string>
) {
    const dropZoneRef = ref<HTMLDivElement>()
    const {isOverDropZone: isOverDocument} = useDropZone(document.body, () => ({}))
    const {isOverDropZone} = useDropZone(dropZoneRef, onDrop)

    const {inputFile, openReader, clear: clearInput} = useInputFile()

    const maxSizeMB = computed!(() => {
        return Number(unref(maxSizeMb))
    })

    // called when files are dropped on zone
    function onDrop(files: File[] | null) {
        onChangeFiles({target: {files}})
    }

    function onChangeFiles(ev) {
        const files = ev.target.files
        const valid = validateFiles(files, maxFilesCount, accept)

        if (valid) {
            allFiles.value = [...allFiles.value, ...files]
        }
    }

    const countLeft = computed!(() => {
        return unref(maxFilesCount) - unref(allFiles).length
    })

    function validateFiles(files, maxFilesCount: MaybeRef<number>, accept: MaybeRef<string>) {
        let valid = true

        const acceptTypes = unref(accept).toLowerCase()

        // Validate files count

        if (files.length > countLeft.value) {
            let description
            if (countLeft.value == 0) {
                description = 'No more files can be added'
            } else if (countLeft.value == 1) {
                description = 'Only 1 file can be added'
            } else {
                description = `Please add ${countLeft.value} or less`
            }

            ModalFn.warning({
                title: `Max of ${unref(maxFilesCount)} files are allowed`,
                description,
            })
            valid = false
        }

        // Validate size and type
        for (let i = 0; i < files.length && valid; i++) {
            const file = files[i]
            const {size, type, name} = file

            const extensionIndex = name.lastIndexOf('.')
            const extension = name.slice(extensionIndex)

            const fileMetaType = type.split('/')[0]
            const fileMetaTypeAllowedAll = fileMetaType + '/*'

            if (
                unref(accept) !== '*' &&
                !acceptTypes.includes(fileMetaTypeAllowedAll) &&
                !acceptTypes.includes(type) &&
                !acceptTypes.includes(extension)
            ) {
                ModalFn.warning({
                    title: `Files of type <small class="text-muted">${type}</small> are not allowed`,
                    description: `Please add valid type files`,
                })
                valid = false
            } else if (getFileSizeMB(size) > maxSizeMB.value) {
                ModalFn.warning({
                    title: `Max size is ${unref(maxSizeMB)} MB`,
                    description: `Please add files smaller than ${unref(maxSizeMB)} MB`,
                })
                valid = false
            }
        }

        return valid
    }

    function removeFile(i) {
        allFiles.value.splice(i, 1)
    }

    function removeAll() {
        allFiles.value = []
    }

    return {
        dropZoneRef,
        isOverDropZone,
        isOverDocument,
        onChangeFiles,
        inputFile,
        openReader,
        clearInput,
        removeFile,
        removeAll,
        countLeft,
    }
}
