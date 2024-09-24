import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetTypography,
    presetUno,
    transformerDirectives,
    transformerVariantGroup,
} from 'unocss'
import {themeColors} from "./src/themes/admin/config/unocss/colors"
import menuJson from "./src/themes/admin/menu/menu.json"
import shortcuts_admin from "./src/themes/admin/config/unocss/shortcuts"

const safelist_default = 'prose border prose-sm m-auto text-left'.split(' ')
const icons = menuJson.map((e) => {
    return e.icon.split(' ')[0]
})
export default defineConfig({
    content: {
        pipeline: {
            include: [
                // the default
                /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
                // include js/ts files
                'src/**/*.{js,ts}',
            ],
            // exclude files
            // exclude: []
        },
    },
    shortcuts: [
        ...shortcuts_admin
    ],
    presets: [
        presetUno(),
        presetAttributify({
            prefix: 'w:',
        },),
        presetIcons({
            scale: 1.2,
            warn: true,
        }),
        presetTypography(),
    ],
    transformers: [
        transformerDirectives(),
        transformerVariantGroup(),
    ],
    theme: {
        colors: themeColors,
        breakpoints: {
            'xs': '475px',
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
        },
    },
    safelist: [
        ...safelist_default,
        ...icons,
    ],
})
