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
      title: 'Año',
      dataIndex: 'year',
      align:'center',
      key: 'year',

      sorter: (a, b) => a.year - b.year
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
      title: 'Subtotal',
      dataIndex: 'subtotal',
      align:'center',
      key: 'subtotal',

    },
    {
      title: 'Total',
      dataIndex: 'total',
      align:'center',
      key: 'total',

    },
    {
      title: 'Forma de pago',
      dataIndex: 'pay_way',
      align:'center',
      key: 'pay_way',

      sorter: (a, b) =>  +(a.pay_way > b.pay_way)- +(a.pay_way < b.pay_way)
    },
    {
      title: 'Observaciones',
      dataIndex: 'observations',
      align:'center',
      key: 'observations',

      sorter: (a, b) =>  +(a.observations > b.observations)- +(a.observations < b.observations)
    },
    {
      title: 'Fecha factura',
      dataIndex: 'invoice_date',
      align:'center',
      key: 'invoice_date',

      sorter: (a, b) => a.invoice_date - b.invoice_date
    },
    {
      title: 'Órdenes',
      dataIndex: 'order.code',
      align:'center',
      key: 'order.code',
      customRender(item){
        return item.record.order?.code
      },
      sorter: (a, b) =>  a.order && b.order?(a.order.code > b.order.code)-(a.order.code < b.order.code):0
    },
    {
      title: 'Prefijo',
      dataIndex: 'prefix',
      align:'center',
      key: 'prefix',

      sorter: (a, b) =>  +(a.prefix > b.prefix)- +(a.prefix < b.prefix)
    },
    {
      title: 'Descuento',
      dataIndex: 'discount',
      align:'center',
      key: 'discount',

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
      dataIndex: 'cancelled_by',
      align:'center',
      key: 'cancelled_by',

      sorter: (a, b) => a.cancelled_by - b.cancelled_by
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
