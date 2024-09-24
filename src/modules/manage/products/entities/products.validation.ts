import { required, integer, between, maxLength, minLength, decimal } from '@vuelidate/validators'
import Products from '~m/manage/products/entities/products.model'
import { debounceValidator } from '~co/components/form'
const create = {
  name: {
    required
  },
  code: {
    required,
    isUnique: debounceValidator(
      function (value, object) {
        const { id, code } = { ...object.state }
        const _scenario = id ? 'update' : 'create'
        const _specific = true
        if (!code) return true
        return Products.validate({ code, id, _scenario, _specific })
      },
      this,
      500
    )
  },
  summary: {
    maxLength: maxLength(65535)
  },
  description: {
    maxLength: maxLength(65535)
  },
  category_id: {
    required,
    integer
  }
}
const update = {
  name: {
    required
  },
  code: {
    required,
    isUnique: debounceValidator(
      function (value, object) {
        const { id, code } = { ...object.state }
        const _scenario = id ? 'update' : 'create'
        const _specific = true
        if (!code) return true
        return Products.validate({ code, id, _scenario, _specific })
      },
      this,
      500
    )
  },
  summary: {
    maxLength: maxLength(65535)
  },
  description: {
    maxLength: maxLength(65535)
  },
  category_id: {
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
