/**Generate by ASGENS
*@author Charlietyn 
*@date Mon Jun 24 22:33:51 GMT-04:00 2024  
*@time Mon Jun 24 22:33:51 GMT-04:00 2024  
*/
import RBaseModel from "~co/rest/RestBase"
import * as columns from './refurbished.columns';
import * as validation from './refurbished.validation';
import dayjs from 'dayjs';


const Parent = await RBaseModel('refurbished', 'manage/refurbished')
  export default class Refurbished extends Parent {

       id
       code
       product_order_id
       amount
       description
       created_at
       updated_at

    constructor(attributes = null) {
      super();
      if (attributes != null) {
        this.id = attributes.id|| undefined
        this.code = attributes.code|| null
        this.product_order_id = attributes.product_order_id|| null
        this.amount = attributes.amount|| null
        this.description = attributes.description|| null
        this.created_at = attributes.created_at?dayjs(attributes.created_at):null
        this.updated_at = attributes.updated_at?dayjs(attributes.updated_at):null
      }
    }

    set_attributes(attributes = null) {
      if (attributes != null) {
        this.id = attributes.id
        this.code = attributes.code
        this.product_order_id = attributes.product_order_id
        this.amount = attributes.amount
        this.description = attributes.description
        this.created_at = dayjs(attributes.created_at)
        this.updated_at = dayjs(attributes.updated_at)
      }
    }

    static validations = validation.validations

    static feedbacks = validation.feedbacks

    static columns = columns.columns
    static visible_columns = Refurbished.show_columns(['*'], true)


    get_id() {
      return this.id;
    }
    class_name() {
        return 'Refurbished'
      }
  

   }

