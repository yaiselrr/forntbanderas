import { required, integer, between, maxLength, minLength, decimal } from '@vuelidate/validators'
import Permissions from '~m/security/permissions/entities/permissions.model'
import { debounceValidator } from '~co/components/form'
const create = {
  label: {
    required
  }
}
const update = {
  label: {
    required
  }
}
export const validations = { create, update }
export const feedbacks = {
  create: {
    name: {
      isUnique: 'This name has been taken'
    },
    id: {
      isUnique: 'This id has been taken'
    }
  },
  update: {
    name: {
      isUnique: 'This name has been taken'
    },
    id: {
      isUnique: 'This id has been taken'
    }
  }
}
