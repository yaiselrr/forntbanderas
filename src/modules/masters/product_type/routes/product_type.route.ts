import accessSystemGuard from '@/core/guards/authGuardProductTypes.js'

export default [
  {
    path: '/masters/product_type',
    name: 'product_type_list',
    layout: ['*'],
    component: () => import('~m/masters/product_type/views/list/Product_typeList.vue'),
    beforeEnter: accessSystemGuard
  },
  {
    path: '/masters/product_type/create',
    name: 'product_type_create',
    layout: ['*'],
    component: () => import('~m/masters/product_type/views/form/Product_typeFormPage.vue'),
    beforeEnter: accessSystemGuard
  },
  {
    path: '/masters/product_type/update/:id',
    name: 'product_type_update/:id',
    layout: ['*'],
    component: () => import('~m/masters/product_type/views/form/Product_typeFormPage.vue'),
    beforeEnter: accessSystemGuard
  }
]
