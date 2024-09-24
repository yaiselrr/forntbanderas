import {ColumnType} from "ant-design-vue/es/table"
  export const columns:ColumnType[] = [
    {
      title: 'Permalink',
      dataIndex: 'permalink',
      align:'center',
      key: 'permalink',

      sorter: (a, b) =>  +(a.permalink > b.permalink)- +(a.permalink < b.permalink)
    },
    {
      title: 'Permalink_hash',
      dataIndex: 'permalink_hash',
      align:'center',
      key: 'permalink_hash',

      sorter: (a, b) =>  +(a.permalink_hash > b.permalink_hash)- +(a.permalink_hash < b.permalink_hash)
    },
    {
      title: 'Object_id',
      dataIndex: 'object_id',
      align:'center',
      key: 'object_id',

      sorter: (a, b) => a.object_id - b.object_id
    },
    {
      title: 'Object_type',
      dataIndex: 'object_type',
      align:'center',
      key: 'object_type',

      sorter: (a, b) =>  +(a.object_type > b.object_type)- +(a.object_type < b.object_type)
    },
    {
      title: 'Object_sub_type',
      dataIndex: 'object_sub_type',
      align:'center',
      key: 'object_sub_type',

      sorter: (a, b) =>  +(a.object_sub_type > b.object_sub_type)- +(a.object_sub_type < b.object_sub_type)
    },
    {
      title: 'Author_id',
      dataIndex: 'author_id',
      align:'center',
      key: 'author_id',

      sorter: (a, b) => a.author_id - b.author_id
    },
    {
      title: 'Post_parent',
      dataIndex: 'post_parent',
      align:'center',
      key: 'post_parent',

      sorter: (a, b) => a.post_parent - b.post_parent
    },
    {
      title: 'Title',
      dataIndex: 'title',
      align:'center',
      key: 'title',

      sorter: (a, b) =>  +(a.title > b.title)- +(a.title < b.title)
    },
    {
      title: 'Description',
      dataIndex: 'description',
      align:'center',
      key: 'description',

      sorter: (a, b) =>  +(a.description > b.description)- +(a.description < b.description)
    },
    {
      title: 'Breadcrumb_title',
      dataIndex: 'breadcrumb_title',
      align:'center',
      key: 'breadcrumb_title',

      sorter: (a, b) =>  +(a.breadcrumb_title > b.breadcrumb_title)- +(a.breadcrumb_title < b.breadcrumb_title)
    },
    {
      title: 'Post_status',
      dataIndex: 'post_status',
      align:'center',
      key: 'post_status',

      sorter: (a, b) =>  +(a.post_status > b.post_status)- +(a.post_status < b.post_status)
    },
    {
      title: 'Is_public',
      dataIndex: 'is_public',
      align:'center',
      key: 'is_public',

    },
    {
      title: 'Is_protected',
      dataIndex: 'is_protected',
      align:'center',
      key: 'is_protected',

    },
    {
      title: 'Has_public_posts',
      dataIndex: 'has_public_posts',
      align:'center',
      key: 'has_public_posts',

    },
    {
      title: 'Number_of_pages',
      dataIndex: 'number_of_pages',
      align:'center',
      key: 'number_of_pages',

      sorter: (a, b) => a.number_of_pages - b.number_of_pages
    },
    {
      title: 'Canonical',
      dataIndex: 'canonical',
      align:'center',
      key: 'canonical',

      sorter: (a, b) =>  +(a.canonical > b.canonical)- +(a.canonical < b.canonical)
    },
    {
      title: 'Primary_focus_keyword',
      dataIndex: 'primary_focus_keyword',
      align:'center',
      key: 'primary_focus_keyword',

      sorter: (a, b) =>  +(a.primary_focus_keyword > b.primary_focus_keyword)- +(a.primary_focus_keyword < b.primary_focus_keyword)
    },
    {
      title: 'Primary_focus_keyword_score',
      dataIndex: 'primary_focus_keyword_score',
      align:'center',
      key: 'primary_focus_keyword_score',

      sorter: (a, b) => a.primary_focus_keyword_score - b.primary_focus_keyword_score
    },
    {
      title: 'Readability_score',
      dataIndex: 'readability_score',
      align:'center',
      key: 'readability_score',

      sorter: (a, b) => a.readability_score - b.readability_score
    },
    {
      title: 'Is_cornerstone',
      dataIndex: 'is_cornerstone',
      align:'center',
      key: 'is_cornerstone',

    },
    {
      title: 'Is_robots_noindex',
      dataIndex: 'is_robots_noindex',
      align:'center',
      key: 'is_robots_noindex',

    },
    {
      title: 'Is_robots_nofollow',
      dataIndex: 'is_robots_nofollow',
      align:'center',
      key: 'is_robots_nofollow',

    },
    {
      title: 'Is_robots_noarchive',
      dataIndex: 'is_robots_noarchive',
      align:'center',
      key: 'is_robots_noarchive',

    },
    {
      title: 'Is_robots_noimageindex',
      dataIndex: 'is_robots_noimageindex',
      align:'center',
      key: 'is_robots_noimageindex',

    },
    {
      title: 'Is_robots_nosnippet',
      dataIndex: 'is_robots_nosnippet',
      align:'center',
      key: 'is_robots_nosnippet',

    },
    {
      title: 'Twitter_title',
      dataIndex: 'twitter_title',
      align:'center',
      key: 'twitter_title',

      sorter: (a, b) =>  +(a.twitter_title > b.twitter_title)- +(a.twitter_title < b.twitter_title)
    },
    {
      title: 'Twitter_image',
      dataIndex: 'twitter_image',
      align:'center',
      key: 'twitter_image',

      sorter: (a, b) =>  +(a.twitter_image > b.twitter_image)- +(a.twitter_image < b.twitter_image)
    },
    {
      title: 'Twitter_description',
      dataIndex: 'twitter_description',
      align:'center',
      key: 'twitter_description',

      sorter: (a, b) =>  +(a.twitter_description > b.twitter_description)- +(a.twitter_description < b.twitter_description)
    },
    {
      title: 'Twitter_image_id',
      dataIndex: 'twitter_image_id',
      align:'center',
      key: 'twitter_image_id',

      sorter: (a, b) =>  +(a.twitter_image_id > b.twitter_image_id)- +(a.twitter_image_id < b.twitter_image_id)
    },
    {
      title: 'Twitter_image_source',
      dataIndex: 'twitter_image_source',
      align:'center',
      key: 'twitter_image_source',

      sorter: (a, b) =>  +(a.twitter_image_source > b.twitter_image_source)- +(a.twitter_image_source < b.twitter_image_source)
    },
    {
      title: 'Open_graph_title',
      dataIndex: 'open_graph_title',
      align:'center',
      key: 'open_graph_title',

      sorter: (a, b) =>  +(a.open_graph_title > b.open_graph_title)- +(a.open_graph_title < b.open_graph_title)
    },
    {
      title: 'Open_graph_description',
      dataIndex: 'open_graph_description',
      align:'center',
      key: 'open_graph_description',

      sorter: (a, b) =>  +(a.open_graph_description > b.open_graph_description)- +(a.open_graph_description < b.open_graph_description)
    },
    {
      title: 'Open_graph_image',
      dataIndex: 'open_graph_image',
      align:'center',
      key: 'open_graph_image',

      sorter: (a, b) =>  +(a.open_graph_image > b.open_graph_image)- +(a.open_graph_image < b.open_graph_image)
    },
    {
      title: 'Open_graph_image_id',
      dataIndex: 'open_graph_image_id',
      align:'center',
      key: 'open_graph_image_id',

      sorter: (a, b) =>  +(a.open_graph_image_id > b.open_graph_image_id)- +(a.open_graph_image_id < b.open_graph_image_id)
    },
    {
      title: 'Open_graph_image_source',
      dataIndex: 'open_graph_image_source',
      align:'center',
      key: 'open_graph_image_source',

      sorter: (a, b) =>  +(a.open_graph_image_source > b.open_graph_image_source)- +(a.open_graph_image_source < b.open_graph_image_source)
    },
    {
      title: 'Open_graph_image_meta',
      dataIndex: 'open_graph_image_meta',
      align:'center',
      key: 'open_graph_image_meta',

      sorter: (a, b) =>  +(a.open_graph_image_meta > b.open_graph_image_meta)- +(a.open_graph_image_meta < b.open_graph_image_meta)
    },
    {
      title: 'Link_count',
      dataIndex: 'link_count',
      align:'center',
      key: 'link_count',

      sorter: (a, b) => a.link_count - b.link_count
    },
    {
      title: 'Incoming_link_count',
      dataIndex: 'incoming_link_count',
      align:'center',
      key: 'incoming_link_count',

      sorter: (a, b) => a.incoming_link_count - b.incoming_link_count
    },
    {
      title: 'Prominent_words_version',
      dataIndex: 'prominent_words_version',
      align:'center',
      key: 'prominent_words_version',

      sorter: (a, b) => a.prominent_words_version - b.prominent_words_version
    },
    {
      title: 'Blog_id',
      dataIndex: 'blog_id',
      align:'center',
      key: 'blog_id',

      sorter: (a, b) => a.blog_id - b.blog_id
    },
    {
      title: 'Language',
      dataIndex: 'language',
      align:'center',
      key: 'language',

      sorter: (a, b) =>  +(a.language > b.language)- +(a.language < b.language)
    },
    {
      title: 'Region',
      dataIndex: 'region',
      align:'center',
      key: 'region',

      sorter: (a, b) =>  +(a.region > b.region)- +(a.region < b.region)
    },
    {
      title: 'Schema_page_type',
      dataIndex: 'schema_page_type',
      align:'center',
      key: 'schema_page_type',

      sorter: (a, b) =>  +(a.schema_page_type > b.schema_page_type)- +(a.schema_page_type < b.schema_page_type)
    },
    {
      title: 'Schema_article_type',
      dataIndex: 'schema_article_type',
      align:'center',
      key: 'schema_article_type',

      sorter: (a, b) =>  +(a.schema_article_type > b.schema_article_type)- +(a.schema_article_type < b.schema_article_type)
    },
    {
      title: 'Has_ancestors',
      dataIndex: 'has_ancestors',
      align:'center',
      key: 'has_ancestors',

    },
    {
      title: 'Estimated_reading_time_minutes',
      dataIndex: 'estimated_reading_time_minutes',
      align:'center',
      key: 'estimated_reading_time_minutes',

      sorter: (a, b) => a.estimated_reading_time_minutes - b.estimated_reading_time_minutes
    },
    {
      title: 'Version',
      dataIndex: 'version',
      align:'center',
      key: 'version',

      sorter: (a, b) => a.version - b.version
    },
    {
      title: 'Object_last_modified',
      dataIndex: 'object_last_modified',
      align:'center',
      key: 'object_last_modified',

      sorter: (a, b) => a.object_last_modified - b.object_last_modified
    },
    {
      title: 'Object_published_at',
      dataIndex: 'object_published_at',
      align:'center',
      key: 'object_published_at',

      sorter: (a, b) => a.object_published_at - b.object_published_at
    },
    {
      title: 'Inclusive_language_score',
      dataIndex: 'inclusive_language_score',
      align:'center',
      key: 'inclusive_language_score',

      sorter: (a, b) => a.inclusive_language_score - b.inclusive_language_score
    },
    {
      title: 'Acciones',
      key: '_action',
      fixed: 'right',
      width: '5%',
      scopedSlots: {
        customRender: '_action'
      }
    }
  ] as ColumnType[];
