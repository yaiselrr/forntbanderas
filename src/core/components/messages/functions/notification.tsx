import notification from 'ant-design-vue/es/notification'
import {DangerCircle, InfoCircle, SuccessCircle, WarningCircle} from "~co/components/icons/circle"
import 'ant-design-vue/es/notification/style'
import {VNode} from 'vue'
import {uuidv4} from "~h/utils/utils"
import './notification.scss'

type NotificationType = 'success' | 'error' | 'info' | 'warning' | 'loading' | 'open'

type NotificationOptions = {
    duration?: number
    onClose?: Fn
    placement?: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight'
    onClick?: Fn
    description?: string
    title?: VNode | string
    type?: NotificationType
    content?: VNode
}

function success(options?: NotificationOptions) {
    showNotification(options)
}

function error(options?: NotificationOptions) {
    showNotification({...options, type: 'error'})
}

function info(options?: NotificationOptions) {
    showNotification({...options, type: 'info'})
}

function warning(options?: NotificationOptions) {
    showNotification({...options, type: 'warning'})
}

function warn(options?: NotificationOptions) {
    showNotification({...options, type: 'warning'})
}

function open(options?: NotificationOptions) {
    showNotification({...options, type: 'open'})
}

function showNotification(options: NotificationOptions = {}) {
    const {
        duration = 5,
        onClose,
        placement = 'bottomLeft',
        onClick,
        description,
        title,
        type = 'open',
        content: customContent,
    } = options

    const key = uuidv4()

    const iconClass = 'flex-center w-8 h-8 min-w-8 min-h-8 mr-2 mt-0.2'
    const Icon = () => {
        switch (type) {
            case 'error':
                return <DangerCircle iconSize="1.4em" class={iconClass}/>
            case 'success':
                return <SuccessCircle iconSize="1.4em" class={iconClass}/>
            case 'info':
                return <InfoCircle iconSize="1.4em" class={iconClass}/>
            case 'warning':
                return <WarningCircle iconSize="1.4em" class={iconClass}/>
            default:
                return <div/>
        }
    }

    function destroy() {
        notification.close(key)
    }

    const customContentRender = () => {
        if (customContent) {
            return customContent
        }
        return (
            <div class="flex pr-2">
                {type && <Icon/>}
                <div class="ml-1">
                    <h6 class="text-heading pr-3 mb-2 text-16px font-bold">{title}</h6>
                    <span class="text-muted text-13px">{description}</span>
                </div>
            </div>
        )
    }

    const content = (
        <div class="p-1 flex " style={{maxWidth: '400px'}}>
            {customContentRender()}
            <AButton
                onClick={() => destroy()}
                class="w-5 h-5 !absolute top-1 right-1 max-w-5 max-h-5 min-w-5 min-h-5 ml-auto"
            >
                <div style="font-size: .7em" class="i-heroicons:x-mark w-1em h-1em text-gray-700 dark:(text-gray-300)"/>
            </AButton>
        </div>
    )

    notification[type]({
        duration,
        onClose,
        description: content,
        placement,
        onClick,
        key,
    })
}

export const Notification = {
    success,
    error,
    warning,
    info,
    warn,
    open,
}
