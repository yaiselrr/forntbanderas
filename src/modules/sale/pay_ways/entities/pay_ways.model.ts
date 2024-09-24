/**Generate by ASGENS
*@author Charlietyn 
*@date Mon Jun 24 22:33:51 GMT-04:00 2024  
*@time Mon Jun 24 22:33:51 GMT-04:00 2024  
*/
import RBaseModel from "~co/rest/RestBase"
import * as columns from './pay_ways.columns';
import * as validation from './pay_ways.validation';
import dayjs from 'dayjs';


const Parent = await RBaseModel('pay_ways', 'sale/pay_ways')
  export default class Pay_ways extends Parent {

       id
       name
       instructions
       created_at
       updated_at

    constructor(attributes = null) {
      super();
      if (attributes != null) {
        this.id = attributes.id|| undefined
        this.name = attributes.name|| null
        this.instructions = attributes.instructions|| null
        this.created_at = attributes.created_at?dayjs(attributes.created_at):null
        this.updated_at = attributes.updated_at?dayjs(attributes.updated_at):null
      }
    }

    set_attributes(attributes = null) {
      if (attributes != null) {
        this.id = attributes.id
        this.name = attributes.name
        this.instructions = attributes.instructions
        this.created_at = dayjs(attributes.created_at)
        this.updated_at = dayjs(attributes.updated_at)
      }
    }

    static validations = validation.validations

    static feedbacks = validation.feedbacks

    static columns = columns.columns
    static visible_columns = Pay_ways.show_columns(['*'], true)


    get_id() {
      return this.id;
    }
    class_name() {
        return 'Pay_ways'
      }
  

   }

