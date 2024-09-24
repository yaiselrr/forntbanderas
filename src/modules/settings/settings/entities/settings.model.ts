/**Generate by ASGENS
*@author Charlietyn 
*@date Mon Jun 24 22:33:51 GMT-04:00 2024  
*@time Mon Jun 24 22:33:51 GMT-04:00 2024  
*/
import RBaseModel from "~co/rest/RestBase"
import * as columns from './settings.columns';
import * as validation from './settings.validation';
import dayjs from 'dayjs';


const Parent = await RBaseModel('settings', 'settings/settings')
  export default class Settings extends Parent {

       id
       settings
       settings_value
       created_at
       updated_at

    constructor(attributes = null) {
      super();
      if (attributes != null) {
        this.id = attributes.id|| undefined
        this.settings = attributes.settings|| null
        this.settings_value = attributes.settings_value|| null
        this.created_at = attributes.created_at?dayjs(attributes.created_at):null
        this.updated_at = attributes.updated_at?dayjs(attributes.updated_at):null
      }
    }

    set_attributes(attributes = null) {
      if (attributes != null) {
        this.id = attributes.id
        this.settings = attributes.settings
        this.settings_value = attributes.settings_value
        this.created_at = dayjs(attributes.created_at)
        this.updated_at = dayjs(attributes.updated_at)
      }
    }

    static validations = validation.validations

    static feedbacks = validation.feedbacks

    static columns = columns.columns
    static visible_columns = Settings.show_columns(['*'], true)


    get_id() {
      return this.id;
    }
    class_name() {
        return 'Settings'
      }
  

   }

