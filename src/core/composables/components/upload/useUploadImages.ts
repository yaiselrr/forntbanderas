import {useToString} from "@vueuse/core"
import {ModalFn} from "~co/components/modals"
import {urlToBase64} from "~h/file/base64Conver"
import {base64ImageToFile, readImageAsUrl} from "~h/image/images"
import {useInputFile} from './useInputFile'

export function useUploadImages({maxFiles = 1, defaultImages = [], maxSize = 5}) {
    const {inputFile, openReader, clear: clearInput} = useInputFile()

    const maxAllowedSize = ref(maxSize * 1024 * 1024) //maxSize MB;

    defaultImages = Array.isArray(defaultImages)
        ? defaultImages
        : useToString(defaultImages)
            ? [defaultImages]
            : []

    const images = ref<string[]>([])

    function loadImages(imagesUrl) {
        imagesUrl.map(async (img) => {
            images.value.push(await urlToBase64(img))
        })
    }

    loadImages(defaultImages)

    function changeImageFile(e) {
        const imgFiles = e.target.files
        const imgFile = imgFiles[0]

        if (maxFiles == 1) {
            if (imgFile && imgFile.size > maxAllowedSize.value) {
                ModalFn.danger({
                    title: `El tamaño máximo de archivo es de ${maxSize} MB`,
                })
            } else if (imgFile) {
                readImageAsUrl(imgFile, (data) => {
                    if (data.result) {
                        images.value[0] = data.result
                    }
                })
            }
        } else {
            //  do something here
        }
    }

    const imageFiles = computed!(() => {
        if (images.value.length) {
            return images.value.map((base64) => base64ImageToFile(base64))
        }
        return []
    })

    const imageFile = computed!(() => {
        if (images.value[0]) {
            return base64ImageToFile(images.value[0])
        }
        return null
    })

    function remove(index) {
        images.value.splice(index, 1)
    }

    function clear() {
        images.value = []
        clearInput()
    }

    return {
        remove,
        clear,
        changeImageFile,
        images,
        inputFile,
        openReader,
        imageFiles,
        imageFile,
        loadImages,
    }
}
