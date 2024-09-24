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
      title: 'Correo',
      dataIndex: 'email',
      align:'center',
      key: 'email',

      sorter: (a, b) =>  +(a.email > b.email)- +(a.email < b.email)
    },
    {
      title: 'Dirección',
      dataIndex: 'addresses',
      align:'center',
      key: 'addresses',

      sorter: (a, b) =>  +(a.addresses > b.addresses)- +(a.addresses < b.addresses)
    },
    {
      title: 'Teléfonos',
      dataIndex: 'phones',
      align:'center',
      key: 'phones',

      sorter: (a, b) =>  +(a.phones > b.phones)- +(a.phones < b.phones)
    },
    {
      title: 'Role',
      dataIndex: 'role.name',
      align:'center',
      key: 'role.name',
      customRender(item){
        return item.record.role?.name
      },
      sorter: (a, b) =>  a.role && b.role?(a.role.name > b.role.name)-(a.role.name < b.role.name):0
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
