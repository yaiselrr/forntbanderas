import { ColumnType } from 'ant-design-vue/es/table'
export const columns: ColumnType[] = [
  {
    title: 'Código',
    dataIndex: 'code',
    align: 'center',
    key: 'code',

    sorter: (a, b) => +(a.code > b.code) - +(a.code < b.code)
  },
  {
    title: 'Tipo',
    dataIndex: 'type.name',
    align: 'center',
    key: 'type.name',
    customRender(item) {
      return item.record.type?.name
    },

    sorter: (a, b) =>
      a.type && b.type ? (a.type.name > b.type.name) - (a.type.name < b.type.name) : 0
  },
  {
    title: 'Valor de Cupón',
    dataIndex: 'coupon_value',
    align: 'center',
    key: 'coupon_value',

    sorter: (a, b) => +(a.coupon_value > b.coupon_value) - +(a.coupon_value < b.coupon_value)
  },
  {
    title: 'Cantidad disponible',
    dataIndex: 'available_quantity',
    align: 'center',
    key: 'available_quantity',

    sorter: (a, b) =>
      +(a.available_quantity > b.available_quantity) -
      +(a.available_quantity < b.available_quantity)
  },
  {
    title: 'Fecha Inicio',
    dataIndex: 'start_date',
    align: 'center',
    key: 'start_date',

    sorter: (a, b) => +(a.start_date > b.start_date) - +(a.start_date < b.start_date)
  },
  {
    title: 'Fecha Fin',
    dataIndex: 'end_date',
    align: 'center',
    key: 'end_date',

    sorter: (a, b) => +(a.end_date > b.end_date) - +(a.end_date < b.end_date)
  },
  {
    title: 'Condiciones',
    dataIndex: 'conditions',
    align: 'center',
    key: 'conditions',

    sorter: (a, b) => +(a.conditions > b.conditions) - +(a.conditions < b.conditions)
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
] as ColumnType[]
