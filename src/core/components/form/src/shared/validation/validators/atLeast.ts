export function atLeast(count) {
    return function (value) {
        if (Array.isArray(value)) {
            return value.length >= count
        }
        return false
    }
}
