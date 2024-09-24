import {DAC} from "~h/factory/createAsyncComponent"

const RBlurLoader = DAC(() => import('./ImageBlurLoader.vue'))

export {RBlurLoader}
