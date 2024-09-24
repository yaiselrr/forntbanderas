/**Generate by ASGENS
*@author Charlietyn 
*@date Mon Jul 22 08:44:39 GMT-04:00 2024  
*@time Mon Jul 22 08:44:39 GMT-04:00 2024  
*/
import RBaseModel from "~co/rest/RestBase"
import * as columns from './wp1u_postmeta.columns';
import * as validation from './wp1u_postmeta.validation';


const Parent = await RBaseModel('wp1u_postmeta', 'wp/wp1u_postmeta')
  export default class Wp1u_postmeta extends Parent {

       meta_id
       post_id
       meta_key
       meta_value

    constructor(attributes = null) {
      super();
      if (attributes != null) {
        this.meta_id = attributes.meta_id|| undefined
        this.post_id = attributes.post_id|| null
        this.meta_key = attributes.meta_key|| null
        this.meta_value = attributes.meta_value|| null
      }
    }

    set_attributes(attributes = null) {
      if (attributes != null) {
        this.meta_id = attributes.meta_id
        this.post_id = attributes.post_id
        this.meta_key = attributes.meta_key
        this.meta_value = attributes.meta_value
      }
    }

    static validations = validation.validations

    static feedbacks = validation.feedbacks

    static columns = columns.columns
    static visible_columns = Wp1u_postmeta.show_columns(['*'], true)


    get_id() {
      return this.meta_id;
    }
    class_name() {
        return 'Wp1u_postmeta'
      }
  

   }

