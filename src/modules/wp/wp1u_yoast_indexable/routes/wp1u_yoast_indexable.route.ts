export default [
    {
        path: '/wp/wp1u_yoast_indexable',
        name: 'wp1u_yoast_indexable_list',
        layout: ['*'],
        component:()=> import('~m/wp/wp1u_yoast_indexable/views/list/Wp1u_yoast_indexableList.vue'),
    },
    {
        path: '/wp/wp1u_yoast_indexable/create',
        name: 'wp1u_yoast_indexable_create',
        layout: ['*'],
        component:()=> import('~m/wp/wp1u_yoast_indexable/views/form/Wp1u_yoast_indexableFormPage.vue'),
    },
    {
        path: '/wp/wp1u_yoast_indexable/update/:id',
        name: 'wp1u_yoast_indexable_update/:id',
        layout: ['*'],
        component:()=> import('~m/wp/wp1u_yoast_indexable/views/form/Wp1u_yoast_indexableFormPage.vue'),
    },
]
