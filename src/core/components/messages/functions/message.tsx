import message from 'ant-design-vue/es/message'
import 'ant-design-vue/es/message/style'

import {VNode} from 'vue'
import {uuidv4} from "~h/utils/utils"
import {DangerCircle, InfoCircle, SuccessCircle, WarningCircle} from "~co/components/icons/circle"

type MessageType = 'success' | 'error' | 'info' | 'warning' | 'loading'

type MessageOptions = { duration?: number; onClose?: Fn; key?: string }

message.config({
    top: '60px',
    duration: 2,
    maxCount: 3,
})

/***
 @param: options
 */
function success(content: string | VNode, options?: MessageOptions) {
    return showMessage(content, 'success', options)
}

function error(content: string | VNode, options?: MessageOptions) {
    return showMessage(content, 'error', options)
}

function info(content: string | VNode, options?: MessageOptions) {
    return showMessage(content, 'info', options)
}

function warning(content: string | VNode, options?: MessageOptions) {
    return showMessage(content, 'warning', options)
}

function warn(content: string | VNode, options?: MessageOptions) {
    return showMessage(content, 'warning', options)
}

function loading(content: string | VNode, options?: MessageOptions) {
    return showMessage(content, 'loading', options)
}

function showMessage(
    content: VNode | string,
    type: MessageType = 'success',
    options: MessageOptions = {}
) {
    const {duration = 4, onClose, key} = options

    const messageKey = key ?? uuidv4()

    const iconClass = 'flex-center h-5 min-w-5 mr-2 mt-0.2 w-5 !bg-transparent'
    const Icon = () => {
        switch (type) {
            case 'error':
                return <DangerCircle class={iconClass} iconSize={'1.3em'}/>
            case 'success':
                return <SuccessCircle class={iconClass} iconSize={'1.3em'}/>
            case 'info':
                return <InfoCircle class={iconClass} iconSize={'1.3em'}/>
            case 'warning':
                return <WarningCircle class={iconClass} iconSize={'1.3em'}/>
        }
    }
    message[type]({content, duration, onClose, icon: Icon(), key: messageKey})
    return messageKey
}

export const Message = {
    success,
    error,
    warning,
    info,
    warn,
    loading,
    destroy: message.destroy,
}
