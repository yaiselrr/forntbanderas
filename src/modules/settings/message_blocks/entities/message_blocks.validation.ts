import { required, integer, between, maxLength, minLength, decimal } from '@vuelidate/validators'
import Blocks from '~m/settings/message_blocks/entities/message_blocks.model'
import { debounceValidator } from '~co/components/form'
const create = {
  name: {
    required,
    isUnique: debounceValidator(
      function (value, object) {
        const { id, name } = { ...object.state }
        const _scenario = id ? 'update' : 'create'
        const _specific = true
        if (!name) return true
        return Blocks.validate({ name, id, _scenario, _specific })
      },
      this,
      500
    )
  },
  color: {
    required
  },
  message_text: {
    maxLength: maxLength(65535)
  },
  block_image: {}
}
const update = {
  name: {
    required,
    isUnique: debounceValidator(
      function (value, object) {
        const { id, name } = { ...object.state }
        const _scenario = id ? 'update' : 'create'
        const _specific = true
        if (!name) return true
        return Blocks.validate({ name, id, _scenario, _specific })
      },
      this,
      500
    )
  },
  color: {
    required
  },
  message_text: {
    maxLength: maxLength(65535)
  },
  block_image: {}
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
