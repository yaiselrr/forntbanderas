import {
    required,
    integer,
    between,
    maxLength,
    minLength,
    decimal
  } from '@vuelidate/validators';
import Wp1u_posts from "~m/wp/wp1u_posts/entities/wp1u_posts.model"
import {debounceValidator} from "~co/components/form"
    const create={
        post_author: {
          required,
          integer,
        },
        post_date: {
          required,
        },
        post_date_gmt: {
          required,
        },
        post_content: {
          required,
        },
        post_title: {
          required,
          maxLength: maxLength(65535),
        },
        post_excerpt: {
          required,
          maxLength: maxLength(65535),
        },
        post_status: {
          required,
        },
        comment_status: {
          required,
        },
        ping_status: {
          required,
        },
        post_password: {
          required,
        },
        post_name: {
          required,
        },
        to_ping: {
          required,
          maxLength: maxLength(65535),
        },
        pinged: {
          required,
          maxLength: maxLength(65535),
        },
        post_modified: {
          required,
        },
        post_modified_gmt: {
          required,
        },
        post_content_filtered: {
          required,
        },
        post_parent: {
          required,
          integer,
        },
        guid: {
          required,
        },
        menu_order: {
          required,
          integer,
        },
        post_type: {
          required,
        },
        post_mime_type: {
          required,
        },
        comment_count: {
          required,
          integer,
        },
      }
    const update= {
        post_author: {
          required,
          integer,
        },
        post_date: {
          required,
        },
        post_date_gmt: {
          required,
        },
        post_content: {
          required,
        },
        post_title: {
          required,
          maxLength: maxLength(65535),
        },
        post_excerpt: {
          required,
          maxLength: maxLength(65535),
        },
        post_status: {
          required,
        },
        comment_status: {
          required,
        },
        ping_status: {
          required,
        },
        post_password: {
          required,
        },
        post_name: {
          required,
        },
        to_ping: {
          required,
          maxLength: maxLength(65535),
        },
        pinged: {
          required,
          maxLength: maxLength(65535),
        },
        post_modified: {
          required,
        },
        post_modified_gmt: {
          required,
        },
        post_content_filtered: {
          required,
        },
        post_parent: {
          required,
          integer,
        },
        guid: {
          required,
        },
        menu_order: {
          required,
          integer,
        },
        post_type: {
          required,
        },
        post_mime_type: {
          required,
        },
        comment_count: {
          required,
          integer,
        },
      }
    export const validations = {create,update }
    export const feedbacks = {
      create: {
      ID: {
        isUnique: 'This ID has been taken' 

      },
      },
      update: {
      ID: {
        isUnique: 'This ID has been taken' 

      },
      },
    }
