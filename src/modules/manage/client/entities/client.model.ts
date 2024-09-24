/**Generate by ASGENS
*@author Charlietyn 
*@date Mon Jun 24 22:33:51 GMT-04:00 2024  
*@time Mon Jun 24 22:33:51 GMT-04:00 2024  
*/
import RBaseModel from "~co/rest/RestBase"
import * as columns from './client.columns';
import * as validation from './client.validation';
import dayjs from 'dayjs';


const Parent = await RBaseModel('client', 'manage/client')
  export default class Client extends Parent {

       code
       user_id
       created_at
       updated_at

    constructor(attributes = null) {
      super();
      if (attributes != null) {
        this.code = attributes.code|| undefined
        this.user_id = attributes.user_id|| null
        this.created_at = attributes.created_at?dayjs(attributes.created_at):null
        this.updated_at = attributes.updated_at?dayjs(attributes.updated_at):null
      }
    }

    set_attributes(attributes = null) {
      if (attributes != null) {
        this.code = attributes.code
        this.user_id = attributes.user_id
        this.created_at = dayjs(attributes.created_at)
        this.updated_at = dayjs(attributes.updated_at)
      }
    }

    static validations = validation.validations

    static feedbacks = validation.feedbacks

    static columns = columns.columns
    static visible_columns = Client.show_columns(['*'], true)


    get_id() {
      return this.code;
    }
    class_name() {
        return 'Client'
      }
  

   }

