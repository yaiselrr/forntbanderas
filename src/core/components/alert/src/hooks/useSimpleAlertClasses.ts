export function useSimpleAlertClasses(type: Ref<string>) {
  return computed!(() => {
    switch (unref(type)) {
      case 'success':
        return {
          title: 'text-green-800 dark:(text-green-600)',
          description: 'text-green-700 dark:(text-green-600)',
          bg: 'bg-green-50 dark:(bg-green-900 bg-opacity-20)',
          border: 'border-green-400',
        }
      case 'warning':
        return {
          title: 'text-yellow-800 dark:(text-yellow-600)',
          description: 'text-yellow-700 dark:(text-yellow-600)',
          bg: 'bg-yellow-50 dark:(bg-yellow-900 bg-opacity-20)',
          border: 'border-yellow-400',
        }
      case 'info':
        return {
          title: 'text-blue-800 dark:(text-blue-400)',
          description: 'text-blue-700 dark:(text-blue-400)',
          bg: 'bg-blue-50 dark:(bg-blue-900 bg-opacity-20)',
          border: 'border-blue-400',
        }
      case 'danger':
        return {
          title: 'text-red-800 dark:(text-red-400)',
          description: 'text-red-700 dark:(text-red-400)',
          bg: 'bg-red-50 dark:(bg-red-900 bg-opacity-20)',
          border: 'border-red-400',
        }
    }
  })
}
