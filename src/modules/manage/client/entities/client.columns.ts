import {ColumnType} from "ant-design-vue/es/table"
  export const columns:ColumnType[] = [
    {
      title: 'Code',
      dataIndex: 'code',
      align:'center',
      key: 'code',

      sorter: (a, b) =>  +(a.code > b.code)- +(a.code < b.code)
    },
    {
      title: 'Users',
      dataIndex: 'users.name',
      align:'center',
      key: 'users.name',
      customRender(item){
        return item.record.users?.name
      },
      sorter: (a, b) =>  a.users && b.users?(a.users.name > b.users.name)-(a.users.name < b.users.name):0
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
