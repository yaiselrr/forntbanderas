import accessSystemGuard from '~co/guards/authGuardClients.js'

export default [
    {
        path: '/manage/client',
        name: 'client_list',
        layout: ['*'],
        component:()=> import('~m/manage/client/views/list/ClientList.vue'),
    },
    {
        path: '/manage/client/create',
        name: 'client_create',
        layout: ['*'],
        component:()=> import('~m/manage/client/views/form/ClientFormPage.vue'),
        beforeEnter: accessSystemGuard
    },
    {
        path: '/manage/client/update/:id',
        name: 'client_update/:id',
        layout: ['*'],
        component:()=> import('~m/manage/client/views/form/ClientFormPage.vue'),
        beforeEnter: accessSystemGuard
    },
]
