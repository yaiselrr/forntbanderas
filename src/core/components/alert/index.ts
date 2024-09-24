import {DAC} from "~h/factory/createAsyncComponent"

const RAlert = DAC(() => import('./src/RAlert.vue'))
const RSimpleAlert = DAC(() => import('./src/RSimpleAlert.vue'))

export {RAlert, RSimpleAlert}
