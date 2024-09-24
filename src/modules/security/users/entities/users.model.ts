/**Generate by ASGENS
*@author Charlietyn
*@date Mon Jun 24 22:33:51 GMT-04:00 2024
*@time Mon Jun 24 22:33:51 GMT-04:00 2024
*/
import RBaseModel from "~co/rest/RestBase"
import * as columns from './users.columns';
import * as validation from './users.validation';
import dayjs from 'dayjs';


const Parent = await RBaseModel('users', 'security/users')
  export default class Users extends Parent {

       id
       name
       email
       password
       addresses
       phones
       created_at
       updated_at
       role_id

       confirm_password

    constructor(attributes = null) {
      super();
      if (attributes != null) {
        this.id = attributes.id|| undefined
        this.name = attributes.name|| null
        this.email = attributes.email|| null
        this.password = attributes.password|| null
        this.addresses = attributes.addresses|| null
        this.phones = attributes.phones|| null
        this.created_at = attributes.created_at?dayjs(attributes.created_at):null
        this.updated_at = attributes.updated_at?dayjs(attributes.updated_at):null
        this.role_id = attributes.role_id|| null
      }
    }

    set_attributes(attributes = null) {
      if (attributes != null) {
        this.id = attributes.id
        this.name = attributes.name
        this.email = attributes.email
        this.password = attributes.password
        this.addresses = attributes.addresses
        this.phones = attributes.phones
        this.created_at = dayjs(attributes.created_at)
        this.updated_at = dayjs(attributes.updated_at)
        this.role_id = attributes.role_id
      }
    }

    static validations = validation.validations

    static feedbacks = validation.feedbacks

    static columns = columns.columns
    static visible_columns = Users.show_columns(['password'], false)


    get_id() {
      return this.id;
    }
    class_name() {
        return 'Users'
      }


   }

