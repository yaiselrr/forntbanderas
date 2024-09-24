import {
    required,
    integer,
    between,
    maxLength,
    minLength,
    decimal
  } from '@vuelidate/validators';
import Refurbished from "~m/manage/refurbished/entities/refurbished.model"
import {debounceValidator} from "~co/components/form"
    const create={
        code: {
          required,
            isUnique: debounceValidator(function (value, object) {
                const {id,code} = {...object.state}
                const _scenario=id?'update':'create'
                const _specific=true
                if (!code)
                    return true
                return Refurbished.validate({code,id,_scenario,_specific})
            }, this, 500),

        },
        product_order_id: {
          required,
          integer,
        },
        amount: {
          required,
          integer,
        },
        description: {
          required,
          maxLength: maxLength(65535),
        },
      }
    const update= {
        code: {
          required,
            isUnique: debounceValidator(function (value, object) {
                const {id,code} = {...object.state}
                const _scenario=id?'update':'create'
                const _specific=true
                if (!code)
                    return true
                return Refurbished.validate({code,id,_scenario,_specific})
            }, this, 500),

        },
        product_order_id: {
          required,
          integer,
        },
        amount: {
          required,
          integer,
        },
        description: {
          required,
          maxLength: maxLength(65535),
        },
      }
    export const validations = {create,update }
    export const feedbacks = {
      create: {
      code: {
        isUnique: 'This code has been taken' 

      },
      id: {
        isUnique: 'This id has been taken' 

      },
      },
      update: {
      code: {
        isUnique: 'This code has been taken' 

      },
      id: {
        isUnique: 'This id has been taken' 

      },
      },
    }