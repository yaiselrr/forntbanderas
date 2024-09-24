import {ColumnType} from "ant-design-vue/es/table"
  export const columns:ColumnType[] = [
    {
      title: 'Nombre',
      dataIndex: 'name',
      align:'center',
      key: 'name',

      sorter: (a, b) =>  +(a.name > b.name)- +(a.name < b.name)
    },
    {
      title: 'Descripción',
      dataIndex: 'description',
      align:'center',
      key: 'description',

      sorter: (a, b) =>  +(a.description > b.description)- +(a.description < b.description)
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
