import { required, integer, between, maxLength, minLength, decimal } from '@vuelidate/validators'
const create = {
  quantity: {
    required,
    decimal
  },
  order_id: {
    required,
    integer
  }
}
const update = {
  quantity: {
    required,
    decimal
  },
  order_id: {
    required,
    integer
  }
}
export const validations = { create, update }
export const feedbacks = {
  create: {
    id: {
      isUnique: 'This id has been taken'
    }
  },
  update: {
    id: {
      isUnique: 'This id has been taken'
    }
  }
}
