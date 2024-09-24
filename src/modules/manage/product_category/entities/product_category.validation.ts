import {
    required,
    integer,
    between,
    maxLength,
    minLength,
    decimal
  } from '@vuelidate/validators';
import Product_category from "~m/manage/product_category/entities/product_category.model"
import {debounceValidator} from "~co/components/form"
    const create={
        product_id: {
          required,
          integer,
        },
        category_id: {
          required,
          integer,
        },
      }
    const update= {
        product_id: {
          required,
          integer,
        },
        category_id: {
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
