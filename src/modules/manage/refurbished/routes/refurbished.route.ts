import accessSystemGuard from '~co/guards/authGuardRefurbished.js'

export default [
    {
        path: '/manage/refurbished',
        name: 'refurbished_list',
        layout: ['*'],
        component:()=> import('~m/manage/refurbished/views/list/RefurbishedList.vue'),
    },
    {
        path: '/manage/refurbished/create',
        name: 'refurbished_create',
        layout: ['*'],
        component:()=> import('~m/manage/refurbished/views/form/RefurbishedFormPage.vue'),
        beforeEnter: accessSystemGuard
    },
    {
        path: '/manage/refurbished/update/:id',
        name: 'refurbished_update/:id',
        layout: ['*'],
        component:()=> import('~m/manage/refurbished/views/form/RefurbishedFormPage.vue'),
        beforeEnter: accessSystemGuard
    },
]
