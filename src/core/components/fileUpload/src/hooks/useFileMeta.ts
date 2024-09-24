import {getFileSizeStr} from "~h/file/utils"

export function useFileMeta(file: File | SRecord) {
    const {name, type, lastModified, size, webkitRelativePath} = file as any

    const metatype = type.split('/')[0]
    const fileExt = name.split('.').reverse()[0]
    const fileSizeStr = getFileSizeStr(size)

    return {
        name,
        type,
        lastModified: new Date(lastModified).toLocaleString(),
        size,
        fileExt,
        metatype,
        fileSizeStr,
    }
}
