import AModal from 'ant-design-vue/es/modal'
import 'ant-design-vue/es/modal/style'

import {RModalHeader, RModalFooter} from "~co/components/modals"
import {
    DangerCircle,
    QuestionCircle,
    InfoCircle,
    SuccessCircle,
    WarningCircle
} from "~co/components/icons/circle"

import {ButtonProps} from "~co/components/buttons"
import {AbsoluteLoader} from "~co/components/spinners"


type ConfirmFunction = (loading: Ref<boolean>, destroy: () => void) => void
type CancelFunction = (destroy: () => void) => void

type ConfirmOptions = {
    onConfirm?: ConfirmFunction
    title: string
    onCancel?: CancelFunction
    type?: 'danger' | 'question' | 'warning' | 'success' | 'info'
    description?: string
    showCloseIcon?: boolean
    onClose?: Fn
    modalWidth?: number | string
    okBtnProps?: ButtonProps
    cancelBtnProps?: ButtonProps
}

const confirm = (options: ConfirmOptions) => showModal(options, 'confirm')
const info = (options: ConfirmOptions) => showModal({...options, type: 'info'}, 'info')
const success = (options: ConfirmOptions) => showModal({...options, type: 'success'}, 'info')
const danger = (options: ConfirmOptions) => showModal({...options, type: 'danger'}, 'info')
const warning = (options: ConfirmOptions) => showModal({...options, type: 'warning'}, 'info')

export const Modal = {
    confirm,
    info,
    success,
    warning,
    danger,
}

function showModal(options: ConfirmOptions, modalType: 'confirm' | 'info') {
    const isInfo = modalType == 'info'

    if (!options.onConfirm) {
        options.onConfirm = () => destroy()
    }
    const {
        onConfirm,
        type = 'question',
        onCancel,
        description,
        title,
        showCloseIcon = false,
        onClose,
        modalWidth = '340px',
        okBtnProps,
        cancelBtnProps,
    } = options
    const loading = ref(false)

    let Icon: any, okColor: any
    switch (type) {
        case 'question':
            Icon = QuestionCircle
            okColor = 'primary'
            break
        case 'info':
            Icon = InfoCircle
            okColor = 'primary'
            break
        case 'success':
            Icon = SuccessCircle
            okColor = 'primary'
            break
        case 'danger':
            Icon = DangerCircle
            okColor = 'danger'
            break
        case 'warning':
            Icon = WarningCircle
            okColor = 'warning'
            isInfo && (okColor = 'primary')
            break
    }

    const renderContent = () => {
        return (
            <div
                class={
                    '!bg-opacity-80 dark:(!bg-opacity-50) backdrop-blur-lg backdrop-filter blur bg-surface overflow-hidden round-big border-app blur bg-surface round-big'
                }
            >
                <AbsoluteLoader loading={loading}/>

                <div class="flexC px-4 pt-4">
                    <div class="flex-center">
                        <Icon
                            iconSize={'1.8em'}
                            class="p-2 animated animate-zoom-in animate-duration-300 animate-delay-200"
                        />
                    </div>
                    <div class="">
                        <RModalHeader
                            class="pl-0"
                            center
                            headTitle={title}
                            showCloseIcon={showCloseIcon}
                            onClose={onClose}
                        ></RModalHeader>
                        {description ? (
                            <div class="p-4 text-center">
                                <p class={'text-muted'}>{description}</p>
                            </div>
                        ) : (
                            <span class="flex py-4"></span>
                        )}

                        <ModalFooter
                            center
                            okBtnProps={{
                                pill: true,
                                block: modalType == 'info',
                                class: 'px-5',
                                color: okColor,
                                type: 'filled',
                                ...okBtnProps,
                            }}
                            cancelBtnProps={{pill: true, class: 'px-5', ...cancelBtnProps}}
                            onCancel={() => {
                                onCancel ? onCancel(destroy) : destroy()
                            }}
                            onAccept={() =>
                                onConfirm!(loading, () => {
                                    destroy()
                                    setTimeout(() => {
                                        loading.value = false
                                    }, 50)
                                })
                            }
                            showCancelButton={modalType == 'confirm'}
                        />
                    </div>
                </div>
            </div>
        )
    }

    const width = Number.isInteger(modalWidth) ? modalWidth + 'px' : modalWidth

    const {destroy} = AModal.info({
        title: '',
        okCancel: false,
        icon: undefined,
        width,
        okButtonProps: {disabled: true},
        cancelButtonProps: {disabled: true},
        class: 'app-modal',
        content: renderContent(),
    })
}
