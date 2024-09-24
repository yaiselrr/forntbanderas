import {debounceValidator} from './debounceValidator'
import {sharedProps} from './sharedProps'
import {getTextValidation} from './validationsTexts'

enum InjectionKeys {
    VUE_OBJECT = 'vue_object',
    NESTED = 'nested',
    FEEDBACKS = 'feedbacks',
    VALIDATEKEY = 'validateKey',
    CLEARKEY = 'clearKey',
}

export {debounceValidator, getTextValidation, InjectionKeys, sharedProps}
