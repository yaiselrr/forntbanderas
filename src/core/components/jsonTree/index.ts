import {DAC} from "~h/factory/createAsyncComponent"

const RJsonTree = DAC(() => import('./src/JsonTree.vue'))

export {RJsonTree}
