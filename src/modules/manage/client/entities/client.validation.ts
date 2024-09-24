import { required, integer, between, maxLength, minLength, decimal } from '@vuelidate/validators'
import Client from '~m/manage/client/entities/client.model'
import { debounceValidator } from '~co/components/form'
const create = {
  code: {
    required
  },
  user_id: {
    required,
    integer
  }
}
const update = {
  code: {
    required
  },
  user_id: {
    required,
    integer
  }
}
export const validations = { create, update }
export const feedbacks = {
  create: {
    code: {
      isUnique: 'This code has been taken'
    },
    id: {
      isUnique: 'This id has been taken'
    }
  },
  update: {
    code: {
      isUnique: 'This code has been taken'
    },
    id: {
      isUnique: 'This id has been taken'
    }
  }
}
