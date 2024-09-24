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
      title: 'Attribute',
      dataIndex: 'attribute.name',
      align:'center',
      key: 'attribute.name',
      customRender(item){
        return item.record.attribute?.name
      },
      sorter: (a, b) =>  a.attribute && b.attribute?(a.attribute.name > b.attribute.name)-(a.attribute.name < b.attribute.name):0
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
