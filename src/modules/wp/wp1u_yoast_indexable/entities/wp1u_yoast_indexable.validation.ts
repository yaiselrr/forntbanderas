import {
    required,
    integer,
    between,
    maxLength,
    minLength,
    decimal
  } from '@vuelidate/validators';
import Wp1u_yoast_indexable from "~m/wp/wp1u_yoast_indexable/entities/wp1u_yoast_indexable.model"
import {debounceValidator} from "~co/components/form"
    const create={
        permalink: {
        },
        permalink_hash: {
        },
        object_id: {
          integer,
        },
        object_type: {
          required,
        },
        object_sub_type: {
        },
        author_id: {
          integer,
        },
        post_parent: {
          integer,
        },
        title: {
          maxLength: maxLength(65535),
        },
        description: {
        },
        breadcrumb_title: {
          maxLength: maxLength(65535),
        },
        post_status: {
        },
        is_public: {
        },
        is_protected: {
        },
        has_public_posts: {
        },
        number_of_pages: {
          integer,
        },
        canonical: {
        },
        primary_focus_keyword: {
        },
        primary_focus_keyword_score: {
          integer,
        },
        readability_score: {
          integer,
        },
        is_cornerstone: {
        },
        is_robots_noindex: {
        },
        is_robots_nofollow: {
        },
        is_robots_noarchive: {
        },
        is_robots_noimageindex: {
        },
        is_robots_nosnippet: {
        },
        twitter_title: {
          maxLength: maxLength(65535),
        },
        twitter_image: {
        },
        twitter_description: {
        },
        twitter_image_id: {
        },
        twitter_image_source: {
          maxLength: maxLength(65535),
        },
        open_graph_title: {
          maxLength: maxLength(65535),
        },
        open_graph_description: {
        },
        open_graph_image: {
        },
        open_graph_image_id: {
        },
        open_graph_image_source: {
          maxLength: maxLength(65535),
        },
        open_graph_image_meta: {
        },
        link_count: {
          integer,
        },
        incoming_link_count: {
          integer,
        },
        prominent_words_version: {
          integer,
        },
        blog_id: {
          required,
          integer,
        },
        language: {
        },
        region: {
        },
        schema_page_type: {
        },
        schema_article_type: {
        },
        has_ancestors: {
        },
        estimated_reading_time_minutes: {
          integer,
        },
        version: {
          integer,
        },
        object_last_modified: {
        },
        object_published_at: {
        },
        inclusive_language_score: {
          integer,
        },
      }
    const update= {
        permalink: {
        },
        permalink_hash: {
        },
        object_id: {
          integer,
        },
        object_type: {
          required,
        },
        object_sub_type: {
        },
        author_id: {
          integer,
        },
        post_parent: {
          integer,
        },
        title: {
          maxLength: maxLength(65535),
        },
        description: {
        },
        breadcrumb_title: {
          maxLength: maxLength(65535),
        },
        post_status: {
        },
        is_public: {
        },
        is_protected: {
        },
        has_public_posts: {
        },
        number_of_pages: {
          integer,
        },
        canonical: {
        },
        primary_focus_keyword: {
        },
        primary_focus_keyword_score: {
          integer,
        },
        readability_score: {
          integer,
        },
        is_cornerstone: {
        },
        is_robots_noindex: {
        },
        is_robots_nofollow: {
        },
        is_robots_noarchive: {
        },
        is_robots_noimageindex: {
        },
        is_robots_nosnippet: {
        },
        twitter_title: {
          maxLength: maxLength(65535),
        },
        twitter_image: {
        },
        twitter_description: {
        },
        twitter_image_id: {
        },
        twitter_image_source: {
          maxLength: maxLength(65535),
        },
        open_graph_title: {
          maxLength: maxLength(65535),
        },
        open_graph_description: {
        },
        open_graph_image: {
        },
        open_graph_image_id: {
        },
        open_graph_image_source: {
          maxLength: maxLength(65535),
        },
        open_graph_image_meta: {
        },
        link_count: {
          integer,
        },
        incoming_link_count: {
          integer,
        },
        prominent_words_version: {
          integer,
        },
        blog_id: {
          required,
          integer,
        },
        language: {
        },
        region: {
        },
        schema_page_type: {
        },
        schema_article_type: {
        },
        has_ancestors: {
        },
        estimated_reading_time_minutes: {
          integer,
        },
        version: {
          integer,
        },
        object_last_modified: {
        },
        object_published_at: {
        },
        inclusive_language_score: {
          integer,
        },
      }
    export const validations = {create,update }
    export const feedbacks = {
      create: {
      id: {
        isUnique: 'This id has been taken' 

      },
      },
      update: {
      id: {
        isUnique: 'This id has been taken' 

      },
      },
    }
