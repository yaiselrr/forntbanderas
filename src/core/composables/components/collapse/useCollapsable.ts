import {isDef, useToggle, whenever} from '@vueuse/core'
import {uuidv4} from "~h/utils/utils"

export function useCollapsable(defaultOpen = false) {
    const el = ref<HTMLElement>()
    const id = uuidv4()
    const [isOpen, toggleOpen] = useToggle(defaultOpen)
    const [maxContent, toggleMaxContent] = useToggle(defaultOpen)

    const panelStyle = computed!(() => {
        const panel = document.getElementById(id)
        return {
            maxHeight: isOpen.value
                ? maxContent.value
                    ? 'max-content'
                    : panel?.scrollHeight + 'px'
                : '0px',
        }
    })

    whenever(isOpen, () => {
        setTimeout(() => {
            toggleMaxContent(true)
        }, 300)
    })

    function toggle(val?) {
        const value = val ? val : !isOpen.value
        if (!value) {
            toggleMaxContent(false)
        }
        setTimeout(() => {
            toggleOpen(value)
        }, 100)
    }

    onMounted!(() => {
        el.value?.classList.add('overflow-hidden', 'transition-all', 'duration-200', 'ease-out')
        update()
    })

    function update() {
        if (el.value) {
            const panel = document.getElementById(id)
            if (isOpen.value) {
                el.value.style.maxHeight = 'initial'
                el.value.style.maxHeight = panel?.scrollHeight + 'px'
            } else {
                el.value.style.maxHeight = '0px'
            }
        }
    }

    watch(
        panelStyle,
        () => {
            if (el.value) {
                el.value.style.maxHeight = panelStyle.value.maxHeight
            }
        },
        {immediate: true}
    )

    return {toggle, el, isOpen, id, update}
}
