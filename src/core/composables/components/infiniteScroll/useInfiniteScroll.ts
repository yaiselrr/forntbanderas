import {useInfiniteScroll as useInfScroll, UseInfiniteScrollOptions} from '@vueuse/core'
import {unref} from 'vue'

export function useInfiniteScroll(
    onLoadMore: Fn,
    options: UseInfiniteScrollOptions & { loading?: Ref<boolean> } = {}
) {
    const element = ref<HTMLElement>()
    const {distance = 10, loading} = options

    function loadMore() {
        if (!unref(loading) || !unref(loading)) {
            onLoadMore()
        }
    }

    useInfScroll(element, loadMore, {...options, distance})

    return {scrollElement: element}
}
