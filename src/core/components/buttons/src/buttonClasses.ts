export const classes = {
    outline: {
        primary: {
            class:
                'bg-primary-100 active:(!bg-primary-100) text-primary-600 hover:(bg-primary-200 text-primary-800) dark:(text-primary-400 bg-primary-900) dark:hover:(text-primary-300 bg-primary-800) dark:active:(!text-primary-400 !bg-primary-900)',
        },
        secondary: {
            class:
                'bg-secondary-100 active:(!bg-secondary-100) text-secondary-600 hover:(bg-secondary-200 text-secondary-800) dark:(text-secondary-400 bg-secondary-600/50) dark:hover:(text-secondary-300 bg-secondary-600/70) dark:active:(!text-secondary-400 !bg-secondary-900)',
        },
        info: {
            class:
                'bg-sky-100 active:(!bg-sky-100) text-sky-700 hover:(bg-sky-200 text-sky-800) dark:(text-sky-400 bg-sky-900) dark:hover:(text-sky-300 bg-sky-800) dark:active:(!text-sky-400 !bg-sky-900)',
        },
        success: {
            class:
                'bg-green-100 active:(!bg-green-100) text-green-700 hover:(bg-green-200 text-green-800) dark:(text-green-400 bg-green-900) dark:hover:(text-green-300 bg-green-800) dark:active:(!text-green-400 !bg-green-900)',
        },
        danger: {
            class:
                'bg-rose-100 active:(!bg-rose-100) text-rose-700 hover:(bg-rose-200 text-rose-800) dark:(text-rose-300 bg-rose-900 bg-opacity-80) dark:hover:(text-rose-300 bg-rose-800) dark:active:(!text-rose-300 !bg-rose-900 !bg-opacity-80)',
        },
        warning: {
            class:
                'bg-yellow-200 active:(!bg-yellow-200) text-yellow-800 hover:(bg-yellow-300 text-yellow-800) dark:(text-yellow-300 bg-yellow-900 ) dark:hover:(text-yellow-200 bg-yellow-800) dark:active:(!text-yellow-300 !bg-yellow-900)',
        },
        neutro: {
            class:
                'bg-true-gray-200 hover:(bg-true-gray-300) text-dark-900 dark:(!text-white bg-slate-700) dark:hover:(bg-slate-600)',
        },
    },

    filled: {
        primary: {
            class:
                'bg-primary-600 active:(!bg-primary-600) text-white hover:(bg-primary-700) dark:(bg-primary-600) dark:hover:(bg-primary-500) dark:active:(!bg-primary-600)',
        },
        secondary: {
            class:
                'bg-secondary-500 active:(!bg-secondary-600) text-white hover:(bg-secondary-600) dark:(bg-secondary-600) dark:hover:(bg-secondary-500) dark:active:(!bg-secondary-600)',
        },
        info: {
            class:
                'bg-sky-500 active:(!bg-sky-500) text-white hover:(bg-sky-600) dark:(bg-sky-600) dark:hover:(bg-sky-500) dark:active:(!bg-sky-600)',
        },
        success: {
            class:
                'bg-green-500 active:(!bg-green-500) text-white hover:(bg-green-600) dark:(bg-green-600) dark:hover:(bg-green-500) dark:active:(!bg-green-600)',
        },
        danger: {
            class:
                'bg-rose-500 active:(!bg-rose-500) text-white hover:(bg-rose-600) dark:(bg-rose-600) dark:hover:(bg-rose-500) dark:active:(!bg-rose-600)',
        },
        warning: {
            class:
                'bg-yellow-400 active:(!bg-yellow-400) text-white hover:(bg-yellow-500) dark:(bg-yellow-500) dark:hover:(bg-yellow-400) dark:active:(!bg-yellow-500)',
        },
        neutro: {
            class:
                'bg-true-gray-200 hover:(bg-true-gray-300) text-dark-900 dark:(!text-white bg-slate-700) dark:hover:(bg-slate-600)',
        },
    },

    flat: {
        primary: {
            class:
                'text-primary-600 hover:(bg-primary-100) dark:(text-primary-400) dark:hover:(bg-primary-900 bg-opacity-80) dark:active:(bg-opacity-50)',
        },
        secondary: {
            class:
                'text-secondary-600 hover:(bg-secondary-100) dark:(text-secondary-400) dark:hover:(bg-secondary-900 bg-opacity-80) dark:active:(bg-opacity-50)',
        },
        info: {
            class:
                'text-sky-700 hover:(bg-sky-100 ) dark:(text-sky-400 ) dark:hover:(text-sky-300 bg-sky-900 bg-opacity-80) dark:active:(bg-opacity-50)',
        },
        success: {
            class:
                'text-green-700 hover:(bg-green-100 ) dark:(text-green-400 ) dark:hover:(text-green-300 bg-green-900 bg-opacity-80) dark:active:(bg-opacity-50)',
        },
        danger: {
            class:
                'text-rose-700 hover:(bg-rose-100 bg-opacity-80) dark:(text-rose-400 ) dark:hover:(text-rose-300 bg-rose-900 bg-opacity-60) dark:active:(bg-opacity-40)',
        },
        warning: {
            class:
                'text-yellow-800 hover:(bg-yellow-200 text-yellow-800) dark:(text-yellow-300 ) dark:hover:(text-yellow-200 bg-yellow-900 bg-opacity-60) dark:active:(bg-opacity-40)',
        },
        neutro: {
            class:
                'bg-transparent hover:(bg-true-gray-200) text-dark-900 dark:(!text-white) dark:hover:(!bg-slate-700) dark:active:(!bg-opacity-50)',
        },
    },

    border: {
        primary: {
            class:
                'border border-primary-500 text-primary-600 hover:(bg-primary-100) dark:(text-primary-400) dark:hover:(bg-primary-900 bg-opacity-80) dark:active:(bg-opacity-50)',
        },
        secondary: {
            class:
                'border border-secondary-500 text-secondary-600 hover:(bg-secondary-100) dark:(text-secondary-400) dark:hover:(bg-secondary-900 bg-opacity-80) dark:active:(bg-opacity-50)',
        },

        info: {
            class:
                'border border-sky-500 text-sky-700 hover:(bg-sky-100 ) dark:(text-sky-400 ) dark:hover:(text-sky-300 bg-sky-900 bg-opacity-80) dark:active:(bg-opacity-50)',
        },
        success: {
            class:
                'border border-green-500 text-green-700 hover:(bg-green-100 ) dark:(text-green-400 ) dark:hover:(text-green-300 bg-green-900 bg-opacity-80) dark:active:(bg-opacity-50)',
        },
        danger: {
            class:
                'border border-rose-500 text-rose-700 hover:(bg-rose-100 bg-opacity-80) dark:(text-rose-400 ) dark:hover:(text-rose-300 bg-rose-900 bg-opacity-60) dark:active:(bg-opacity-40)',
        },
        warning: {
            class:
                'border border-yellow-500 text-yellow-800 hover:(bg-yellow-200 text-yellow-800) dark:(text-yellow-300 ) dark:hover:(text-yellow-200 bg-yellow-900 bg-opacity-60) dark:active:(bg-opacity-40)',
        },
        neutro: {
            class:
                'border dark:border-slate-600 bg-transparent hover:(bg-true-gray-100) text-dark-900 dark:(!text-slate-200) dark:hover:(!bg-slate-700) dark:active:(!bg-opacity-50)',
        },
    },
}

export const overlay = {
    primary: 'bg-primary-900',
    secondary: 'bg-secondary-900',
    info: 'bg-sky-900',
    success: 'bg-green-900',
    danger: 'bg-rose-900',
    warning: 'bg-yellow-900',
    neutro: 'bg-dark-200',
}
