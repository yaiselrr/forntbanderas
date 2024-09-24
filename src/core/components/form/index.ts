import {DAC} from "~h/factory/createAsyncComponent"
import '../form/src/shared/styles/animations.css'
import './src/shared/styles/shake.scss'
import {debounceValidator} from './src/shared/validation'
import {scenario} from './src/shared/validation/scenario'

import RCheckbox from 'ant-design-vue/es/checkbox'
import 'ant-design-vue/es/checkbox/style'
import RToggle from 'ant-design-vue/es/switch'
import 'ant-design-vue/es/switch/style'
import RadioButton from 'ant-design-vue/es/radio'
import 'ant-design-vue/es/radio/style'

const RAppToggle = DAC(() => import('./src/toggle/RToggle.vue'))
const RForm = DAC(() => import('./validationForm/RForm.vue'))
const RInput = DAC(() => import('./src/input/RInput.vue'))
const RSelect = DAC(() => import('./src/select/RSelect.vue'))
const RDatePicker = DAC(() => import('./src/datePicker/RDatePicker.vue'))

export * as validators from './src/shared/validation/validators'
export {
    RAppToggle,
    RCheckbox,
    RDatePicker,
    debounceValidator,
    RForm,
    RInput,
    RadioButton,
    scenario,
    RSelect,
    RToggle,
}
