import {DAC} from "~h/factory/createAsyncComponent"

const RFileUpload = DAC(() => import('./src/RFileUpload.vue'))

export {RFileUpload}
