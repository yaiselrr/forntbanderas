import accessSystemGuard from '~co/guards/authGuardSettings.js'

export default [
  {
    path: '/settings/settings',
    name: 'settings_list',
    layout: ['*'],
    component: () => import('~m/settings/settings/views/list/SettingsList.vue'),
    beforeEnter: accessSystemGuard
  },
  {
    path: '/settings/settings/create',
    name: 'settings_create',
    layout: ['*'],
    component: () => import('~m/settings/settings/views/form/SettingsFormPage.vue'),
    beforeEnter: accessSystemGuard
  },
  {
    path: '/settings/settings/update/:id',
    name: 'settings_update/:id',
    layout: ['*'],
    component: () => import('~m/settings/settings/views/form/SettingsFormPage.vue'),
    beforeEnter: accessSystemGuard
  }
]
