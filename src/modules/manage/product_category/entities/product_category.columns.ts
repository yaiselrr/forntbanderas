import {ColumnType} from "ant-design-vue/es/table"
  export const columns:ColumnType[] = [
    {
      title: 'Product',
      dataIndex: 'product.name',
      align:'center',
      key: 'product.name',
      customRender(item){
        return item.record.product?.name
      },
      sorter: (a, b) =>  a.product && b.product?(a.product.name > b.product.name)-(a.product.name < b.product.name):0
    },
    {
      title: 'Category',
      dataIndex: 'category.name',
      align:'center',
      key: 'category.name',
      customRender(item){
        return item.record.category?.name
      },
      sorter: (a, b) =>  a.category && b.category?(a.category.name > b.category.name)-(a.category.name < b.category.name):0
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
