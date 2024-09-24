import {useMouseInElement} from '@vueuse/core'

export function useDisableScroll(target) {
    const keys = {37: 1, 38: 1, 39: 1, 40: 1}

    const {isOutside} = useMouseInElement(target)

    function preventDefault(e) {
        e.preventDefault()
    }

    function preventDefaultForScrollKeys(e) {
        if (keys[e.keyCode]) {
            preventDefault(e)
            return false
        }
    }

    // modern Chrome requires { passive: false } when adding event
    let supportsPassive = false
    try {
        window.addEventListener(
            'test',
            null,
            Object.defineProperty({}, 'passive', {
                get: function () {
                    supportsPassive = true
                },
            })
        )
    } catch (e) {
    }

    const wheelOpt = supportsPassive ? {passive: false} : false
    const wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel'

    // call this to Disable
    function disableScroll() {
        window.addEventListener('DOMMouseScroll', preventDefault, false) // older FF
        window.addEventListener(wheelEvent, preventDefault, wheelOpt) // modern desktop
        window.addEventListener('touchmove', preventDefault, wheelOpt) // mobile
        window.addEventListener('keydown', preventDefaultForScrollKeys, false)
    }

    // call this to Enable
    function enableScroll() {
        window.removeEventListener('DOMMouseScroll', preventDefault, false)
        window.removeEventListener(wheelEvent, preventDefault, wheelOpt)
        window.removeEventListener('touchmove', preventDefault, wheelOpt)
        window.removeEventListener('keydown', preventDefaultForScrollKeys, false)
    }

    watch(isOutside, () => {
        if (isOutside.value) {
            enableScroll()
        } else {
            disableScroll()
        }
    })
}
