/**Generate by ASGENS
*@author Charlietyn 
*@date Mon Jul 22 08:44:39 GMT-04:00 2024  
*@time Mon Jul 22 08:44:39 GMT-04:00 2024  
*/
import RBaseModel from "~co/rest/RestBase"
import * as columns from './wp1u_yoast_indexable.columns';
import * as validation from './wp1u_yoast_indexable.validation';
import dayjs from 'dayjs';


const Parent = await RBaseModel('wp1u_yoast_indexable', 'wp/wp1u_yoast_indexable')
  export default class Wp1u_yoast_indexable extends Parent {

       id
       permalink
       permalink_hash
       object_id
       object_type
       object_sub_type
       author_id
       post_parent
       title
       description
       breadcrumb_title
       post_status
       is_public
       is_protected
       has_public_posts
       number_of_pages
       canonical
       primary_focus_keyword
       primary_focus_keyword_score
       readability_score
       is_cornerstone
       is_robots_noindex
       is_robots_nofollow
       is_robots_noarchive
       is_robots_noimageindex
       is_robots_nosnippet
       twitter_title
       twitter_image
       twitter_description
       twitter_image_id
       twitter_image_source
       open_graph_title
       open_graph_description
       open_graph_image
       open_graph_image_id
       open_graph_image_source
       open_graph_image_meta
       link_count
       incoming_link_count
       prominent_words_version
       created_at
       updated_at
       blog_id
       language
       region
       schema_page_type
       schema_article_type
       has_ancestors
       estimated_reading_time_minutes
       version
       object_last_modified
       object_published_at
       inclusive_language_score

    constructor(attributes = null) {
      super();
      if (attributes != null) {
        this.id = attributes.id|| undefined
        this.permalink = attributes.permalink|| null
        this.permalink_hash = attributes.permalink_hash|| null
        this.object_id = attributes.object_id|| null
        this.object_type = attributes.object_type|| null
        this.object_sub_type = attributes.object_sub_type|| null
        this.author_id = attributes.author_id|| null
        this.post_parent = attributes.post_parent|| null
        this.title = attributes.title|| null
        this.description = attributes.description|| null
        this.breadcrumb_title = attributes.breadcrumb_title|| null
        this.post_status = attributes.post_status|| null
        this.is_public = attributes.is_public=='1'?true:false
        this.is_protected = attributes.is_protected=='1'?true:false
        this.has_public_posts = attributes.has_public_posts=='1'?true:false
        this.number_of_pages = attributes.number_of_pages|| null
        this.canonical = attributes.canonical|| null
        this.primary_focus_keyword = attributes.primary_focus_keyword|| null
        this.primary_focus_keyword_score = attributes.primary_focus_keyword_score|| null
        this.readability_score = attributes.readability_score|| null
        this.is_cornerstone = attributes.is_cornerstone=='1'?true:false
        this.is_robots_noindex = attributes.is_robots_noindex=='1'?true:false
        this.is_robots_nofollow = attributes.is_robots_nofollow=='1'?true:false
        this.is_robots_noarchive = attributes.is_robots_noarchive=='1'?true:false
        this.is_robots_noimageindex = attributes.is_robots_noimageindex=='1'?true:false
        this.is_robots_nosnippet = attributes.is_robots_nosnippet=='1'?true:false
        this.twitter_title = attributes.twitter_title|| null
        this.twitter_image = attributes.twitter_image|| null
        this.twitter_description = attributes.twitter_description|| null
        this.twitter_image_id = attributes.twitter_image_id|| null
        this.twitter_image_source = attributes.twitter_image_source|| null
        this.open_graph_title = attributes.open_graph_title|| null
        this.open_graph_description = attributes.open_graph_description|| null
        this.open_graph_image = attributes.open_graph_image|| null
        this.open_graph_image_id = attributes.open_graph_image_id|| null
        this.open_graph_image_source = attributes.open_graph_image_source|| null
        this.open_graph_image_meta = attributes.open_graph_image_meta|| null
        this.link_count = attributes.link_count|| null
        this.incoming_link_count = attributes.incoming_link_count|| null
        this.prominent_words_version = attributes.prominent_words_version|| null
        this.created_at = attributes.created_at?dayjs(attributes.created_at):null
        this.updated_at = attributes.updated_at?dayjs(attributes.updated_at):null
        this.blog_id = attributes.blog_id|| null
        this.language = attributes.language|| null
        this.region = attributes.region|| null
        this.schema_page_type = attributes.schema_page_type|| null
        this.schema_article_type = attributes.schema_article_type|| null
        this.has_ancestors = attributes.has_ancestors=='1'?true:false
        this.estimated_reading_time_minutes = attributes.estimated_reading_time_minutes|| null
        this.version = attributes.version|| null
        this.object_last_modified = attributes.object_last_modified?dayjs(attributes.object_last_modified):null
        this.object_published_at = attributes.object_published_at?dayjs(attributes.object_published_at):null
        this.inclusive_language_score = attributes.inclusive_language_score|| null
      }
    }

    set_attributes(attributes = null) {
      if (attributes != null) {
        this.id = attributes.id
        this.permalink = attributes.permalink
        this.permalink_hash = attributes.permalink_hash
        this.object_id = attributes.object_id
        this.object_type = attributes.object_type
        this.object_sub_type = attributes.object_sub_type
        this.author_id = attributes.author_id
        this.post_parent = attributes.post_parent
        this.title = attributes.title
        this.description = attributes.description
        this.breadcrumb_title = attributes.breadcrumb_title
        this.post_status = attributes.post_status
        this.is_public = attributes.is_public
        this.is_protected = attributes.is_protected
        this.has_public_posts = attributes.has_public_posts
        this.number_of_pages = attributes.number_of_pages
        this.canonical = attributes.canonical
        this.primary_focus_keyword = attributes.primary_focus_keyword
        this.primary_focus_keyword_score = attributes.primary_focus_keyword_score
        this.readability_score = attributes.readability_score
        this.is_cornerstone = attributes.is_cornerstone
        this.is_robots_noindex = attributes.is_robots_noindex
        this.is_robots_nofollow = attributes.is_robots_nofollow
        this.is_robots_noarchive = attributes.is_robots_noarchive
        this.is_robots_noimageindex = attributes.is_robots_noimageindex
        this.is_robots_nosnippet = attributes.is_robots_nosnippet
        this.twitter_title = attributes.twitter_title
        this.twitter_image = attributes.twitter_image
        this.twitter_description = attributes.twitter_description
        this.twitter_image_id = attributes.twitter_image_id
        this.twitter_image_source = attributes.twitter_image_source
        this.open_graph_title = attributes.open_graph_title
        this.open_graph_description = attributes.open_graph_description
        this.open_graph_image = attributes.open_graph_image
        this.open_graph_image_id = attributes.open_graph_image_id
        this.open_graph_image_source = attributes.open_graph_image_source
        this.open_graph_image_meta = attributes.open_graph_image_meta
        this.link_count = attributes.link_count
        this.incoming_link_count = attributes.incoming_link_count
        this.prominent_words_version = attributes.prominent_words_version
        this.created_at = dayjs(attributes.created_at)
        this.updated_at = dayjs(attributes.updated_at)
        this.blog_id = attributes.blog_id
        this.language = attributes.language
        this.region = attributes.region
        this.schema_page_type = attributes.schema_page_type
        this.schema_article_type = attributes.schema_article_type
        this.has_ancestors = attributes.has_ancestors
        this.estimated_reading_time_minutes = attributes.estimated_reading_time_minutes
        this.version = attributes.version
        this.object_last_modified = dayjs(attributes.object_last_modified)
        this.object_published_at = dayjs(attributes.object_published_at)
        this.inclusive_language_score = attributes.inclusive_language_score
      }
    }

    static validations = validation.validations

    static feedbacks = validation.feedbacks

    static columns = columns.columns
    static visible_columns = Wp1u_yoast_indexable.show_columns(['*'], true)


    get_id() {
      return this.id;
    }
    class_name() {
        return 'Wp1u_yoast_indexable'
      }
  

   }

