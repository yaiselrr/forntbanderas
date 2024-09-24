export default [
    {
        path: '/wp/wp1u_postmeta',
        name: 'wp1u_postmeta_list',
        layout: ['*'],
        component:()=> import('~m/wp/wp1u_postmeta/views/list/Wp1u_postmetaList.vue'),
    },
    {
        path: '/wp/wp1u_postmeta/create',
        name: 'wp1u_postmeta_create',
        layout: ['*'],
        component:()=> import('~m/wp/wp1u_postmeta/views/form/Wp1u_postmetaFormPage.vue'),
    },
    {
        path: '/wp/wp1u_postmeta/update/:id',
        name: 'wp1u_postmeta_update/:id',
        layout: ['*'],
        component:()=> import('~m/wp/wp1u_postmeta/views/form/Wp1u_postmetaFormPage.vue'),
    },
]
