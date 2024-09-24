import {DAC} from "~h/factory/createAsyncComponent"

const RStepsCircle = DAC(() => import('./src/StepsCircle.vue'), {loading: true})
export {RStepsCircle}
