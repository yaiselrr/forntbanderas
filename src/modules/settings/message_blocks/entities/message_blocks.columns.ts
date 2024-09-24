import {ColumnType} from "ant-design-vue/es/table"
  export const columns:ColumnType[] = [
    {
      title: 'Name',
      dataIndex: 'name',
      align:'center',
      key: 'name',

      sorter: (a, b) =>  +(a.name > b.name)- +(a.name < b.name)
    },
    {
      title: 'Color',
      dataIndex: 'color',
      align:'center',
      key: 'color',

      sorter: (a, b) =>  +(a.name > b.name)- +(a.name < b.name)
    },
    {
      title: 'Mensaje de Texto',
      dataIndex: 'message_text',
      align:'center',
      key: 'message_text',

      sorter: (a, b) =>  +(a.message_text > b.message_text)- +(a.message_text < b.message_text)
    },
    {
      title: 'Image',
      dataIndex: 'block_image',
      align:'center',
      key: 'block_image',

      sorter: (a, b) =>  +(a.block_image > b.block_image)- +(a.block_image < b.block_image)
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
