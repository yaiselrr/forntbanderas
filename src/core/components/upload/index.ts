import {DAC} from "~h/factory/createAsyncComponent"

const RUploadImage = DAC(() => import('./src/UploadImage.vue'))

export {RUploadImage}
