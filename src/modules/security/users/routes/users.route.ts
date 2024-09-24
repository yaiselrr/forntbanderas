// import authGuard from './authGuard';
import authGuard from '@/core/guards/authGuardUsers.js'
import authGuardAllUsers from '@/core/guards/authGuardAllUsers.js'

export default [
    {
        path: '/security/all',
        name: 'all_list',
        layout: ['*'],
        component:()=> import('~m/security/users/views/list/UsersClientsDealersList.vue'),
        beforeEnter: authGuardAllUsers
    },
    {
        path: '/security/users',
        name: 'users_list',
        layout: ['*'],
        component:()=> import('~m/security/users/views/list/UsersList.vue'),
        beforeEnter: authGuard
    },
    {
        path: '/security/users/create',
        name: 'users_create',
        layout: ['*'],
        component:()=> import('~m/security/users/views/form/UsersFormPage.vue'),
        beforeEnter: authGuard
    },
    {
        path: '/security/users/update/:id',
        name: 'users_update/:id',
        layout: ['*'],
        component:()=> import('~m/security/users/views/form/UsersFormPage.vue'),
        beforeEnter: authGuard
    },
]
