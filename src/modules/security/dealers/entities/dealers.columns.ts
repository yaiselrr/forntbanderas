import { ColumnType } from 'ant-design-vue/es/table'
export const columns: ColumnType[] = [
  {
    title: 'Contacto',
    dataIndex: 'contact',
    align: 'center',
    key: 'contact',

    sorter: (a, b) => +(a.contact > b.contact) - +(a.contact < b.contact)
  },
  {
    title: 'Empresa',
    dataIndex: 'company',
    align: 'center',
    key: 'company',

    sorter: (a, b) => +(a.company > b.company) - +(a.company < b.company)
  },
  {
    title: 'CIF',
    dataIndex: 'cif',
    align: 'center',
    key: 'cif',

    sorter: (a, b) => +(a.cif > b.cif) - +(a.cif < b.cif)
  },
  {
    title: 'Correo de empresa',
    dataIndex: 'company_email',
    align: 'center',
    key: 'company_email',

    sorter: (a, b) => +(a.company_email > b.company_email) - +(a.company_email < b.company_email)
  },
  {
    title: 'Teléfono',
    dataIndex: 'phone',
    align: 'center',
    key: 'phone',

    sorter: (a, b) => +(a.phone > b.phone) - +(a.phone < b.phone)
  },
  {
    title: 'Página web',
    dataIndex: 'web_page',
    align: 'center',
    key: 'web_page',

    sorter: (a, b) => +(a.web_page > b.web_page) - +(a.web_page < b.web_page)
  },
  {
    title: 'Dirección',
    dataIndex: 'address',
    align: 'center',
    key: 'address',

    sorter: (a, b) => +(a.address > b.address) - +(a.address < b.address)
  },
  {
    title: 'Sector de negocios',
    dataIndex: 'business_sector.name',
    align: 'center',
    key: 'business_sector.name',
    customRender(item) {
      return item.record.business_sector?.name
    },
    // sorter: (a, b) => a.business_sector - b.business_sector
    sorter: (a, b) =>
      a.business_sector && b.business_sector
        ? (a.business_sector.name > b.business_sector.name) -
          (a.business_sector.name < b.business_sector.name)
        : 0
  },
  {
    title: 'Usuario',
    dataIndex: 'user.name',
    align: 'center',
    key: 'user.name',
    customRender(item) {
      return item.record.user?.name
    },
    // sorter: (a, b) => a.user_id - b.user_id
    sorter: (a, b) =>
      a.user && b.user ? (a.user.name > b.user.name) - (a.user.name < b.user.name) : 0
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
