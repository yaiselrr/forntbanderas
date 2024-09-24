import {ColumnType} from "ant-design-vue/es/table"
  export const columns:ColumnType[] = [
    {
      title: 'Post_id',
      dataIndex: 'post_id',
      align:'center',
      key: 'post_id',

      sorter: (a, b) => a.post_id - b.post_id
    },
    {
      title: 'Meta_key',
      dataIndex: 'meta_key',
      align:'center',
      key: 'meta_key',

      sorter: (a, b) =>  +(a.meta_key > b.meta_key)- +(a.meta_key < b.meta_key)
    },
    {
      title: 'Meta_value',
      dataIndex: 'meta_value',
      align:'center',
      key: 'meta_value',

      sorter: (a, b) =>  +(a.meta_value > b.meta_value)- +(a.meta_value < b.meta_value)
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
