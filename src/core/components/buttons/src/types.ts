import {VueProp} from 'vue-types/dist/types'

export const buttonTypeDefinition = ['flat', 'outline', 'filled', 'border']
export const buttonSizeDefinition = ['xs', 's', 'default', 'l', 'xl']
export const buttonColorDefinition = [
    'primary',
    'success',
    'secondary',
    'info',
    'danger',
    'warning',
    'neutro',
]
export type BtnType = 'flat' | 'outline' | 'filled' | 'border'
export type SizeType = 'xs' | 's' | 'default' | 'l' | 'xl'
export type ColorType =
    | 'primary'
    | 'info'
    | 'danger'
    | 'warning'
    | 'neutro'
    | 'success'
    | 'secondary'

export type ButtonProps = {
    text?: string
    class?: string
    type?: BtnType
    color?: ColorType
    loading?: MaybeRef<boolean>
    disabled?: MaybeRef<boolean>
    size?: SizeType
    pill?: boolean
    icon?: boolean
    circle?: boolean
    block?: boolean
    shadow?: boolean
} & VueProp<any>
