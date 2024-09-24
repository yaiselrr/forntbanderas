import {DAC} from "~h/factory/createAsyncComponent"

const FileType = DAC(() => import('./src/FileType.vue'))

export {FileType}
