import accessSystemGuard from '~co/guards/authGuardKeysWords.js'

export default [
    {
        path: '/manage/key_words',
        name: 'key_words_list',
        layout: ['*'],
        component:()=> import('~m/manage/key_words/views/list/Key_wordsList.vue'),
        beforeEnter: accessSystemGuard
    },
    {
        path: '/manage/key_words/create',
        name: 'key_words_create',
        layout: ['*'],
        component:()=> import('~m/manage/key_words/views/form/Key_wordsFormPage.vue'),
        beforeEnter: accessSystemGuard
    },
    {
        path: '/manage/key_words/update/:id',
        name: 'key_words_update/:id',
        layout: ['*'],
        component:()=> import('~m/manage/key_words/views/form/Key_wordsFormPage.vue'),
        beforeEnter: accessSystemGuard
    },
]
