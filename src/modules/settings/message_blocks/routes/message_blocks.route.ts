import accessSystemGuard from '~co/guards/authGuardMessagesBlocks.js'

export default [
  {
    path: '/settings/message_blocks',
    name: 'message_blocks_list',
    layout: ['*'],
    component: () => import('~m/settings/message_blocks/views/list/Message_blocksList.vue'),
    beforeEnter: accessSystemGuard
  },
  {
    path: '/settings/message_blocks/create',
    name: 'message_blocks_create',
    layout: ['*'],
    component: () => import('~m/settings/message_blocks/views/form/Message_blocksFormPage.vue'),
    beforeEnter: accessSystemGuard
  },
  {
    path: '/settings/message_blocks/update/:id',
    name: 'message_blocks_update/:id',
    layout: ['*'],
    component: () => import('~m/settings/message_blocks/views/form/Message_blocksFormPage.vue'),
    beforeEnter: accessSystemGuard
  }
]
