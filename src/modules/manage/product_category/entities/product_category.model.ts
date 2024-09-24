/**Generate by ASGENS
*@author Charlietyn 
*@date Mon Jun 24 22:33:51 GMT-04:00 2024  
*@time Mon Jun 24 22:33:51 GMT-04:00 2024  
*/
import RBaseModel from "~co/rest/RestBase"
import * as columns from './product_category.columns';
import * as validation from './product_category.validation';
import dayjs from 'dayjs';


const Parent = await RBaseModel('product_category', 'manage/product_category')
  export default class Product_category extends Parent {

       id
       product_id
       category_id
       created_at
       updated_at

    constructor(attributes = null) {
      super();
      if (attributes != null) {
        this.id = attributes.id|| undefined
        this.product_id = attributes.product_id|| null
        this.category_id = attributes.category_id|| null
        this.created_at = attributes.created_at?dayjs(attributes.created_at):null
        this.updated_at = attributes.updated_at?dayjs(attributes.updated_at):null
      }
    }

    set_attributes(attributes = null) {
      if (attributes != null) {
        this.id = attributes.id
        this.product_id = attributes.product_id
        this.category_id = attributes.category_id
        this.created_at = dayjs(attributes.created_at)
        this.updated_at = dayjs(attributes.updated_at)
      }
    }

    static validations = validation.validations

    static feedbacks = validation.feedbacks

    static columns = columns.columns
    static visible_columns = Product_category.show_columns(['*'], true)


    get_id() {
      return this.id;
    }
    class_name() {
        return 'Product_category'
      }
  

   }

