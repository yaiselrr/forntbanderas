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
      title: 'Orden de producto',
      dataIndex: 'product_order.id',
      align:'center',
      key: 'product_order.id',
      customRender(item){
        return item.record.product_order?.id
      },
      sorter: (a, b) => a.product_order && b.product_order?a.product_order.id - b.product_order.id:0
    },
    {
      title: 'Monto',
      dataIndex: 'amount',
      align:'center',
      key: 'amount',

      sorter: (a, b) => a.amount - b.amount
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
