import {
    required,
    integer,
    between,
    maxLength,
    minLength,
    decimal
  } from '@vuelidate/validators';
import Invoices from "~m/manage/invoices/entities/invoices.model"
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
                return Invoices.validate({code,id,_scenario,_specific})
            }, this, 500),

        },
        year: {
          required,
          integer,
        },
        phone: {
        },
        address: {
        },
        subtotal: {
          required,
          decimal,
        },
        total: {
          required,
          decimal,
        },
        pay_way: {
          required,
        },
        observations: {
          maxLength: maxLength(65535),
        },
        invoice_date: {
          required,
        },
        order_id: {
          required,
          integer,
        },
        prefix: {
          required,
        },
        discount: {
          required,
          decimal,
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
                return Invoices.validate({code,id,_scenario,_specific})
            }, this, 500),

        },
        year: {
          required,
          integer,
        },
        phone: {
        },
        address: {
        },
        subtotal: {
          required,
          decimal,
        },
        total: {
          required,
          decimal,
        },
        pay_way: {
          required,
        },
        observations: {
          maxLength: maxLength(65535),
        },
        invoice_date: {
          required,
        },
        order_id: {
          required,
          integer,
        },
        prefix: {
          required,
        },
        discount: {
          required,
          decimal,
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
