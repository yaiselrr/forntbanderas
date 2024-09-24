import accessSystemGuard from '~co/guards/authGuardRequestStatuses.js'

export default [
  {
    path: '/masters/request_statuses',
    name: 'request_statuses_list',
    layout: ['*'],
    component: () => import('~m/masters/request_statuses/views/list/Request_statusesList.vue'),
    beforeEnter: accessSystemGuard
  },
  {
    path: '/masters/request_statuses/create',
    name: 'request_statuses_create',
    layout: ['*'],
    component: () => import('~m/masters/request_statuses/views/form/Request_statusesFormPage.vue'),
    beforeEnter: accessSystemGuard
  },
  {
    path: '/masters/request_statuses/update/:id',
    name: 'request_statuses_update/:id',
    layout: ['*'],
    component: () => import('~m/masters/request_statuses/views/form/Request_statusesFormPage.vue'),
    beforeEnter: accessSystemGuard
  }
]
