/**Generate by ASGENS
*@author Charlietyn 
*@date Sun Aug 11 09:35:10 GMT-04:00 2024  
*@time Sun Aug 11 09:35:10 GMT-04:00 2024  
*/
import RBaseModel from "~co/rest/RestBase"
import * as columns from './types.columns';
import * as validation from './types.validation';
import dayjs from 'dayjs';


const Parent = await RBaseModel('types', 'masters/types')
  export default class Types extends Parent {

       id
       name
       description
       created_at
       updated_at

    constructor(attributes = null) {
      super();
      if (attributes != null) {
        this.id = attributes.id|| undefined
        this.name = attributes.name|| null
        this.description = attributes.description|| null
        this.created_at = attributes.created_at?dayjs(attributes.created_at):null
        this.updated_at = attributes.updated_at?dayjs(attributes.updated_at):null
      }
    }

    set_attributes(attributes = null) {
      if (attributes != null) {
        this.id = attributes.id
        this.name = attributes.name
        this.description = attributes.description
        this.created_at = dayjs(attributes.created_at)
        this.updated_at = dayjs(attributes.updated_at)
      }
    }

    static validations = validation.validations

    static feedbacks = validation.feedbacks

    static columns = columns.columns
    static visible_columns = Types.show_columns(['*'], true)


    get_id() {
      return this.id;
    }
    class_name() {
        return 'Types'
      }
  

   }

