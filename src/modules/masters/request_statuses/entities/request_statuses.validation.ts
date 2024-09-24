import {
    required,
    integer,
    between,
    maxLength,
    minLength,
    decimal
  } from '@vuelidate/validators';
import Request_statuses from "~m/masters/request_statuses/entities/request_statuses.model"
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
                return Request_statuses.validate({name,id,_scenario,_specific})
            }, this, 500),

        },
        decription: {
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
                return Request_statuses.validate({name,id,_scenario,_specific})
            }, this, 500),

        },
        decription: {
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
