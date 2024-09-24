export default [
    {
        path: '/manage/product_category',
        name: 'product_category_list',
        layout: ['*'],
        component:()=> import('~m/manage/product_category/views/list/Product_categoryList.vue'),
    },
    {
        path: '/manage/product_category/create',
        name: 'product_category_create',
        layout: ['*'],
        component:()=> import('~m/manage/product_category/views/form/Product_categoryFormPage.vue'),
    },
    {
        path: '/manage/product_category/update/:id',
        name: 'product_category_update/:id',
        layout: ['*'],
        component:()=> import('~m/manage/product_category/views/form/Product_categoryFormPage.vue'),
    },
]
