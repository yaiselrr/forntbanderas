import accessSystemGuard from '~co/guards/authGuardProducts.js'

export default [
  {
    path: '/manage/products',
    name: 'products_list',
    layout: ['*'],
    component: () => import('~m/manage/products/views/list/ProductsList.vue')
  },
  {
    path: '/manage/products/create',
    name: 'products_create',
    layout: ['*'],
    component: () => import('~m/manage/products/views/form/ProductsFormPage.vue'),
    beforeEnter: accessSystemGuard
  },
  {
    path: '/manage/products/update/:id',
    name: 'products_update/:id',
    layout: ['*'],
    component: () => import('~m/manage/products/views/form/ProductsFormPage.vue'),
    beforeEnter: accessSystemGuard
  }
]
