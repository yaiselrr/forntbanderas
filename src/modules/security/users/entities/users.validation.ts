import {
    required,
    integer,
    between,
    maxLength,
    minLength,
    decimal
} from '@vuelidate/validators'
import Users from "~m/security/users/entities/users.model"
import {debounceValidator} from "~co/components/form"

const create = {
    name: {
        required,
    },
    email: {
        required,
        isUnique: debounceValidator(function (value, object) {
            const {id, email} = {...object.state}
            const _scenario = id ? 'update' : 'create'
            const _specific = true
            if (!email)
                return true
            return Users.validate({email, id, _scenario, _specific})
        }, this, 500),

    },
    password: {
        required,
    },
    confirm_password: {
        required,
        confirm: function (value, object) {
            return object.password === object.confirm_password
        }
    },
    addresses: {
        maxLength: maxLength(65535),
    },
    phones: {
        maxLength: maxLength(65535),
    },
    role_id: {
        required,
        integer,
    },
}
const update = {
    name: {
        required,
    },
    email: {
        required,
        isUnique: debounceValidator(function (value, object) {
            const {id, email} = {...object.state}
            const _scenario = id ? 'update' : 'create'
            const _specific = true
            if (!email)
                return true
            return Users.validate({email, id, _scenario, _specific})
        }, this, 500),

    },
    addresses: {
        maxLength: maxLength(65535),
    },
    phones: {
        maxLength: maxLength(65535),
    },
    role_id: {
        required,
        integer,
    },
}
const password_change = {
    password: {
        required,
    },
    confirm_password: {
        required,
        confirm: function (value, object) {
            return object.password === object.confirm_password
        }
    }
}
export const validations = {create, update, password_change}
export const feedbacks = {
    create: {
        email: {
            isUnique: 'El correo ya existe'

        },
        id: {
            isUnique: 'El Id ya existe'
        },
        confirm_password: {
            confirm: 'La contraseña debe ser confirmada correctamente',
        },
    },
    update: {
        email: {
            isUnique: 'El correo ya existe'

        },
        id: {
            isUnique: 'El Id ya existe'

        },
    },
    password_change: {
        confirm_password: {
            confirm: 'La contraseña debe ser confirmada correctamente para ser cambiada',
        },
    },
}
