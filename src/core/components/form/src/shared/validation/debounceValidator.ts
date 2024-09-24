import {helpers} from '@vuelidate/validators'

export function debounceValidator(func: Fn, syncValidations?: Record<any, any>, delay = 500) {
    return helpers.withAsync(
        debounceAsyncValidator(async function (value, debounce) {
            if (syncValidations && !validateSync(syncValidations, value)) {
                return new Promise((resolve) => resolve(true))
            } else {
                await debounce()
                return await func(value, this)
            }
        }, delay)
    )
}

function validateSync(syncValidations, value) {
    let valid = true
    const keys = Object.keys(syncValidations)
    for (let i = 0; i < keys.length && valid; i++) {
        const validator = syncValidations[keys[i]]
        const validatorFn = validator.$validator ?? validator
        if (!validatorFn(value)) {
            valid = false
        }
    }

    return valid
}

function debounceAsyncValidator(validator, delay) {
    let currentTimer
    let currentPromiseReject

    function debounce() {
        return new Promise((resolve, reject) => {
            currentTimer = setTimeout(() => {
                currentTimer = null
                currentPromiseReject = null
                resolve(null)
            }, delay)
            currentPromiseReject = reject
        })
    }

    return function (value) {
        if (currentTimer) {
            currentPromiseReject(new Error('replaced'))
            clearTimeout(currentTimer)
            currentTimer = null
        }

        return validator.call(this, value, debounce)
    }
}
