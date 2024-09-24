export default [
    {
        path: '/masters/types',
        name: 'types_list',
        layout: ['*'],
        component:()=> import('~m/masters/types/views/list/TypesList.vue'),
    },
    {
        path: '/masters/types/create',
        name: 'types_create',
        layout: ['*'],
        component:()=> import('~m/masters/types/views/form/TypesFormPage.vue'),
    },
    {
        path: '/masters/types/update/:id',
        name: 'types_update/:id',
        layout: ['*'],
        component:()=> import('~m/masters/types/views/form/TypesFormPage.vue'),
    },
]
