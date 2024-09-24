import {nextTick} from 'vue'

export function useElementWidth(id?) {
    const el = ref()
    const width = ref(0)

    function updateWidth() {
        const elWidth = getElement()?.getBoundingClientRect().width
        width.value = elWidth
    }

    function getElement() {
        if (id) {
            return document.getElementById(id)
        } else {
            return el.value
        }
    }

    onMounted!(() => {
        window.addEventListener('resize', updateWidth)
        setTimeout(() => {
            updateWidth()
        }, 300)
    })

    onUnmounted!(() => {
        window.removeEventListener('resize', updateWidth)
    })

    return {width, el, update: updateWidth}
}
