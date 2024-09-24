import accessSystemGuard from '~co/guards/authGuardInvoices.js'

export default [
    {
        path: '/manage/invoices',
        name: 'invoices_list',
        layout: ['*'],
        component:()=> import('~m/manage/invoices/views/list/InvoicesList.vue'),
    },
    {
        path: '/manage/invoices/create',
        name: 'invoices_create',
        layout: ['*'],
        component:()=> import('~m/manage/invoices/views/form/InvoicesFormPage.vue'),
        beforeEnter: accessSystemGuard
    },
    {
        path: '/manage/invoices/update/:id',
        name: 'invoices_update/:id',
        layout: ['*'],
        component:()=> import('~m/manage/invoices/views/form/InvoicesFormPage.vue'),
        beforeEnter: accessSystemGuard
    },
]
