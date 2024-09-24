import getRoutes from "~h/loaders/router.load"

const requireModule: any = import.meta.glob('/src/modules/**/*.route.ts', {eager: true})
const routes_admin = getRoutes(requireModule).filter(
    (element: any) => element.layout.indexOf('Home') != -1 || element.layout.indexOf('*') != -1
)
const routes_login = getRoutes(requireModule).filter(
    (element: any) => element.layout.indexOf('login') != -1
)

export default [
    {
        path: '',
        name: 'home',
        isLayout: true,
        components: {
            default: () => import('../layouts/home/HomeView.vue'),
            login: () => import('../layouts/login/LoginView.vue'),
        },
        children: [...routes_admin, ...routes_login]
    }
]
