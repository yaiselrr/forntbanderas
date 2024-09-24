/**Generate by ASGENS
*@author Charlietyn 
*@date Mon Jul 22 08:44:38 GMT-04:00 2024  
*@time Mon Jul 22 08:44:38 GMT-04:00 2024  
*/
import RBaseModel from "~co/rest/RestBase"
import * as columns from './products_attribute.columns';
import * as validation from './products_attribute.validation';


const Parent = await RBaseModel('products_attribute', 'manage/products_attribute')
  export default class Products_attribute extends Parent {

       id
       product_id
       attribute_id

    constructor(attributes = null) {
      super();
      if (attributes != null) {
        this.id = attributes.id|| undefined
        this.product_id = attributes.product_id|| null
        this.attribute_id = attributes.attribute_id|| null
      }
    }

    set_attributes(attributes = null) {
      if (attributes != null) {
        this.id = attributes.id
        this.product_id = attributes.product_id
        this.attribute_id = attributes.attribute_id
      }
    }

    static validations = validation.validations

    static feedbacks = validation.feedbacks

    static columns = columns.columns
    static visible_columns = Products_attribute.show_columns(['*'], true)


    get_id() {
      return this.id;
    }
    class_name() {
        return 'Products_attribute'
      }
  

   }

