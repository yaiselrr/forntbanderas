export type {BtnType, ButtonProps, ColorType} from './src/types'
import {DAC} from "~h/factory/createAsyncComponent"

const RButton = DAC(() => import('./src/RButton.vue'))
const RRoundedButton = DAC(() => import('./src/RRoundedButton.vue'))

export {buttonColorDefinition, buttonTypeDefinition} from './src/types'
export {RButton, RRoundedButton}
