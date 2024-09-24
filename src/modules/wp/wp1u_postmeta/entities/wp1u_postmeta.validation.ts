import {
    required,
    integer,
    between,
    maxLength,
    minLength,
    decimal
  } from '@vuelidate/validators';
import Wp1u_postmeta from "~m/wp/wp1u_postmeta/entities/wp1u_postmeta.model"
import {debounceValidator} from "~co/components/form"
    const create={
        post_id: {
          required,
          integer,
        },
        meta_key: {
        },
        meta_value: {
        },
      }
    const update= {
        post_id: {
          required,
          integer,
        },
        meta_key: {
        },
        meta_value: {
        },
      }
    export const validations = {create,update }
    export const feedbacks = {
      create: {
      meta_id: {
        isUnique: 'This meta_id has been taken' 

      },
      },
      update: {
      meta_id: {
        isUnique: 'This meta_id has been taken' 

      },
      },
    }
