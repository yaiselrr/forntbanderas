import accessSystemGuard from '~co/guards/authGuardCategories.js'

export default [
  {
    path: '/masters/categories',
    name: 'categories_list',
    layout: ['*'],
    component: () => import('~m/masters/categories/views/list/CategoriesList.vue'),
    beforeEnter: accessSystemGuard
  },
  {
    path: '/masters/categories/create',
    name: 'categories_create',
    layout: ['*'],
    component: () => import('~m/masters/categories/views/form/CategoriesFormPage.vue'),
    beforeEnter: accessSystemGuard
  },
  {
    path: '/masters/categories/update/:id',
    name: 'categories_update/:id',
    layout: ['*'],
    component: () => import('~m/masters/categories/views/form/CategoriesFormPage.vue'),
    beforeEnter: accessSystemGuard
  }
]
