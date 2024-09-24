import {DAC} from "~h/factory/createAsyncComponent"
import {IDropdownItem} from "~co/components/dropdown/src/interfaces/IDropdownItem.interface"

export const dropdownPlacement = [
    'bottomLeft',
    'bottom',
    'bottomRight',
    'topLeft',
    'top',
    'topRight',
] as const

const RDropdown = DAC(() => import('./src/RDropdown.vue'))
const RDropdownItem = DAC(() => import('./src/RDropdownItem.vue'))

export {RDropdown, RDropdownItem}
export type {IDropdownItem}
