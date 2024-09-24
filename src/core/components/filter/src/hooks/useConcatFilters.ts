export function useConcatFilters(field, condition: MaybeRef<string>, ...filters) {
    const concatedFilters = computed!(() => {
        const innerFilters: any = {[unref(condition)]: []}

        for (const filter of filters) {
            if (unref(filter)) {
                innerFilters[unref(condition)].push({[field]: unref(filter)})
            }
        }

        return innerFilters[unref(condition)].length ? innerFilters : null
    })

    return concatedFilters
}
