import {ColumnType} from "ant-design-vue/es/table"
  export const columns:ColumnType[] = [
    {
      title: 'Configuraciones',
      dataIndex: 'settings',
      align:'center',
      key: 'settings',

      sorter: (a, b) =>  +(a.settings > b.settings)- +(a.settings < b.settings)
    },
    {
      title: 'Valor de configuraciones',
      dataIndex: 'settings_value',
      align:'center',
      key: 'settings_value',

      sorter: (a, b) =>  +(a.settings_value > b.settings_value)- +(a.settings_value < b.settings_value)
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
