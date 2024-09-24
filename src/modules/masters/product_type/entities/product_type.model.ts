/**Generate by ASGENS
*@author Charlietyn
*@date Sun Aug 11 09:35:10 GMT-04:00 2024
*@time Sun Aug 11 09:35:10 GMT-04:00 2024
*/
import RBaseModel from "~co/rest/RestBase"
import * as columns from './product_type.columns';
import * as validation from './product_type.validation';


const Parent = await RBaseModel('product_type', 'masters/product_type')
  export default class Product_type extends Parent {

       id
       name
       description

    constructor(attributes = null) {
      super();
      if (attributes != null) {
        this.id = attributes.id|| undefined
        this.name = attributes.name|| null
        this.description = attributes.description|| null
      }
    }

    set_attributes(attributes = null) {
      if (attributes != null) {
        this.id = attributes.id
        this.name = attributes.name
        this.description = attributes.description
      }
    }

    static validations = validation.validations

    static feedbacks = validation.feedbacks

    static columns = columns.columns
    static visible_columns = Product_type.show_columns(['name','_action'], true)


    get_id() {
      return this.id;
    }
    class_name() {
        return 'Product_type'
      }


   }

