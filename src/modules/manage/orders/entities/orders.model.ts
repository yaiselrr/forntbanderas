/**Generate by ASGENS
*@author Charlietyn 
*@date Mon Jun 24 22:33:51 GMT-04:00 2024  
*@time Mon Jun 24 22:33:51 GMT-04:00 2024  
*/
import RBaseModel from "~co/rest/RestBase"
import * as columns from './orders.columns';
import * as validation from './orders.validation';
import dayjs from 'dayjs';


const Parent = await RBaseModel('orders', 'manage/orders')
  export default class Orders extends Parent {

       id
       code
       phone
       address
       price
       observations
       request_status_id
       pay_way_id
       delivery_date
       requested_date
       cancelled_at
       cancelled_by
       created_at
       updated_at

    constructor(attributes = null) {
      super();
      if (attributes != null) {
        this.id = attributes.id|| undefined
        this.code = attributes.code|| null
        this.phone = attributes.phone|| null
        this.address = attributes.address|| null
        this.price = attributes.price|| null
        this.observations = attributes.observations|| null
        this.request_status_id = attributes.request_status_id|| null
        this.pay_way_id = attributes.pay_way_id|| null
        this.delivery_date = attributes.delivery_date?dayjs(attributes.delivery_date):null
        this.requested_date = attributes.requested_date?dayjs(attributes.requested_date):null
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
        this.phone = attributes.phone
        this.address = attributes.address
        this.price = attributes.price
        this.observations = attributes.observations
        this.request_status_id = attributes.request_status_id
        this.pay_way_id = attributes.pay_way_id
        this.delivery_date = dayjs(attributes.delivery_date)
        this.requested_date = dayjs(attributes.requested_date)
        this.cancelled_at = dayjs(attributes.cancelled_at)
        this.cancelled_by = attributes.cancelled_by
        this.created_at = dayjs(attributes.created_at)
        this.updated_at = dayjs(attributes.updated_at)
      }
    }

    static validations = validation.validations

    static feedbacks = validation.feedbacks

    static columns = columns.columns
    static visible_columns = Orders.show_columns(['*'], true)


    get_id() {
      return this.id;
    }
    class_name() {
        return 'Orders'
      }
  

   }

