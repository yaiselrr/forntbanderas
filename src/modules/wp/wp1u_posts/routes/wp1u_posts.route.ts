export default [
    {
        path: '/wp/wp1u_posts',
        name: 'wp1u_posts_list',
        layout: ['*'],
        component:()=> import('~m/wp/wp1u_posts/views/list/Wp1u_postsList.vue'),
    },
    {
        path: '/wp/wp1u_posts/create',
        name: 'wp1u_posts_create',
        layout: ['*'],
        component:()=> import('~m/wp/wp1u_posts/views/form/Wp1u_postsFormPage.vue'),
    },
    {
        path: '/wp/wp1u_posts/update/:id',
        name: 'wp1u_posts_update/:id',
        layout: ['*'],
        component:()=> import('~m/wp/wp1u_posts/views/form/Wp1u_postsFormPage.vue'),
    },
]
