import {createRouter, createWebHistory} from 'vue-router'
import getRoutes from '~h/loaders/router.load'
import {siteStore} from "~cf/store/site.store"

const requireModule: any = import.meta.glob('/src/themes/admin/**/*.route.ts', {eager: true})
const router_array = getRoutes(requireModule)

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        ...router_array
    ]
})

router.beforeEach((to, from) => {
    const site = siteStore()
    site.loading=true
    return true
})
router.afterEach(() => {
    const site = siteStore()
    site.loading=false
    return true
})
export default router

