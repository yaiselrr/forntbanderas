import {
    required,
    integer,
    between,
    maxLength,
    minLength,
    decimal
  } from '@vuelidate/validators';
import {debounceValidator} from "~co/components/form"
    const create={
        name: {
          required

        },
        description: {
          required,
          maxLength: maxLength(65535),
        },
      }
    const update= {
        role_father_id: {
          integer,
        },
        name: {
          required

        },
        description: {
          required,
          maxLength: maxLength(65535),
        },
      }
    export const validations = {create,update }
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
