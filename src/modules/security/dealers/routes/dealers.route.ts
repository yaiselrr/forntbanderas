import authGuard from '@/core/guards/authGuardDealers.js'

export default [
    {
        path: '/security/dealers',
        name: 'dealers_list',
        layout: ['*'],
        component:()=> import('~m/security/dealers/views/list/DealersList.vue'),
        beforeEnter: authGuard
    },
    {
        path: '/security/dealers/create',
        name: 'dealers_create',
        layout: ['*'],
        component:()=> import('~m/security/dealers/views/form/DealersFormPage.vue'),
        beforeEnter: authGuard
    },
    {
        path: '/security/dealers/update/:id',
        name: 'dealers_update/:id',
        layout: ['*'],
        component:()=> import('~m/security/dealers/views/form/DealersFormPage.vue'),
        beforeEnter: authGuard
    },
]
