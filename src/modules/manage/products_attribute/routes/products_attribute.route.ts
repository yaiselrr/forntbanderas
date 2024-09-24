export default [
    {
        path: '/manage/products_attribute',
        name: 'products_attribute_list',
        layout: ['*'],
        component:()=> import('~m/manage/products_attribute/views/list/Products_attributeList.vue'),
    },
    {
        path: '/manage/products_attribute/create',
        name: 'products_attribute_create',
        layout: ['*'],
        component:()=> import('~m/manage/products_attribute/views/form/Products_attributeFormPage.vue'),
    },
    {
        path: '/manage/products_attribute/update/:id',
        name: 'products_attribute_update/:id',
        layout: ['*'],
        component:()=> import('~m/manage/products_attribute/views/form/Products_attributeFormPage.vue'),
    },
]
