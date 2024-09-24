import {
    required,
    integer,
    between,
    maxLength,
    minLength,
    decimal
  } from '@vuelidate/validators';
import Categories from "~m/masters/categories/entities/categories.model"
import {debounceValidator} from "~co/components/form"
    const create={
        category_id: {
          integer,
        },
        description: {
          required,
          maxLength: maxLength(65535),
        },
        name: {
          required,
            isUnique: debounceValidator(function (value, object) {
                const {id,name} = {...object.state}
                const _scenario=id?'update':'create'
                const _specific=true
                if (!name)
                    return true
                return Categories.validate({name,id,_scenario,_specific})
            }, this, 500),

        },
        slug: {
            isUnique: debounceValidator(function (value, object) {
                const {id,slug} = {...object.state}
                const _scenario=id?'update':'create'
                const _specific=true
                if (!slug)
                    return true
                return Categories.validate({slug,id,_scenario,_specific})
            }, this, 500),

        },
        image: {
        },
      }
    const update= {
        category_id: {
          integer,
        },
        description: {
          required,
          maxLength: maxLength(65535),
        },
        name: {
          required,
            isUnique: debounceValidator(function (value, object) {
                const {id,name} = {...object.state}
                const _scenario=id?'update':'create'
                const _specific=true
                if (!name)
                    return true
                return Categories.validate({name,id,_scenario,_specific})
            }, this, 500),

        },
        slug: {
            isUnique: debounceValidator(function (value, object) {
                const {id,slug} = {...object.state}
                const _scenario=id?'update':'create'
                const _specific=true
                if (!slug)
                    return true
                return Categories.validate({slug,id,_scenario,_specific})
            }, this, 500),

        },
        image: {
        },
      }
    export const validations = {create,update }
    export const feedbacks = {
      create: {
      name: {
        isUnique: 'Este nombre de categoria ya existe' 

      },
      id: {
        isUnique: 'El Id ya existe' 

      },
      slug: {
        isUnique: 'Este Slug ya existe' 

      },
      },
      update: {
      name: {
        isUnique: 'Este nombre de categoria ya existe' 

      },
      id: {
        isUnique: 'El Id ya existe' 

      },
      slug: {
        isUnique: 'Este Slug ya existe' 

      },
      },
    }
