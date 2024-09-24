/**Generate by ASGENS
*@author Charlietyn 
*@date Mon Jun 24 22:33:51 GMT-04:00 2024  
*@time Mon Jun 24 22:33:51 GMT-04:00 2024  
*/
import RBaseModel from "~co/rest/RestBase"
import * as columns from './categories.columns';
import * as validation from './categories.validation';
import dayjs from 'dayjs';


const Parent = await RBaseModel('categories', 'masters/categories')
  export default class Categories extends Parent {

       id
       category_id
       description
       name
       slug
       image
       deleted_at
       created_at
       updated_at

    constructor(attributes = null) {
      super();
      if (attributes != null) {
        this.id = attributes.id|| undefined
        this.category_id = attributes.category_id|| null
        this.description = attributes.description|| null
        this.name = attributes.name|| null
        this.slug = attributes.slug|| null
        this.image = attributes.image|| null
        this.deleted_at = attributes.deleted_at?dayjs(attributes.deleted_at):null
        this.created_at = attributes.created_at?dayjs(attributes.created_at):null
        this.updated_at = attributes.updated_at?dayjs(attributes.updated_at):null
      }
    }

    set_attributes(attributes = null) {
      if (attributes != null) {
        this.id = attributes.id
        this.category_id = attributes.category_id
        this.description = attributes.description
        this.name = attributes.name
        this.slug = attributes.slug
        this.image = attributes.image|| null
        this.deleted_at = dayjs(attributes.deleted_at)
        this.created_at = dayjs(attributes.created_at)
        this.updated_at = dayjs(attributes.updated_at)
      }
    }

    static validations = validation.validations

    static feedbacks = validation.feedbacks

    static columns = columns.columns
    static visible_columns = Categories.show_columns(['description'], false)


    get_id() {
      return this.id;
    }
    class_name() {
        return 'Categories'
      }
  

   }

