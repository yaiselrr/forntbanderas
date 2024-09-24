import {
    required,
    integer,
    between,
    maxLength,
    minLength,
    decimal
} from '@vuelidate/validators'
import Roles from "~m/security/roles/entities/roles.model"
import {debounceValidator} from "~co/components/form"

const create = {
    role_father_id: {
        integer,
    },
    name: {
        required,
        isUnique: debounceValidator(function (value, object) {
            const {id, name} = {...object.state}
            const _scenario = id ? 'update' : 'create'
            const _specific = true
            if (!name)
                return true
            return Roles.validate({name, id, _scenario, _specific})
        }, this, 500),

    },
    description: {
        required,
        maxLength: maxLength(65535),
    },
}
const update = {
    role_father_id: {
        integer,
    },
    name: {
        required,
        isUnique: debounceValidator(function (value, object) {
            const {id, name} = {...object.state}
            const _scenario = id ? 'update' : 'create'
            const _specific = true
            if (!name)
                return true
            return Roles.validate({name, id, _scenario, _specific})
        }, this, 500),

    },
    description: {
        required,
        maxLength: maxLength(65535),
    },
}
export const validations = {create, update}
export const feedbacks = {
    create: {
        name: {
            isUnique: 'This name has been taken'

        },
        id: {
            isUnique: 'This id has been taken'

        },
    },
    update: {
        name: {
            isUnique: 'This name has been taken'

        },
        id: {
            isUnique: 'This id has been taken'

        },
    },
}
