export function getFileSizeStr(val) {
    if (val < 1024) {
        return `${val} bytes`
    } else if (val >= 1024 && val < 1048576) {
        return `${(val / 1024).toFixed(1)} KB`
    } else if (val >= 1048576) {
        return `${(val / 1048576).toFixed(1)} MB`
    }
}

export function getFileSizeMB(val) {
    return val / 1048576
}
