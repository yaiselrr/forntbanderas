import { required, integer, between, maxLength, minLength, decimal } from '@vuelidate/validators'
import Coupons from '~m/sale/coupons/entities/coupons.model'
import { debounceValidator } from '~co/components/form'
const create = {
  code: {
    required,
    isUnique: debounceValidator(
      function (value, object) {
        const { id, code } = { ...object.state }
        const _scenario = id ? 'update' : 'create'
        const _specific = true
        if (!code) return true
        return Coupons.validate({ code, id, _scenario, _specific })
      },
      this,
      500
    )
  },
  type_id: {
    required,
    integer
  },
  coupon_value: {
    required
  },
  available_quantity: {
    required
  },
  conditions: {},
  start_date: {},
  end_date: {}
}
const update = {
  code: {
    required,
    isUnique: debounceValidator(
      function (value, object) {
        const { id, code } = { ...object.state }
        const _scenario = id ? 'update' : 'create'
        const _specific = true
        if (!code) return true
        return Coupons.validate({ code, id, _scenario, _specific })
      },
      this,
      500
    )
  },
  type_id: {
    required,
    integer
  },
  coupon_value: {
    required,
    maxLength: maxLength(65535)
  },
  available_quantity: {
    required
  },
  conditions: {},
  start_date: {},
  end_date: {}
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
