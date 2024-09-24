import {
    required,
    integer,
    between,
    maxLength,
    minLength,
    decimal
  } from '@vuelidate/validators';
import Products_attribute from "~m/manage/products_attribute/entities/products_attribute.model"
import {debounceValidator} from "~co/components/form"
    const create={
        product_id: {
          required,
          integer,
        },
        attribute_id: {
          required,
          integer,
        },
      }
    const update= {
        product_id: {
          required,
          integer,
        },
        attribute_id: {
          required,
          integer,
        },
      }
    export const validations = {create,update }
    export const feedbacks = {
      create: {
      id: {
        isUnique: 'This id has been taken' 

      },
      },
      update: {
      id: {
        isUnique: 'This id has been taken' 

      },
      },
    }
