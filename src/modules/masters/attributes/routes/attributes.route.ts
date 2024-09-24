import accessSystemGuard from '~co/guards/authGuardAttributes.js'

export default [
  {
    path: '/masters/attributes',
    name: 'attributes_list',
    layout: ['*'],
    component: () => import('~m/masters/attributes/views/list/AttributesList.vue'),
    beforeEnter: accessSystemGuard
  },
  {
    path: '/masters/attributes/create',
    name: 'attributes_create',
    layout: ['*'],
    component: () => import('~m/masters/attributes/views/form/AttributesForm.vue'),
    beforeEnter: accessSystemGuard
  },
  {
    path: '/masters/attributes/update/:id',
    name: 'attributes_update/:id',
    layout: ['*'],
    component: () => import('~m/masters/attributes/views/form/AttributesFormPage.vue'),
    beforeEnter: accessSystemGuard
  }
]
