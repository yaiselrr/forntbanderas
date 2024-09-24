export const classes = {
    primary: 'bg-primary-500 dark:(bg-primary-400)',
    secondary: 'bg-secondary-500 dark:(bg-secondary-400)',
    success: 'bg-green-500 dark:(bg-green-400)',
    danger: 'bg-rose-500 dark:(bg-rose-500 bg-opacity-80)',
    warning: 'bg-yellow-500 dark:(bg-yellow-400 )',
}

export const positionClasses = {
    topRight: 'top-0 right-0',
    topLeft: 'top-0 left-0',
    bottomLeft: 'bottom-0 left-0',
    bottomRight: '-bottom-1 -right-1',
}

export const traslateClasses = {
    round: {
        topRight: '-translate-y-0.5 translate-x-0.5',
        topLeft: '-translate-y-0.5 -translate-x-0.5',
        bottomLeft: 'translate-y-0.5 -translate-x-0.5',
        bottomRight: ' translate-y-0.5 translate-x-0.5',
    },
    circle: {
        topRight: '-translate-x-1.5',
        topLeft: 'translate-x-1',
        bottomLeft: 'translate-x-1.5',
        bottomRight: '-translate-y-1 -translate-x-1',
    },
}
