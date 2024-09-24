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
      title: 'Decription',
      dataIndex: 'decription',
      align:'center',
      key: 'decription',

      sorter: (a, b) =>  +(a.decription > b.decription)- +(a.decription < b.decription)
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
