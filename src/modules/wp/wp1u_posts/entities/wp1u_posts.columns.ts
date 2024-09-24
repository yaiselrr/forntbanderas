import {ColumnType} from "ant-design-vue/es/table"
  export const columns:ColumnType[] = [
    {
      title: 'Post_author',
      dataIndex: 'post_author',
      align:'center',
      key: 'post_author',

      sorter: (a, b) => a.post_author - b.post_author
    },
    {
      title: 'Post_date',
      dataIndex: 'post_date',
      align:'center',
      key: 'post_date',

      sorter: (a, b) => a.post_date - b.post_date
    },
    {
      title: 'Post_date_gmt',
      dataIndex: 'post_date_gmt',
      align:'center',
      key: 'post_date_gmt',

      sorter: (a, b) => a.post_date_gmt - b.post_date_gmt
    },
    {
      title: 'Post_content',
      dataIndex: 'post_content',
      align:'center',
      key: 'post_content',

      sorter: (a, b) =>  +(a.post_content > b.post_content)- +(a.post_content < b.post_content)
    },
    {
      title: 'Post_title',
      dataIndex: 'post_title',
      align:'center',
      key: 'post_title',

      sorter: (a, b) =>  +(a.post_title > b.post_title)- +(a.post_title < b.post_title)
    },
    {
      title: 'Post_excerpt',
      dataIndex: 'post_excerpt',
      align:'center',
      key: 'post_excerpt',

      sorter: (a, b) =>  +(a.post_excerpt > b.post_excerpt)- +(a.post_excerpt < b.post_excerpt)
    },
    {
      title: 'Post_status',
      dataIndex: 'post_status',
      align:'center',
      key: 'post_status',

      sorter: (a, b) =>  +(a.post_status > b.post_status)- +(a.post_status < b.post_status)
    },
    {
      title: 'Comment_status',
      dataIndex: 'comment_status',
      align:'center',
      key: 'comment_status',

      sorter: (a, b) =>  +(a.comment_status > b.comment_status)- +(a.comment_status < b.comment_status)
    },
    {
      title: 'Ping_status',
      dataIndex: 'ping_status',
      align:'center',
      key: 'ping_status',

      sorter: (a, b) =>  +(a.ping_status > b.ping_status)- +(a.ping_status < b.ping_status)
    },
    {
      title: 'Post_password',
      dataIndex: 'post_password',
      align:'center',
      key: 'post_password',

      sorter: (a, b) =>  +(a.post_password > b.post_password)- +(a.post_password < b.post_password)
    },
    {
      title: 'Post_name',
      dataIndex: 'post_name',
      align:'center',
      key: 'post_name',

      sorter: (a, b) =>  +(a.post_name > b.post_name)- +(a.post_name < b.post_name)
    },
    {
      title: 'To_ping',
      dataIndex: 'to_ping',
      align:'center',
      key: 'to_ping',

      sorter: (a, b) =>  +(a.to_ping > b.to_ping)- +(a.to_ping < b.to_ping)
    },
    {
      title: 'Pinged',
      dataIndex: 'pinged',
      align:'center',
      key: 'pinged',

      sorter: (a, b) =>  +(a.pinged > b.pinged)- +(a.pinged < b.pinged)
    },
    {
      title: 'Post_modified',
      dataIndex: 'post_modified',
      align:'center',
      key: 'post_modified',

      sorter: (a, b) => a.post_modified - b.post_modified
    },
    {
      title: 'Post_modified_gmt',
      dataIndex: 'post_modified_gmt',
      align:'center',
      key: 'post_modified_gmt',

      sorter: (a, b) => a.post_modified_gmt - b.post_modified_gmt
    },
    {
      title: 'Post_content_filtered',
      dataIndex: 'post_content_filtered',
      align:'center',
      key: 'post_content_filtered',

      sorter: (a, b) =>  +(a.post_content_filtered > b.post_content_filtered)- +(a.post_content_filtered < b.post_content_filtered)
    },
    {
      title: 'Post_parent',
      dataIndex: 'post_parent',
      align:'center',
      key: 'post_parent',

      sorter: (a, b) => a.post_parent - b.post_parent
    },
    {
      title: 'Guid',
      dataIndex: 'guid',
      align:'center',
      key: 'guid',

      sorter: (a, b) =>  +(a.guid > b.guid)- +(a.guid < b.guid)
    },
    {
      title: 'Menu_order',
      dataIndex: 'menu_order',
      align:'center',
      key: 'menu_order',

      sorter: (a, b) => a.menu_order - b.menu_order
    },
    {
      title: 'Post_type',
      dataIndex: 'post_type',
      align:'center',
      key: 'post_type',

      sorter: (a, b) =>  +(a.post_type > b.post_type)- +(a.post_type < b.post_type)
    },
    {
      title: 'Post_mime_type',
      dataIndex: 'post_mime_type',
      align:'center',
      key: 'post_mime_type',

      sorter: (a, b) =>  +(a.post_mime_type > b.post_mime_type)- +(a.post_mime_type < b.post_mime_type)
    },
    {
      title: 'Comment_count',
      dataIndex: 'comment_count',
      align:'center',
      key: 'comment_count',

      sorter: (a, b) => a.comment_count - b.comment_count
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
