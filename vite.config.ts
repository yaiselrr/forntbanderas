import {defineConfig, loadEnv, UserConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueDevTools from 'vite-plugin-vue-devtools'
import {resolve} from "path"
import Pages from 'vite-plugin-pages'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import legacy from '@vitejs/plugin-legacy'
import Unocss from 'unocss/vite'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import compression from "vite-plugin-compression2"
import Inspect from "vite-plugin-inspect"
import {VitePWA} from 'vite-plugin-pwa'
import {AntDesignVueResolver} from 'unplugin-vue-components/resolvers'
import unocssConfig from "./unocss.config"

// https://vitejs.dev/config/
function resolvePath(arg: string) {
    if (arg.includes('/')) {
        const segments = arg.split('/')
        return `${resolve(__dirname, ...segments)}/`
    }
    return `${resolve(__dirname, arg)}/`
}


export default defineConfig(({mode}: UserConfig) => {
    const env = loadEnv(mode as string, process.cwd())
    return {
        esbuild: {
            supported: {
                'top-level-await': true //browsers can handle top-level-await features
            },
        },
        plugins: [
            vue({
                include: [/\.vue$/, /\.md$/] as any,
            }),
            Pages({
                extensions: ['vue', 'md'],
            }),
            vueJsx({
                optimize: true
            }),
            VueDevTools(),
            Boolean(env.VITE_LEGACY) && legacy(),
            AutoImport({
                imports: [
                    'vue',
                    'vue-router',
                    'vue-i18n',
                    '@vueuse/head',
                    '@vueuse/core',
                ],
                dts: 'src/types/auto-imports.d.ts',
                dirs: [
                    'src/composables',
                    'src/store',
                ],
                vueTemplate: true,
            }),
            Components({
                // allow auto load markdown components under `./src/components/`
                extensions: ['vue', 'md'],
                // allow auto import and register components used in markdown
                include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
                dts: 'src/components.d.ts',
                resolvers: [
                    AntDesignVueResolver({
                        importStyle: false, // css in js
                    }),
                ],
            }),
            Unocss(unocssConfig),
            Boolean(env.VITE_USE_PWA) && VitePWA({
                registerType: 'autoUpdate',
                includeAssets: ['favicon.svg', 'safari-pinned-tab.svg'],
                manifest: {
                    name: env.VITE_GLOB_APP_TITLE,
                    short_name: env.VITE_GLOB_APP_SHORT_NAME,
                    theme_color: '#ffffff',
                    icons: [
                        {
                            src: '/pwa-192x192.png',
                            sizes: '192x192',
                            type: 'image/png',
                        },
                        {
                            src: '/pwa-512x512.png',
                            sizes: '512x512',
                            type: 'image/png',
                        },
                        {
                            src: '/pwa-512x512.png',
                            sizes: '512x512',
                            type: 'image/png',
                            purpose: 'any maskable',
                        },
                    ],
                },
            }),
            VueI18nPlugin({
                runtimeOnly: true,
                compositionOnly: true,
                include: [resolve(__dirname, 'src/config/i18n/locales/**')],
            }),
            compression(),
            Inspect()
        ],
        optimizeDeps: {
            include: [
                'vue',
                'vue-router',
                '@vueuse/core',
                '@vuelidate/validators',
                // '@iconify/iconify',
                // 'ant-design-vue/es/locale/es_ES',
                // 'ant-design-vue/es/locale/en_US',
                'vue-types',
                // 'vuedraggable',
                // 'exceljs',
                'ant-design-vue/es',
                'ant-design-vue/es/tooltip',
                'ant-design-vue/es/tooltip/style',
                'ant-design-vue/es/radio',
                'ant-design-vue/es/radio/style',
                // 'ant-design-vue/es/drawer',
                // 'ant-design-vue/es/drawer/style',
                'ant-design-vue/es/input',
                'ant-design-vue/es/input/style',
                'ant-design-vue/es/input-number',
                'ant-design-vue/es/input-number/style',
                'ant-design-vue/es/select',
                'ant-design-vue/es/select/style',
                'ant-design-vue/es/checkbox',
                'ant-design-vue/es/checkbox/style',
                'ant-design-vue/es/switch',
                'ant-design-vue/es/switch/style',
                'ant-design-vue/es/dropdown',
                'ant-design-vue/es/dropdown/style',
                'ant-design-vue/es/divider',
                'ant-design-vue/es/divider/style',
                'ant-design-vue/es/message',
                'ant-design-vue/es/message/style',
                'ant-design-vue/es/modal',
                'ant-design-vue/es/modal/style',
                'ant-design-vue/es/notification',
                'ant-design-vue/es/notification/style',
                'ant-design-vue/es/table',
                'ant-design-vue/es/table/style',
                'ant-design-vue/es/popover',
                'ant-design-vue/es/popover/style',
                'ant-design-vue/es/pagination',
                'ant-design-vue/es/pagination/style',
            ],
            exclude: ['vue-demi'],
        },
        resolve: {
            alias: {
                '~/': resolvePath('src'),
                '@/': resolvePath('src'),
                '~c/': resolvePath('src/core/composables'),
                '~co/': resolvePath('src/core'),
                '~h/': resolvePath('src/core/helpers'),
                '~cf/': resolvePath('src/config'),
                '~m/': resolvePath('src/modules'),
                '~t/': resolvePath('src/themes'),
            }
        },
        server: {
            port: Number(env.VITE_PORT),
            hmr: {
                overlay: true,
            },
        },
        build: {
            cssCodeSplit: false,
            minify: "terser",
            outDir: 'dist',
            terserOptions: {
                compress: {
                    keep_infinity: true,
                    // Used to delete console in production environment
                    drop_console: Boolean(env.VITE_DROP_CONSOLE),
                },
            },
            // Turning off brotliSize display can slightly reduce packaging time
            brotliSize: false,
            chunkSizeWarningLimit: 1200,
            sourcemap: process.env.SOURCE_MAP === 'true',
        },
        css: {
            preprocessorOptions: {
                less: {
                    modifyVars: {
                        // Used for global import to avoid the need to import each style file separately
                        // reference:  Avoid repeated references
                        // hack: `true; @import (reference) "${resolve('src/design/config.less')}";`,
                    },
                    javascriptEnabled: true,
                },
            },
        },

    } as UserConfig
})
