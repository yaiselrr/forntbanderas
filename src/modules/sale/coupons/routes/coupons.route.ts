import accessSystemGuard from '~co/guards/authGuardCoupons.js'

export default [
    {
        path: '/sale/coupons',
        name: 'coupons_list',
        layout: ['*'],
        component:()=> import('~m/sale/coupons/views/list/CouponsList.vue'),
    },
    {
        path: '/sale/coupons/create',
        name: 'coupons_create',
        layout: ['*'],
        component:()=> import('~m/sale/coupons/views/form/CouponsFormPage.vue'),
        beforeEnter: accessSystemGuard
    },
    {
        path: '/sale/coupons/update/:id',
        name: 'coupons_update/:id',
        layout: ['*'],
        component:()=> import('~m/sale/coupons/views/form/CouponsFormPage.vue'),
        beforeEnter: accessSystemGuard
    },
]
