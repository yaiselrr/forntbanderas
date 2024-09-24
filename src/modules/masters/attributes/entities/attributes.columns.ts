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
      title: 'Tipo',
      dataIndex: 'type',
      align:'center',
      key: 'type',

      sorter: (a, b) =>  +(a.type > b.type)- +(a.type < b.type)
    },
    {
      title: 'Estructura',
      dataIndex: 'strcuture',
      align:'center',
      key: 'strcuture',

      sorter: (a, b) =>  +(a.strcuture > b.strcuture)- +(a.strcuture < b.strcuture)
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
