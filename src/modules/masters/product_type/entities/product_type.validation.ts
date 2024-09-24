import {
    required,
    integer,
    between,
    maxLength,
    minLength,
    decimal
  } from '@vuelidate/validators';
import Product_type from "~m/masters/product_type/entities/product_type.model"
import {debounceValidator} from "~co/components/form"
    const create={
        name: {
          required,
            isUnique: debounceValidator(function (value, object) {
                const {id,name} = {...object.state}
                const _scenario=id?'update':'create'
                const _specific=true
                if (!name)
                    return true
                return Product_type.validate({name,id,_scenario,_specific})
            }, this, 500),

        },
        description: {
          required,
          maxLength: maxLength(65535),
        },
      }
    const update= {
        name: {
          required,
            isUnique: debounceValidator(function (value, object) {
                const {id,name} = {...object.state}
                const _scenario=id?'update':'create'
                const _specific=true
                if (!name)
                    return true
                return Product_type.validate({name,id,_scenario,_specific})
            }, this, 500),

        },
        description: {
          required,
          maxLength: maxLength(65535),
        },
      }
    export const validations = {create,update }
    export const feedbacks = {
      create: {
      id: {
        isUnique: 'This id has been taken' 

      },
      name: {
        isUnique: 'This name has been taken' 

      },
      },
      update: {
      id: {
        isUnique: 'This id has been taken' 

      },
      name: {
        isUnique: 'This name has been taken' 

      },
      },
    }
