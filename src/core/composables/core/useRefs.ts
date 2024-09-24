import {onBeforeUpdate, ref} from 'vue'
import type {Ref} from 'vue'

export function useRefs<M = HTMLElement>(): {
    refs: Ref<M[]>
    setRef: (index: number) => (el: M) => void
    removeRef: (index: number) => M[]
} {
    const refs = ref<M[]>([])

    onBeforeUpdate(() => {
        refs.value = []
    })

    const setRef = (index: number) => (el: M) => {
        refs.value[index] = el as any
    }

    const removeRef = (index: number) => {
        return refs.value.splice(index, 1) as M[]
    }

    return {removeRef, refs: refs as Ref<M[]>, setRef}
}
