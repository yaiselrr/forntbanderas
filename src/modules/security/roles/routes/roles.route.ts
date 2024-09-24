import authGuard from '@/core/guards/authGuardRoles.js'

export default [
    {
        path: '/security/roles',
        name: 'roles_list',
        layout: ['*'],
        component:()=> import('~m/security/roles/views/list/RolesList.vue'),
        beforeEnter: authGuard
    },
    {
        path: '/security/roles/create',
        name: 'roles_create',
        layout: ['*'],
        component:()=> import('~m/security/roles/views/form/RolesFormPage.vue'),
        beforeEnter: authGuard
    },
    {
        path: '/security/roles/update/:id',
        name: 'roles_update/:id',
        layout: ['*'],
        component:()=> import('~m/security/roles/views/form/RolesFormPage.vue'),
        beforeEnter: authGuard
    },
]
