import { required, integer, between, maxLength, minLength, decimal } from '@vuelidate/validators'
import Blocks from '~m/masters/blocks/entities/blocks.model'
import { debounceValidator } from '~co/components/form'
const create = {
  name: {
    required
  },
  type: {
    required
  },
  strcuture: {
    
  },
}
const update = {
  name: {
    required
  },
  type: {
    required
  },
  strcuture: {
    
  },
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
