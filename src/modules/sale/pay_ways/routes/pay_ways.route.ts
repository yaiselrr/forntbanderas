import accessSystemGuard from '~co/guards/authGuardPaysWays.js'

export default [
    {
        path: '/sale/pay_ways',
        name: 'pay_ways_list',
        layout: ['*'],
        component:()=> import('~m/sale/pay_ways/views/list/Pay_waysList.vue'),
        beforeEnter: accessSystemGuard
    },
    {
        path: '/sale/pay_ways/create',
        name: 'pay_ways_create',
        layout: ['*'],
        component:()=> import('~m/sale/pay_ways/views/form/Pay_waysFormPage.vue'),
        beforeEnter: accessSystemGuard
    },
    {
        path: '/sale/pay_ways/update/:id',
        name: 'pay_ways_update/:id',
        layout: ['*'],
        component:()=> import('~m/sale/pay_ways/views/form/Pay_waysFormPage.vue'),
        beforeEnter: accessSystemGuard
    },
]
