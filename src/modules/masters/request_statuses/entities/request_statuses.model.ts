/**Generate by ASGENS
*@author Charlietyn 
*@date Mon Jun 24 22:33:51 GMT-04:00 2024  
*@time Mon Jun 24 22:33:51 GMT-04:00 2024  
*/
import RBaseModel from "~co/rest/RestBase"
import * as columns from './request_statuses.columns';
import * as validation from './request_statuses.validation';
import dayjs from 'dayjs';


const Parent = await RBaseModel('request_statuses', 'masters/request_statuses')
  export default class Request_statuses extends Parent {

       id
       name
       decription
       created_at
       updated_at

    constructor(attributes = null) {
      super();
      if (attributes != null) {
        this.id = attributes.id|| undefined
        this.name = attributes.name|| null
        this.decription = attributes.decription|| null
        this.created_at = attributes.created_at?dayjs(attributes.created_at):null
        this.updated_at = attributes.updated_at?dayjs(attributes.updated_at):null
      }
    }

    set_attributes(attributes = null) {
      if (attributes != null) {
        this.id = attributes.id
        this.name = attributes.name
        this.decription = attributes.decription
        this.created_at = dayjs(attributes.created_at)
        this.updated_at = dayjs(attributes.updated_at)
      }
    }

    static validations = validation.validations

    static feedbacks = validation.feedbacks

    static columns = columns.columns
    static visible_columns = Request_statuses.show_columns(['decription'], false)


    get_id() {
      return this.id;
    }
    class_name() {
        return 'Request_statuses'
      }
  

   }

