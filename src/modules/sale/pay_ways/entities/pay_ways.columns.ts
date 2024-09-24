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
      title: 'Instructions',
      dataIndex: 'instructions',
      align:'center',
      key: 'instructions',

      sorter: (a, b) =>  +(a.instructions > b.instructions)- +(a.instructions < b.instructions)
    },
    {
      title: 'Acciones',
      key: '_action',
      fixed: 'right',
      scopedSlots: {
        customRender: '_action'
      }
    }
  ] as ColumnType[];
