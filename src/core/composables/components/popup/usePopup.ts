import {onClickOutside, refDebounced, useMouseInElement, useToggle, whenever} from '@vueuse/core'
import {nextTick} from 'vue'
import {delay} from "~h/utils/utils"
import {and, not, or} from '@vueuse/math'

export function usePopup({loading, trigger}: { loading?: Ref<boolean>; trigger?: Ref<string> }) {
    const target = ref(null)
    const triggerTarget = ref(null)
    const isOpenedFromTarget = ref(false)
    const [visible, toggle] = useToggle(false)
    const triggerHover = computed!(() => {
        return trigger?.value == 'hover'
    })

    const {isOutside} = useMouseInElement(triggerTarget)
    const {isOutside: isOutsideTarget} = useMouseInElement(target)
    const [initializedTarget, toggleInitializedTarget] = useToggle(false)

    whenever(not(isOutsideTarget), () => toggleInitializedTarget(false))

    whenever(
        and(or(not(isOutside), and(not(isOutsideTarget), initializedTarget)), triggerHover),
        () => toggle(true)
    )

    whenever(and(isOutside, isOutsideTarget, triggerHover), () => {
        setTimeout(() => {
            if (isOutside.value && isOutsideTarget.value) {
                toggle(false)
            }
        }, 100)
    })

    onClickOutside(target, async (_e) => {
        if (!triggerHover.value) {
            await delay(50)
            if (visible.value && !isOpenedFromTarget.value && !loading?.value) {
                nextTick(() => toggle(false))
            }
        }
    })

    function toggleOpen() {
        isOpenedFromTarget.value = true
        toggle()

        setTimeout(() => {
            isOpenedFromTarget.value = false
        }, 100)
    }

    return {
        toggleOpen,
        target,
        visible,
        toggle,
        triggerTarget,
    }
}
