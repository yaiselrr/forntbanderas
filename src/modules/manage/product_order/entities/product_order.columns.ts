import { ColumnType } from 'ant-design-vue/es/table'
export const columns: ColumnType[] = [
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    align: 'center',
    key: 'quantity'
  },
  // {
  //   title: 'Format_product',
  //   dataIndex: 'format_product.code',
  //   align:'center',
  //   key: 'format_product.code',
  //   customRender(item){
  //     return item.record.format_product?.code
  //   },
  //   sorter: (a, b) =>  a.format_product && b.format_product?(a.format_product.code > b.format_product.code)-(a.format_product.code < b.format_product.code):0
  // },
  {
    title: 'Order',
    dataIndex: 'order.code',
    align: 'center',
    key: 'order.code',
    customRender(item) {
      return item.record.order?.code
    },
    sorter: (a, b) =>
      a.order && b.order ? (a.order.code > b.order.code) - (a.order.code < b.order.code) : 0
  },
  {
    title: 'Acciones',
    key: '_action',
    fixed: 'right',
    scopedSlots: {
      customRender: '_action'
    }
  }
] as ColumnType[]
