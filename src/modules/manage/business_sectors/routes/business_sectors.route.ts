import accessSystemGuard from '~co/guards/authGuardBusinessSectors.js'

export default [
    {
        path: '/manage/business_sectors',
        name: 'business_sectors_list',
        layout: ['*'],
        component:()=> import('~m/manage/business_sectors/views/list/Business_sectorsList.vue'),
        beforeEnter: accessSystemGuard
    },
    {
        path: '/manage/business_sectors/create',
        name: 'business_sectors_create',
        layout: ['*'],
        component:()=> import('~m/manage/business_sectors/views/form/Business_sectorsFormPage.vue'),
        beforeEnter: accessSystemGuard
    },
    {
        path: '/manage/business_sectors/update/:id',
        name: 'business_sectors_update/:id',
        layout: ['*'],
        component:()=> import('~m/manage/business_sectors/views/form/Business_sectorsFormPage.vue'),
        beforeEnter: accessSystemGuard
    },
]
