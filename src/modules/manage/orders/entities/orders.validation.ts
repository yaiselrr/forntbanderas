import {
    required,
    integer,
    between,
    maxLength,
    minLength,
    decimal
  } from '@vuelidate/validators';
import Orders from "~m/manage/orders/entities/orders.model"
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
                return Orders.validate({code,id,_scenario,_specific})
            }, this, 500),

        },
        phone: {
        },
        address: {
        },
        price: {
          required,
          decimal,
        },
        observations: {
          maxLength: maxLength(65535),
        },
        request_status_id: {
          required,
          integer,
        },
        pay_way_id: {
          integer,
        },
        delivery_date: {
        },
        requested_date: {
          required,
        },
        cancelled_at: {
        },
        cancelled_by: {
          integer,
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
                return Orders.validate({code,id,_scenario,_specific})
            }, this, 500),

        },
        phone: {
        },
        address: {
        },
        price: {
          required,
          decimal,
        },
        observations: {
          maxLength: maxLength(65535),
        },
        request_status_id: {
          required,
          integer,
        },
        pay_way_id: {
          integer,
        },
        delivery_date: {
        },
        requested_date: {
          required,
        },
        cancelled_at: {
        },
        cancelled_by: {
          integer,
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
