import {ColumnType} from "ant-design-vue/es/table"
  export const columns:ColumnType[] = [
    {
      title: 'Rol Padre',
      dataIndex: 'role_father.name',
      align:'center',
      key: 'role_father.name',
      customRender(item){
        return item.record.role_father?item.record.role_father?.name:'No tiene'
      },
      sorter: (a, b) =>  a.role_father && b.role_father?(a.role_father.name > b.role_father.name)-(a.role_father.name < b.role_father.name):0
    },
    {
      title: 'Name',
      dataIndex: 'name',
      align:'center',
      key: 'name',

      sorter: (a, b) =>  +(a.name > b.name)- +(a.name < b.name)
    },
    {
      title: 'Description',
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
