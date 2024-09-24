import {DAC} from "~h/factory/createAsyncComponent"

const RBadge = DAC(() => import('./src/RBadge.vue'))
export {RBadge}
