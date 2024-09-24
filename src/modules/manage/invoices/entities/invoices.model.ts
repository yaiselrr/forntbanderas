/**Generate by ASGENS
*@author Charlietyn 
*@date Mon Jun 24 22:33:51 GMT-04:00 2024  
*@time Mon Jun 24 22:33:51 GMT-04:00 2024  
*/
import RBaseModel from "~co/rest/RestBase"
import * as columns from './invoices.columns';
import * as validation from './invoices.validation';
import dayjs from 'dayjs';


const Parent = await RBaseModel('invoices', 'manage/invoices')
  export default class Invoices extends Parent {

       id
       code
       year
       phone
       address
       subtotal
       total
       pay_way
       observations
       invoice_date
       order_id
       prefix
       discount
       cancelled_at
       cancelled_by
       created_at
       updated_at

    constructor(attributes = null) {
      super();
      if (attributes != null) {
        this.id = attributes.id|| undefined
        this.code = attributes.code|| null
        this.year = attributes.year|| null
        this.phone = attributes.phone|| null
        this.address = attributes.address|| null
        this.subtotal = attributes.subtotal|| null
        this.total = attributes.total|| null
        this.pay_way = attributes.pay_way|| null
        this.observations = attributes.observations|| null
        this.invoice_date = attributes.invoice_date?dayjs(attributes.invoice_date):null
        this.order_id = attributes.order_id|| null
        this.prefix = attributes.prefix|| null
        this.discount = attributes.discount|| null
        this.cancelled_at = attributes.cancelled_at?dayjs(attributes.cancelled_at):null
        this.cancelled_by = attributes.cancelled_by|| null
        this.created_at = attributes.created_at?dayjs(attributes.created_at):null
        this.updated_at = attributes.updated_at?dayjs(attributes.updated_at):null
      }
    }

    set_attributes(attributes = null) {
      if (attributes != null) {
        this.id = attributes.id
        this.code = attributes.code
        this.year = attributes.year
        this.phone = attributes.phone
        this.address = attributes.address
        this.subtotal = attributes.subtotal
        this.total = attributes.total
        this.pay_way = attributes.pay_way
        this.observations = attributes.observations
        this.invoice_date = dayjs(attributes.invoice_date)
        this.order_id = attributes.order_id
        this.prefix = attributes.prefix
        this.discount = attributes.discount
        this.cancelled_at = dayjs(attributes.cancelled_at)
        this.cancelled_by = attributes.cancelled_by
        this.created_at = dayjs(attributes.created_at)
        this.updated_at = dayjs(attributes.updated_at)
      }
    }

    static validations = validation.validations

    static feedbacks = validation.feedbacks

    static columns = columns.columns
    static visible_columns = Invoices.show_columns(['*'], true)


    get_id() {
      return this.id;
    }
    class_name() {
        return 'Invoices'
      }
  

   }

