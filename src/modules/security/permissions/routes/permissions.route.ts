import authGuard from '@/core/guards/authGuardPermissions.js'

export default [
    {
        path: '/security/permissions',
        name: 'permissions_list',
        layout: ['*'],
        component:()=> import('~m/security/permissions/views/list/PermissionsList.vue'),
        beforeEnter: authGuard
    },
    {
        path: '/security/permissions/create',
        name: 'permissions_create',
        layout: ['*'],
        component:()=> import('~m/security/permissions/views/form/PermissionsFormPage.vue'),
        beforeEnter: authGuard
    },
    {
        path: '/security/permissions/update/:id',
        name: 'permissions_update/:id',
        layout: ['*'],
        component:()=> import('~m/security/permissions/views/form/PermissionsFormPage.vue'),
        beforeEnter: authGuard
    },
]
