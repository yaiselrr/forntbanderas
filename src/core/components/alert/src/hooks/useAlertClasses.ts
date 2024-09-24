export function useAlertClasses(
    shadow: Ref<boolean>,
    isOpen: Ref<boolean>,
    isPrimary: Ref<boolean>,
    gradient: Ref<boolean>,
    isSecondary: Ref<boolean>,
    isDanger: Ref<boolean>,
    isSuccess: Ref<boolean>,
    isWarn: Ref<boolean>
) {
    return computed!(() => {
        return [
            {'border-t dark:border-t-slate-600': shadow.value && isOpen.value},
            {
                'border-primary-800 dark:bg-primary-400 bg-primary-100 text-primary-900': isPrimary.value,
            },
            {'bg-white shadow-md': shadow.value},
            {
                'border-t-gray-100 border-r border-r-gray-100 dark:(border-t-slate-700 border-r-slate-600)':
                    shadow.value && !gradient.value,
            },
            {
                'border-secondary-800 dark:bg-secondary-400 bg-secondary-100 text-secondary-900':
                isSecondary.value,
            },
            {'border-pink-600 dark:bg-pink-400 bg-pink-100 text-pink-900': isDanger.value},
            {'border-teal-400 dark:bg-teal-400 bg-teal-100 text-teal-900': isSuccess.value},
            {'border-yellow-300 dark:bg-amber-400 bg-amber-50 text-amber-900': isWarn.value},
            {'border-none rounded-lg': gradient.value},
        ]
    })
}
