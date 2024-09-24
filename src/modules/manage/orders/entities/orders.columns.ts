import {ColumnType} from "ant-design-vue/es/table"
  export const columns:ColumnType[] = [
    {
      title: 'Código',
      dataIndex: 'code',
      align:'center',
      key: 'code',

      sorter: (a, b) =>  +(a.code > b.code)- +(a.code < b.code)
    },
    {
      title: 'Teléfono',
      dataIndex: 'phone',
      align:'center',
      key: 'phone',

      sorter: (a, b) =>  +(a.phone > b.phone)- +(a.phone < b.phone)
    },
    {
      title: 'Dirección',
      dataIndex: 'address',
      align:'center',
      key: 'address',

      sorter: (a, b) =>  +(a.address > b.address)- +(a.address < b.address)
    },
    {
      title: 'Precio',
      dataIndex: 'price',
      align:'center',
      key: 'price',

    },
    {
      title: 'Observaciones',
      dataIndex: 'observations',
      align:'center',
      key: 'observations',

      sorter: (a, b) =>  +(a.observations > b.observations)- +(a.observations < b.observations)
    },
    {
      title: 'Estado de solicitud',
      dataIndex: 'request_status.name',
      align:'center',
      key: 'request_status.name',
      customRender(item){
        return item.record.request_status?.name
      },
      sorter: (a, b) =>  a.request_status && b.request_status?(a.request_status.name > b.request_status.name)-(a.request_status.name < b.request_status.name):0
    },
    {
      title: 'Forma de pago',
      dataIndex: 'pay_way.name',
      align:'center',
      key: 'pay_way.name',
      customRender(item){
        return item.record.pay_way?.name
      },
      sorter: (a, b) =>  a.pay_way && b.pay_way?(a.pay_way.name > b.pay_way.name)-(a.pay_way.name < b.pay_way.name):0
    },
    {
      title: 'Fecha de envío',
      dataIndex: 'delivery_date',
      align:'center',
      key: 'delivery_date',

      sorter: (a, b) => a.delivery_date - b.delivery_date
    },
    {
      title: 'Fecha del pedido',
      dataIndex: 'requested_date',
      align:'center',
      key: 'requested_date',

      sorter: (a, b) => a.requested_date - b.requested_date
    },
    {
      title: 'Cancelado en',
      dataIndex: 'cancelled_at',
      align:'center',
      key: 'cancelled_at',

      sorter: (a, b) => a.cancelled_at - b.cancelled_at
    },
    {
      title: 'Cancelado por',
      dataIndex: 'cancelled_by.name',
      align:'center',
      key: 'cancelled_by.name',
      customRender(item){
        return item.record.cancelled_by?.name
      },
      sorter: (a, b) =>  a.cancelled_by && b.cancelled_by?(a.cancelled_by.name > b.cancelled_by.name)-(a.cancelled_by.name < b.cancelled_by.name):0
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
