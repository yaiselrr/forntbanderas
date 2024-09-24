import {commonFilters, numericFilters, stringFilters} from '../filters'
import {FilterType} from '../..'

export function useGetFilters(type: MaybeRef<FilterType>) {
    return computed!(() => {
        switch (unref(type)) {
            case 'string':
                return [...stringFilters, ...commonFilters]

            case 'numeric':
                return [...numericFilters, ...commonFilters]

            case 'boolean':
                return [...commonFilters]

            case 'id':
                return [...commonFilters]
        }
    })
}
