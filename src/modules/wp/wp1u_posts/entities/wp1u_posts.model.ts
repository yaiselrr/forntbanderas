/**Generate by ASGENS
*@author Charlietyn 
*@date Mon Jul 22 08:44:39 GMT-04:00 2024  
*@time Mon Jul 22 08:44:39 GMT-04:00 2024  
*/
import RBaseModel from "~co/rest/RestBase"
import * as columns from './wp1u_posts.columns';
import * as validation from './wp1u_posts.validation';
import dayjs from 'dayjs';


const Parent = await RBaseModel('wp1u_posts', 'wp/wp1u_posts')
  export default class Wp1u_posts extends Parent {

       ID
       post_author
       post_date
       post_date_gmt
       post_content
       post_title
       post_excerpt
       post_status
       comment_status
       ping_status
       post_password
       post_name
       to_ping
       pinged
       post_modified
       post_modified_gmt
       post_content_filtered
       post_parent
       guid
       menu_order
       post_type
       post_mime_type
       comment_count

    constructor(attributes = null) {
      super();
      if (attributes != null) {
        this.ID = attributes.ID|| undefined
        this.post_author = attributes.post_author|| null
        this.post_date = attributes.post_date?dayjs(attributes.post_date):null
        this.post_date_gmt = attributes.post_date_gmt?dayjs(attributes.post_date_gmt):null
        this.post_content = attributes.post_content|| null
        this.post_title = attributes.post_title|| null
        this.post_excerpt = attributes.post_excerpt|| null
        this.post_status = attributes.post_status|| null
        this.comment_status = attributes.comment_status|| null
        this.ping_status = attributes.ping_status|| null
        this.post_password = attributes.post_password|| null
        this.post_name = attributes.post_name|| null
        this.to_ping = attributes.to_ping|| null
        this.pinged = attributes.pinged|| null
        this.post_modified = attributes.post_modified?dayjs(attributes.post_modified):null
        this.post_modified_gmt = attributes.post_modified_gmt?dayjs(attributes.post_modified_gmt):null
        this.post_content_filtered = attributes.post_content_filtered|| null
        this.post_parent = attributes.post_parent|| null
        this.guid = attributes.guid|| null
        this.menu_order = attributes.menu_order|| null
        this.post_type = attributes.post_type|| null
        this.post_mime_type = attributes.post_mime_type|| null
        this.comment_count = attributes.comment_count|| null
      }
    }

    set_attributes(attributes = null) {
      if (attributes != null) {
        this.ID = attributes.ID
        this.post_author = attributes.post_author
        this.post_date = dayjs(attributes.post_date)
        this.post_date_gmt = dayjs(attributes.post_date_gmt)
        this.post_content = attributes.post_content
        this.post_title = attributes.post_title
        this.post_excerpt = attributes.post_excerpt
        this.post_status = attributes.post_status
        this.comment_status = attributes.comment_status
        this.ping_status = attributes.ping_status
        this.post_password = attributes.post_password
        this.post_name = attributes.post_name
        this.to_ping = attributes.to_ping
        this.pinged = attributes.pinged
        this.post_modified = dayjs(attributes.post_modified)
        this.post_modified_gmt = dayjs(attributes.post_modified_gmt)
        this.post_content_filtered = attributes.post_content_filtered
        this.post_parent = attributes.post_parent
        this.guid = attributes.guid
        this.menu_order = attributes.menu_order
        this.post_type = attributes.post_type
        this.post_mime_type = attributes.post_mime_type
        this.comment_count = attributes.comment_count
      }
    }

    static validations = validation.validations

    static feedbacks = validation.feedbacks

    static columns = columns.columns
    static visible_columns = Wp1u_posts.show_columns(['*'], true)


    get_id() {
      return this.ID;
    }
    class_name() {
        return 'Wp1u_posts'
      }
  

   }

