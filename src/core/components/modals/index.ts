import {pt} from '~h/types/propTypes'
import {DAC} from "~h/factory/createAsyncComponent"
import {Modal as ModalFn} from './src/functions/showModal'
import {genericModalExpose} from './src/functions/util'

import './src/modal.scss'

const RModal = DAC(() => import('./src/RModal.vue'))
const RModalHeader = DAC(() => import('./src/RModalHeader.vue'))
const RModalFooter = DAC(() => import('./src/RModalFooter.vue'))

export {genericModalExpose, RModal, ModalFn, RModalFooter, RModalHeader}

export const genericModalProps = {
    visible: pt.bool.def(false),
    loading: pt.bool.def(false),
}
