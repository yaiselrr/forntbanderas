/**Generate by ASGENS
*@author Charlietyn 
*@date Mon Jun 24 22:33:51 GMT-04:00 2024  
*@time Mon Jun 24 22:33:51 GMT-04:00 2024  
*/
import RBaseModel from "~co/rest/RestBase"
import * as columns from './roles.columns';
import * as validation from './roles.validation';
import dayjs from 'dayjs';


const Parent = await RBaseModel('roles', 'security/roles')
  export default class Roles extends Parent {

       id
       role_father_id
       name
       description
       created_at
       updated_at

    constructor(attributes = null) {
      super();
      if (attributes != null) {
        this.id = attributes.id|| undefined
        this.role_father_id = attributes.role_father_id|| null
        this.name = attributes.name|| null
        this.description = attributes.description|| null
        this.created_at = attributes.created_at?dayjs(attributes.created_at):null
        this.updated_at = attributes.updated_at?dayjs(attributes.updated_at):null
      }
    }

    set_attributes(attributes = null) {
      if (attributes != null) {
        this.id = attributes.id
        this.role_father_id = attributes.role_father_id
        this.name = attributes.name
        this.description = attributes.description
        this.created_at = dayjs(attributes.created_at)
        this.updated_at = dayjs(attributes.updated_at)
      }
    }

    static validations = validation.validations

    static feedbacks = validation.feedbacks

    static columns = columns.columns
    static visible_columns = Roles.show_columns(['*'], true)


    get_id() {
      return this.id;
    }
    class_name() {
        return 'Roles'
      }
  

   }

