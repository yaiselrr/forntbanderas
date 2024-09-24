import {DAC} from "~h/factory/createAsyncComponent"

const RAttribute = DAC(() => import('./src/RAttribute.vue'))
export {RAttribute}
