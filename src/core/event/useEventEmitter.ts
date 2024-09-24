import {getCurrentInstance, onUnmounted, ref} from 'vue'

export function useEventEmitter() {
    const listeners = ref<{ event: string; cb: Fn }[]>([])

    function listen(event: string, cb: Fn) {
        listeners.value.push({event, cb})

        const callback = (ev) => {
            cb(ev.detail, ev)
        }
        window.addEventListener(event, callback, false)
    }

    function removeListener(event: string) {
        const listener = listeners.value.find((listener) => listener.event === event)
        if (listener?.cb) {
            window.removeEventListener(event, listener?.cb)
        }
    }

    function removeAllListeners() {
        listeners.value.map((listener) => window.removeEventListener(listener.event, listener.cb))
    }

    function dispatch(event: string, data?: any) {
        window.dispatchEvent(new CustomEvent(event, {detail: data}))
    }

    const instance = getCurrentInstance()
    if (instance) {
        onUnmounted(() => {
            removeAllListeners()
        })
    }

    return {
        listen,
        removeListener,
        dispatch,
        removeAllListeners,
    }
}
