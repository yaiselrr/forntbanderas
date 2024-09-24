import {ColumnType} from "ant-design-vue/es/table"
  export const columns:ColumnType[] = [
    {
      title: 'Permiso',
      dataIndex: 'label',
      align:'center',
      key: 'label',

      sorter: (a, b) =>  +(a.label > b.label)- +(a.label < b.label)
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
