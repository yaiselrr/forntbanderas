import accessSystemGuard from '~co/guards/authGuardOrders.js'

export default [
  {
    path: '/manage/orders',
    name: 'orders_list',
    layout: ['*'],
    component: () => import('~m/manage/orders/views/list/OrdersList.vue')
  },
  {
    path: '/manage/orders/create',
    name: 'orders_create',
    layout: ['*'],
    component: () => import('~m/manage/orders/views/form/OrdersFormPage.vue'),
    beforeEnter: accessSystemGuard
  },
  {
    path: '/manage/orders/update/:id',
    name: 'orders_update/:id',
    layout: ['*'],
    component: () => import('~m/manage/orders/views/form/OrdersFormPage.vue'),
    beforeEnter: accessSystemGuard
  }
]
