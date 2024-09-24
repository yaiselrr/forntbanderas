import { required, integer, between, maxLength, minLength, decimal } from '@vuelidate/validators'
import Dealers from '~m/security/dealers/entities/dealers.model'
import { debounceValidator } from '~co/components/form'
const create = {
  contact: {
    required,
    isUnique: debounceValidator(
      function (value, object) {
        const { id, contact } = { ...object.state }
        const _scenario = id ? 'update' : 'create'
        const _specific = true
        if (!contact) return true
        return Dealers.validate({ contact, id, _scenario, _specific })
      },
      this,
      500
    )
  },
  company: {},
  cif: {},
  company_email: {},
  phone: {},
  web_page: {},
  address: {
    maxLength: maxLength(65535)
  },
  business_sector_id: {
    required,
    integer
  },
  user_id: {
    required,
    integer
  }
}
const update = {
  contact: {
    required,
    isUnique: debounceValidator(
      function (value, object) {
        const { id, contact } = { ...object.state }
        const _scenario = id ? 'update' : 'create'
        const _specific = true
        if (!contact) return true
        return Dealers.validate({ contact, id, _scenario, _specific })
      },
      this,
      500
    )
  },
  company: {},
  cif: {},
  company_email: {},
  phone: {},
  web_page: {},
  address: {
    maxLength: maxLength(65535)
  },
  business_sector_id: {
    required,
    integer
  },
  user_id: {
    required,
    integer
  }
}
export const validations = { create, update }
export const feedbacks = {
  create: {
    contact: {
      isUnique: 'This contact has been taken'
    },
    id: {
      isUnique: 'This id has been taken'
    }
  },
  update: {
    contact: {
      isUnique: 'This contact has been taken'
    },
    id: {
      isUnique: 'This id has been taken'
    }
  }
}
