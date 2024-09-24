import {ColumnType} from "ant-design-vue/es/table"
  export const columns:ColumnType[] = [
    {
      title: 'Imagen',
      dataIndex: 'image',
      align:'center',
      key: 'image',

      sorter: (a, b) =>  +(a.image > b.image)- +(a.image < b.image)
    },
    {
      title: 'Categoria',
      dataIndex: 'category.name',
      align:'center',
      key: 'category.name',
      customRender(item){
        return item.record.category?.name
      },
      sorter: (a, b) =>  a.category && b.category?(a.category.name > b.category.name)-(a.category.name < b.category.name):0
    },
    {
      title: 'Descripción',
      dataIndex: 'description',
      align:'center',
      key: 'description',

      sorter: (a, b) =>  +(a.description > b.description)- +(a.description < b.description)
    },
    {
      title: 'Nombre',
      dataIndex: 'name',
      align:'center',
      key: 'name',

      sorter: (a, b) =>  +(a.name > b.name)- +(a.name < b.name)
    },
    {
      title: 'Slug',
      dataIndex: 'slug',
      align:'center',
      key: 'slug',

      sorter: (a, b) =>  +(a.slug > b.slug)- +(a.slug < b.slug)
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
