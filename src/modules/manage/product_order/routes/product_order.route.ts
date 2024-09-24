export default [
    {
        path: '/manage/product_order',
        name: 'product_order_list',
        layout: ['*'],
        component:()=> import('~m/manage/product_order/views/list/Product_orderList.vue'),
    },
    {
        path: '/manage/product_order/create',
        name: 'product_order_create',
        layout: ['*'],
        component:()=> import('~m/manage/product_order/views/form/Product_orderFormPage.vue'),
    },
    {
        path: '/manage/product_order/update/:id',
        name: 'product_order_update/:id',
        layout: ['*'],
        component:()=> import('~m/manage/product_order/views/form/Product_orderFormPage.vue'),
    },
]
