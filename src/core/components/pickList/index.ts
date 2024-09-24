import {DAC} from "~h/factory/createAsyncComponent"

const PickList = DAC(() => import('./src/RPickList.vue'))
export {PickList}
