import {ColorDefinitionEnum} from '../types/types'

export function useColorType(color: Ref<string>) {
    const isPrimary = computed!(() => color.value == ColorDefinitionEnum.PRIMARY)
    const isSecondary = computed!(() => color.value == ColorDefinitionEnum.SECONDARY)
    const isDanger = computed!(() => color.value == ColorDefinitionEnum.DANGER)
    const isSuccess = computed!(() => color.value == ColorDefinitionEnum.SUCCESS)
    const isWarn = computed!(() => color.value == ColorDefinitionEnum.WARNING)

    return {
        isPrimary,
        isSecondary,
        isDanger,
        isSuccess,
        isWarn,
    }
}
