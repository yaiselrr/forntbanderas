import {useToNumber, useToggle} from '@vueuse/core'
import {unref} from 'vue'

export function useLoadImage(src: MaybeRef<string>, delayMs?: any) {
    const [imgLoaded, toggleLoaded] = useToggle()

    function loadImage() {
        toggleLoaded(false)
        const img = new Image()
        img.onload = async function () {
            if (useToNumber(delayMs) && delayMs > 0) {
                setTimeout(() => {
                    toggleLoaded()
                }, delayMs)
            } else {
                toggleLoaded(true)
            }
        }
        img.src = unref(src)
    }

    loadImage()

    watch(() => unref(src), loadImage)

    return imgLoaded
}
