import {
    required,
    integer,
    between,
    maxLength,
    minLength,
    decimal
  } from '@vuelidate/validators';
import Settings from "~m/settings/settings/entities/settings.model"
import {debounceValidator} from "~co/components/form"
    const create={
        settings: {
          required,
            isUnique: debounceValidator(function (value, object) {
                const {id,settings} = {...object.state}
                const _scenario=id?'update':'create'
                const _specific=true
                if (!settings)
                    return true
                return Settings.validate({settings,id,_scenario,_specific})
            }, this, 500),

        },
        settings_value: {
          required,
          maxLength: maxLength(65535),
        },
      }
    const update= {
        settings: {
          required,
            isUnique: debounceValidator(function (value, object) {
                const {id,settings} = {...object.state}
                const _scenario=id?'update':'create'
                const _specific=true
                if (!settings)
                    return true
                return Settings.validate({settings,id,_scenario,_specific})
            }, this, 500),

        },
        settings_value: {
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
      settings: {
        isUnique: 'This settings has been taken' 

      },
      },
      update: {
      id: {
        isUnique: 'This id has been taken' 

      },
      settings: {
        isUnique: 'This settings has been taken' 

      },
      },
    }
