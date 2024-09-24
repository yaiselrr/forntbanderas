// vite.config.ts
import { defineConfig as defineConfig2, loadEnv } from "file:///C:/wamp64/www/banderas_frontend/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/wamp64/www/banderas_frontend/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///C:/wamp64/www/banderas_frontend/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import VueDevTools from "file:///C:/wamp64/www/banderas_frontend/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
import { resolve } from "path";
import Pages from "file:///C:/wamp64/www/banderas_frontend/node_modules/vite-plugin-pages/dist/index.js";
import AutoImport from "file:///C:/wamp64/www/banderas_frontend/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///C:/wamp64/www/banderas_frontend/node_modules/unplugin-vue-components/dist/vite.js";
import legacy from "file:///C:/wamp64/www/banderas_frontend/node_modules/@vitejs/plugin-legacy/dist/index.mjs";
import Unocss from "file:///C:/wamp64/www/banderas_frontend/node_modules/unocss/dist/vite.mjs";
import VueI18nPlugin from "file:///C:/wamp64/www/banderas_frontend/node_modules/@intlify/unplugin-vue-i18n/lib/vite.mjs";
import compression from "file:///C:/wamp64/www/banderas_frontend/node_modules/vite-plugin-compression2/dist/index.mjs";
import Inspect from "file:///C:/wamp64/www/banderas_frontend/node_modules/vite-plugin-inspect/dist/index.mjs";
import { VitePWA } from "file:///C:/wamp64/www/banderas_frontend/node_modules/vite-plugin-pwa/dist/index.js";
import { AntDesignVueResolver } from "file:///C:/wamp64/www/banderas_frontend/node_modules/unplugin-vue-components/dist/resolvers.js";

// unocss.config.ts
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup
} from "file:///C:/wamp64/www/banderas_frontend/node_modules/unocss/dist/index.mjs";

// src/config/themes/defaults/colors.ts
var defaultColors = {
  inherit: "inherit",
  current: "currentColor",
  transparent: "transparent",
  black: "#000",
  white: "#fff",
  slate: {
    "50": "#f8fafc",
    "100": "#f1f5f9",
    "200": "#e2e8f0",
    "300": "#cbd5e1",
    "400": "#94a3b8",
    "500": "#64748b",
    "600": "#475569",
    "700": "#334155",
    "800": "#1e293b",
    "900": "#0f172a",
    "950": "#020617"
  },
  gray: {
    "50": "#f9fafb",
    "100": "#f3f4f6",
    "200": "#e5e7eb",
    "300": "#d1d5db",
    "400": "#9ca3af",
    "500": "#6b7280",
    "600": "#4b5563",
    "700": "#374151",
    "800": "#1f2937",
    "900": "#111827",
    "950": "#030712"
  },
  zinc: {
    "50": "#fafafa",
    "100": "#f4f4f5",
    "200": "#e4e4e7",
    "300": "#d4d4d8",
    "400": "#a1a1aa",
    "500": "#71717a",
    "600": "#52525b",
    "700": "#3f3f46",
    "800": "#27272a",
    "900": "#18181b",
    "950": "#09090b"
  },
  neutral: {
    "50": "#fafafa",
    "100": "#f5f5f5",
    "200": "#e5e5e5",
    "300": "#d4d4d4",
    "400": "#a3a3a3",
    "500": "#737373",
    "600": "#525252",
    "700": "#404040",
    "800": "#262626",
    "900": "#171717",
    "950": "#0a0a0a"
  },
  stone: {
    "50": "#fafaf9",
    "100": "#f5f5f4",
    "200": "#e7e5e4",
    "300": "#d6d3d1",
    "400": "#a8a29e",
    "500": "#78716c",
    "600": "#57534e",
    "700": "#44403c",
    "800": "#292524",
    "900": "#1c1917",
    "950": "#0c0a09"
  },
  red: {
    "50": "#fef2f2",
    "100": "#fee2e2",
    "200": "#fecaca",
    "300": "#fca5a5",
    "400": "#f87171",
    "500": "#ef4444",
    "600": "#dc2626",
    "700": "#b91c1c",
    "800": "#991b1b",
    "900": "#7f1d1d",
    "950": "#450a0a"
  },
  orange: {
    "50": "#fff7ed",
    "100": "#ffedd5",
    "200": "#fed7aa",
    "300": "#fdba74",
    "400": "#fb923c",
    "500": "#f97316",
    "600": "#ea580c",
    "700": "#c2410c",
    "800": "#9a3412",
    "900": "#7c2d12",
    "950": "#431407"
  },
  amber: {
    "50": "#fffbeb",
    "100": "#fef3c7",
    "200": "#fde68a",
    "300": "#fcd34d",
    "400": "#fbbf24",
    "500": "#f59e0b",
    "600": "#d97706",
    "700": "#b45309",
    "800": "#92400e",
    "900": "#78350f",
    "950": "#451a03"
  },
  yellow: {
    "50": "#fefce8",
    "100": "#fef9c3",
    "200": "#fef08a",
    "300": "#fde047",
    "400": "#facc15",
    "500": "#eab308",
    "600": "#ca8a04",
    "700": "#a16207",
    "800": "#854d0e",
    "900": "#713f12",
    "950": "#422006"
  },
  limed: {
    "50": "#f7fee7",
    "100": "#ecfccb",
    "200": "#d9f99d",
    "300": "#bef264",
    "400": "#a3e635",
    "500": "#84cc16",
    "600": "#65a30d",
    "700": "#4d7c0f",
    "800": "#3f6212",
    "900": "#365314",
    "950": "#1a2e05"
  },
  green: {
    "50": "#f0fdf4",
    "100": "#dcfce7",
    "200": "#bbf7d0",
    "300": "#86efac",
    "400": "#4ade80",
    "500": "#22c55e",
    "600": "#16a34a",
    "700": "#15803d",
    "800": "#166534",
    "900": "#14532d",
    "950": "#052e16"
  },
  emerald: {
    "50": "#ecfdf5",
    "100": "#d1fae5",
    "200": "#a7f3d0",
    "300": "#6ee7b7",
    "400": "#34d399",
    "500": "#10b981",
    "600": "#059669",
    "700": "#047857",
    "800": "#065f46",
    "900": "#064e3b",
    "950": "#022c22"
  },
  teal: {
    "50": "#f0fdfa",
    "100": "#ccfbf1",
    "200": "#99f6e4",
    "300": "#5eead4",
    "400": "#2dd4bf",
    "500": "#14b8a6",
    "600": "#0d9488",
    "700": "#0f766e",
    "800": "#115e59",
    "900": "#134e4a",
    "950": "#042f2e"
  },
  cyan: {
    "50": "#ecfeff",
    "100": "#cffafe",
    "200": "#a5f3fc",
    "300": "#67e8f9",
    "400": "#22d3ee",
    "500": "#06b6d4",
    "600": "#0891b2",
    "700": "#0e7490",
    "800": "#155e75",
    "900": "#164e63",
    "950": "#083344"
  },
  sky: {
    "50": "#f0f9ff",
    "100": "#e0f2fe",
    "200": "#bae6fd",
    "300": "#7dd3fc",
    "400": "#38bdf8",
    "500": "#0ea5e9",
    "600": "#0284c7",
    "700": "#0369a1",
    "800": "#075985",
    "900": "#0c4a6e",
    "950": "#082f49"
  },
  blue: {
    "50": "#eff6ff",
    "100": "#dbeafe",
    "200": "#bfdbfe",
    "300": "#93c5fd",
    "400": "#60a5fa",
    "500": "#3b82f6",
    "600": "#2563eb",
    "700": "#1d4ed8",
    "800": "#1e40af",
    "900": "#1e3a8a",
    "950": "#172554"
  },
  indigo: {
    "50": "#eef2ff",
    "100": "#e0e7ff",
    "200": "#c7d2fe",
    "300": "#a5b4fc",
    "400": "#818cf8",
    "500": "#6366f1",
    "600": "#4f46e5",
    "700": "#4338ca",
    "800": "#3730a3",
    "900": "#312e81",
    "950": "#1e1b4b"
  },
  violet: {
    "50": "#f5f3ff",
    "100": "#ede9fe",
    "200": "#ddd6fe",
    "300": "#c4b5fd",
    "400": "#a78bfa",
    "500": "#8b5cf6",
    "600": "#7c3aed",
    "700": "#6d28d9",
    "800": "#5b21b6",
    "900": "#4c1d95",
    "950": "#2e1065"
  },
  purple: {
    "50": "#faf5ff",
    "100": "#f3e8ff",
    "200": "#e9d5ff",
    "300": "#d8b4fe",
    "400": "#c084fc",
    "500": "#a855f7",
    "600": "#9333ea",
    "700": "#7e22ce",
    "800": "#6b21a8",
    "900": "#581c87",
    "950": "#3b0764"
  },
  fuchsia: {
    "50": "#fdf4ff",
    "100": "#fae8ff",
    "200": "#f5d0fe",
    "300": "#f0abfc",
    "400": "#e879f9",
    "500": "#d946ef",
    "600": "#c026d3",
    "700": "#a21caf",
    "800": "#86198f",
    "900": "#701a75",
    "950": "#4a044e"
  },
  pink: {
    "50": "#fdf2f8",
    "100": "#fce7f3",
    "200": "#fbcfe8",
    "300": "#f9a8d4",
    "400": "#f472b6",
    "500": "#ec4899",
    "600": "#db2777",
    "700": "#be185d",
    "800": "#9d174d",
    "900": "#831843",
    "950": "#500724"
  },
  rose: {
    "50": "#fff1f2",
    "100": "#ffe4e6",
    "200": "#fecdd3",
    "300": "#fda4af",
    "400": "#fb7185",
    "500": "#f43f5e",
    "600": "#e11d48",
    "700": "#be123c",
    "800": "#9f1239",
    "900": "#881337",
    "950": "#4c0519"
  }
};

// src/themes/admin/config/unocss/colors.ts
var secondary = {
  "50": "#edfbff",
  "100": "#d6f4ff",
  "200": "#b5edff",
  "300": "#83e4ff",
  "400": "#48d2ff",
  "500": "#1eb5ff",
  "600": "#0699ff",
  "700": "#0085ff",
  "800": "#0865c5",
  "900": "#0d579b",
  "950": "#0e355d"
};
var bandera = {
  "50": "#eafaff",
  "100": "#d0f3ff",
  "200": "#abecff",
  "300": "#72e3ff",
  "400": "#30d0ff",
  "500": "#01aeff",
  "600": "#0087ff",
  "700": "#006dff",
  "800": "#005adc",
  "900": "#0051ac",
  "950": "#053d7f"
};
var themeColors = { primary: bandera, secondary, ...defaultColors };

// src/themes/admin/menu/menu.json
var menu_default = [
  {
    caption: "Nomencladores",
    modules: "['masters']",
    icon: "i-mdi:format-size w-1em h-1em",
    childrens: [
      {
        name: "attributes_list",
        module: "masters",
        caption: "Atributos",
        icon: "",
        path: "/masters/attributes_list"
      },
      {
        name: "categories_list",
        module: "masters",
        caption: "Categor\xEDas",
        icon: "",
        path: "/masters/categories_list"
      },
      {
        name: "request_statuses_list",
        module: "masters",
        caption: "Estados de solicitud",
        icon: "",
        path: "/masters/request_statuses_list"
      },
      {
        name: "product_type_list",
        module: "masters",
        caption: "Tipos de producto",
        icon: "",
        hidden: false,
        path: "/masters/product_type_list"
      }
    ]
  },
  {
    caption: "Administraci\xF3n",
    modules: "['manage']",
    icon: "i-mdi:view-dashboard w-1em h-1em",
    childrens: [
      {
        name: "products_list",
        module: "manage",
        caption: "Productos",
        icon: "",
        path: "/manage/products_list"
      },
      {
        name: "refurbished_list",
        module: "manage",
        caption: "Devoluciones",
        icon: "",
        path: "/manage/refurbished_list"
      },
      {
        name: "client_list",
        module: "manage",
        caption: "Clientes",
        icon: "",
        path: "/manage/client_list"
      },
      {
        name: "invoices_list",
        module: "manage",
        caption: "Facturas",
        icon: "",
        path: "/manage/invoices_list"
      },
      {
        name: "orders_list",
        module: "manage",
        caption: "Pedidos",
        icon: "",
        path: "/manage/orders_list"
      },
      {
        name: "product_category_list",
        module: "manage",
        caption: "Product category",
        icon: "",
        path: "/manage/product_category_list",
        hidden: true
      },
      {
        name: "product_order_list",
        module: "manage",
        caption: "Product order",
        icon: "",
        path: "/manage/product_order_list",
        hidden: true
      },
      {
        name: "products_attribute_list",
        module: "manage",
        caption: "Products attribute",
        icon: "",
        path: "/manage/products_attribute_list",
        hidden: true
      },
      {
        name: "business_sectors_list",
        module: "manage",
        caption: "Sectores de negocios",
        icon: "",
        path: "/manage/business_sectors_list"
      },
      {
        name: "key_words_list",
        module: "manage",
        caption: "Palabras claves",
        icon: "",
        path: "/manage/key_words_list"
      }
    ]
  },
  {
    caption: "Ventas",
    modules: "['sale']",
    icon: "i-mdi:cart-sale w-1em h-1em",
    childrens: [
      {
        name: "pay_ways_list",
        module: "sale",
        caption: "Formas de pago",
        icon: "",
        path: "/sale/pay_ways_list"
      },
      {
        name: "coupons_list",
        module: "sale",
        caption: "Cupones",
        icon: "",
        path: "/sale/coupons_list"
      }
    ]
  },
  {
    caption: "Configuraci\xF3n",
    modules: "['settings']",
    icon: "i-mdi:settings w-1em h-1em",
    childrens: [
      {
        name: "settings_list",
        module: "settings",
        caption: "Configuraci\xF3n",
        icon: "",
        path: "/settings/settings_list"
      },
      {
        name: "message_blocks_list",
        module: "settings",
        caption: "Bloques de Mensajes",
        icon: "",
        path: "/settings/message_blocks_list"
      }
    ]
  },
  {
    caption: "Seguridad",
    modules: "['security']",
    icon: "i-mdi:server-shield w-1em h-1em text-gray-300",
    childrens: [
      {
        name: "permissions_list",
        module: "security",
        caption: "Permisos",
        icon: "i-mdi:circle-small w-1em h-1em",
        path: "/security/permissions_list"
      },
      {
        name: "roles_list",
        module: "security",
        caption: "Roles",
        icon: "i-mdi:circle-small w-1em h-1em",
        path: "/security/roles_list"
      },
      {
        name: "users_list",
        module: "security",
        caption: "Usuarios",
        icon: "i-heroicons:user-16-solid w-1em h-1em",
        path: "/security/users_list"
      },
      {
        name: "dealers_list",
        module: "security",
        caption: "Distribuidores",
        icon: "i-heroicons:user-16-solid w-1em h-1em",
        path: "/security/dealers_list"
      },
      {
        name: "all_list",
        module: "security",
        caption: "Listar Usuarios, CLientes y Distribuidores",
        icon: "i-heroicons:user-16-solid w-1em h-1em",
        path: "/security/all_list"
      }
    ]
  }
];

// src/themes/admin/config/unocss/shortcuts.ts
var shortcuts_admin = [
  { "btn": "" },
  { "btn-accept": "" },
  { "btn-cancel": "" },
  { "btn-create": "" },
  { "r-container-list": "justify-center flex align-center p-6 h-[45-rem]" },
  { "r-container-page": "justify-center p-6 w-full h-[45-rem]" },
  { "r-container-form": "bg-white dark:bg-slate-800 shadow overflow-hidden sm:rounded-lg" },
  { "r-footer-form": "relative flex items-start" },
  { "r-footer-button-form": "flex-1 lg:justify-end align-end items-end lg:mt-none md:mt-10 sm:w-full sm:justify-center" },
  { "btn-delete": "!cursor-pointer mr-3 !bg-red-800 hover:bg-red-600 hover:disabled:bg-gray-100 disabled:!bg-white disabled:!text-gray-500 disabled:border-solid disabled:border-[1px]" },
  { "r-breadcumbs": "bg-white px-5 py-5 rounded-md shadow-sm" },
  { "r-header-modal": "text-black" },
  { "r-close-icon": "i-heroicons:x-mark text-black" },
  { "r-loading-default": "i-svg-spinners:6-dots-scale text-primary-800 text-[3rem]" },
  { "ctn-input": "w-full border-thin ring-1 ring-primary-300" },
  { "grid-input": "xl:col-span-1  lg:col-span-2 md:col-span-2 sm:col-span-4 xs:col-span-4" },
  { "btn-rg": "!font-bold press r-button outline-none border-none relative select-none overflow-hidden group inline-flex items-center justify-center !outline-none ring-0 rounded-md transition-all duration-100 cursor-pointer r-button-filled-primary default bg-primary-600 active:!bg-primary-600 text-white hover:bg-primary-700 dark:bg-primary-600 dark:hover:bg-primary-500 dark:active:!bg-primary-600 !rounded-full text-sm font-medium px-4 py-2 h-9 bg-gradient-to-r from-primary-500 to-indigo-600 hover:from-primary-600 hover:to-indigo-700 text-xl font-bold px-10 !py-7 transform transition hover:scale-110 duration-300 ease-in-out" },
  { "icon-btn": "inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600" },
  { "badge-primary": "bg-primary-50 text-primary-800 text-xs font-medium me-2 px-2.5 py-0.5 w-30 rounded dark:bg-blue-900 dark:text-blue-300" }
];
var shortcuts_default = shortcuts_admin;

// unocss.config.ts
var safelist_default = "prose border prose-sm m-auto text-left".split(" ");
var icons = menu_default.map((e) => {
  return e.icon.split(" ")[0];
});
var unocss_config_default = defineConfig({
  content: {
    pipeline: {
      include: [
        // the default
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
        // include js/ts files
        "src/**/*.{js,ts}"
      ]
      // exclude files
      // exclude: []
    }
  },
  shortcuts: [
    ...shortcuts_default
  ],
  presets: [
    presetUno(),
    presetAttributify({
      prefix: "w:"
    }),
    presetIcons({
      scale: 1.2,
      warn: true
    }),
    presetTypography()
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup()
  ],
  theme: {
    colors: themeColors,
    breakpoints: {
      "xs": "475px",
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px"
    }
  },
  safelist: [
    ...safelist_default,
    ...icons
  ]
});

// vite.config.ts
var __vite_injected_original_dirname = "C:\\wamp64\\www\\banderas_frontend";
function resolvePath(arg) {
  if (arg.includes("/")) {
    const segments = arg.split("/");
    return `${resolve(__vite_injected_original_dirname, ...segments)}/`;
  }
  return `${resolve(__vite_injected_original_dirname, arg)}/`;
}
var vite_config_default = defineConfig2(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    esbuild: {
      supported: {
        "top-level-await": true
        //browsers can handle top-level-await features
      }
    },
    plugins: [
      vue({
        include: [/\.vue$/, /\.md$/]
      }),
      Pages({
        extensions: ["vue", "md"]
      }),
      vueJsx({
        optimize: true
      }),
      VueDevTools(),
      Boolean(env.VITE_LEGACY) && legacy(),
      AutoImport({
        imports: [
          "vue",
          "vue-router",
          "vue-i18n",
          "@vueuse/head",
          "@vueuse/core"
        ],
        dts: "src/types/auto-imports.d.ts",
        dirs: [
          "src/composables",
          "src/store"
        ],
        vueTemplate: true
      }),
      Components({
        // allow auto load markdown components under `./src/components/`
        extensions: ["vue", "md"],
        // allow auto import and register components used in markdown
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        dts: "src/components.d.ts",
        resolvers: [
          AntDesignVueResolver({
            importStyle: false
            // css in js
          })
        ]
      }),
      Unocss(unocss_config_default),
      Boolean(env.VITE_USE_PWA) && VitePWA({
        registerType: "autoUpdate",
        includeAssets: ["favicon.svg", "safari-pinned-tab.svg"],
        manifest: {
          name: env.VITE_GLOB_APP_TITLE,
          short_name: env.VITE_GLOB_APP_SHORT_NAME,
          theme_color: "#ffffff",
          icons: [
            {
              src: "/pwa-192x192.png",
              sizes: "192x192",
              type: "image/png"
            },
            {
              src: "/pwa-512x512.png",
              sizes: "512x512",
              type: "image/png"
            },
            {
              src: "/pwa-512x512.png",
              sizes: "512x512",
              type: "image/png",
              purpose: "any maskable"
            }
          ]
        }
      }),
      VueI18nPlugin({
        runtimeOnly: true,
        compositionOnly: true,
        include: [resolve(__vite_injected_original_dirname, "src/config/i18n/locales/**")]
      }),
      compression(),
      Inspect()
    ],
    optimizeDeps: {
      include: [
        "vue",
        "vue-router",
        "@vueuse/core",
        "@vuelidate/validators",
        // '@iconify/iconify',
        // 'ant-design-vue/es/locale/es_ES',
        // 'ant-design-vue/es/locale/en_US',
        "vue-types",
        // 'vuedraggable',
        // 'exceljs',
        "ant-design-vue/es",
        "ant-design-vue/es/tooltip",
        "ant-design-vue/es/tooltip/style",
        "ant-design-vue/es/radio",
        "ant-design-vue/es/radio/style",
        // 'ant-design-vue/es/drawer',
        // 'ant-design-vue/es/drawer/style',
        "ant-design-vue/es/input",
        "ant-design-vue/es/input/style",
        "ant-design-vue/es/input-number",
        "ant-design-vue/es/input-number/style",
        "ant-design-vue/es/select",
        "ant-design-vue/es/select/style",
        "ant-design-vue/es/checkbox",
        "ant-design-vue/es/checkbox/style",
        "ant-design-vue/es/switch",
        "ant-design-vue/es/switch/style",
        "ant-design-vue/es/dropdown",
        "ant-design-vue/es/dropdown/style",
        "ant-design-vue/es/divider",
        "ant-design-vue/es/divider/style",
        "ant-design-vue/es/message",
        "ant-design-vue/es/message/style",
        "ant-design-vue/es/modal",
        "ant-design-vue/es/modal/style",
        "ant-design-vue/es/notification",
        "ant-design-vue/es/notification/style",
        "ant-design-vue/es/table",
        "ant-design-vue/es/table/style",
        "ant-design-vue/es/popover",
        "ant-design-vue/es/popover/style",
        "ant-design-vue/es/pagination",
        "ant-design-vue/es/pagination/style"
      ],
      exclude: ["vue-demi"]
    },
    resolve: {
      alias: {
        "~/": resolvePath("src"),
        "@/": resolvePath("src"),
        "~c/": resolvePath("src/core/composables"),
        "~co/": resolvePath("src/core"),
        "~h/": resolvePath("src/core/helpers"),
        "~cf/": resolvePath("src/config"),
        "~m/": resolvePath("src/modules"),
        "~t/": resolvePath("src/themes")
      }
    },
    server: {
      port: Number(env.VITE_PORT),
      hmr: {
        overlay: true
      }
    },
    build: {
      cssCodeSplit: false,
      minify: "terser",
      outDir: "dist",
      terserOptions: {
        compress: {
          keep_infinity: true,
          // Used to delete console in production environment
          drop_console: Boolean(env.VITE_DROP_CONSOLE)
        }
      },
      // Turning off brotliSize display can slightly reduce packaging time
      brotliSize: false,
      chunkSizeWarningLimit: 1200,
      sourcemap: process.env.SOURCE_MAP === "true"
    },
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {
            // Used for global import to avoid the need to import each style file separately
            // reference:  Avoid repeated references
            // hack: `true; @import (reference) "${resolve('src/design/config.less')}";`,
          },
          javascriptEnabled: true
        }
      }
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAidW5vY3NzLmNvbmZpZy50cyIsICJzcmMvY29uZmlnL3RoZW1lcy9kZWZhdWx0cy9jb2xvcnMudHMiLCAic3JjL3RoZW1lcy9hZG1pbi9jb25maWcvdW5vY3NzL2NvbG9ycy50cyIsICJzcmMvdGhlbWVzL2FkbWluL21lbnUvbWVudS5qc29uIiwgInNyYy90aGVtZXMvYWRtaW4vY29uZmlnL3Vub2Nzcy9zaG9ydGN1dHMudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFx3YW1wNjRcXFxcd3d3XFxcXGJhbmRlcmFzX2Zyb250ZW5kXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFx3YW1wNjRcXFxcd3d3XFxcXGJhbmRlcmFzX2Zyb250ZW5kXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi93YW1wNjQvd3d3L2JhbmRlcmFzX2Zyb250ZW5kL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHtkZWZpbmVDb25maWcsIGxvYWRFbnYsIFVzZXJDb25maWd9IGZyb20gJ3ZpdGUnXHJcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xyXG5pbXBvcnQgdnVlSnN4IGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZS1qc3gnXHJcbmltcG9ydCBWdWVEZXZUb29scyBmcm9tICd2aXRlLXBsdWdpbi12dWUtZGV2dG9vbHMnXHJcbmltcG9ydCB7cmVzb2x2ZX0gZnJvbSBcInBhdGhcIlxyXG5pbXBvcnQgUGFnZXMgZnJvbSAndml0ZS1wbHVnaW4tcGFnZXMnXHJcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gJ3VucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGUnXHJcbmltcG9ydCBDb21wb25lbnRzIGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGUnXHJcbmltcG9ydCBsZWdhY3kgZnJvbSAnQHZpdGVqcy9wbHVnaW4tbGVnYWN5J1xyXG5pbXBvcnQgVW5vY3NzIGZyb20gJ3Vub2Nzcy92aXRlJ1xyXG5pbXBvcnQgVnVlSTE4blBsdWdpbiBmcm9tICdAaW50bGlmeS91bnBsdWdpbi12dWUtaTE4bi92aXRlJ1xyXG5pbXBvcnQgY29tcHJlc3Npb24gZnJvbSBcInZpdGUtcGx1Z2luLWNvbXByZXNzaW9uMlwiXHJcbmltcG9ydCBJbnNwZWN0IGZyb20gXCJ2aXRlLXBsdWdpbi1pbnNwZWN0XCJcclxuaW1wb3J0IHtWaXRlUFdBfSBmcm9tICd2aXRlLXBsdWdpbi1wd2EnXHJcbmltcG9ydCB7QW50RGVzaWduVnVlUmVzb2x2ZXJ9IGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3Jlc29sdmVycydcclxuaW1wb3J0IHVub2Nzc0NvbmZpZyBmcm9tIFwiLi91bm9jc3MuY29uZmlnXCJcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmZ1bmN0aW9uIHJlc29sdmVQYXRoKGFyZzogc3RyaW5nKSB7XHJcbiAgICBpZiAoYXJnLmluY2x1ZGVzKCcvJykpIHtcclxuICAgICAgICBjb25zdCBzZWdtZW50cyA9IGFyZy5zcGxpdCgnLycpXHJcbiAgICAgICAgcmV0dXJuIGAke3Jlc29sdmUoX19kaXJuYW1lLCAuLi5zZWdtZW50cyl9L2BcclxuICAgIH1cclxuICAgIHJldHVybiBgJHtyZXNvbHZlKF9fZGlybmFtZSwgYXJnKX0vYFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7bW9kZX06IFVzZXJDb25maWcpID0+IHtcclxuICAgIGNvbnN0IGVudiA9IGxvYWRFbnYobW9kZSBhcyBzdHJpbmcsIHByb2Nlc3MuY3dkKCkpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGVzYnVpbGQ6IHtcclxuICAgICAgICAgICAgc3VwcG9ydGVkOiB7XHJcbiAgICAgICAgICAgICAgICAndG9wLWxldmVsLWF3YWl0JzogdHJ1ZSAvL2Jyb3dzZXJzIGNhbiBoYW5kbGUgdG9wLWxldmVsLWF3YWl0IGZlYXR1cmVzXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwbHVnaW5zOiBbXHJcbiAgICAgICAgICAgIHZ1ZSh7XHJcbiAgICAgICAgICAgICAgICBpbmNsdWRlOiBbL1xcLnZ1ZSQvLCAvXFwubWQkL10gYXMgYW55LFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgUGFnZXMoe1xyXG4gICAgICAgICAgICAgICAgZXh0ZW5zaW9uczogWyd2dWUnLCAnbWQnXSxcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIHZ1ZUpzeCh7XHJcbiAgICAgICAgICAgICAgICBvcHRpbWl6ZTogdHJ1ZVxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgVnVlRGV2VG9vbHMoKSxcclxuICAgICAgICAgICAgQm9vbGVhbihlbnYuVklURV9MRUdBQ1kpICYmIGxlZ2FjeSgpLFxyXG4gICAgICAgICAgICBBdXRvSW1wb3J0KHtcclxuICAgICAgICAgICAgICAgIGltcG9ydHM6IFtcclxuICAgICAgICAgICAgICAgICAgICAndnVlJyxcclxuICAgICAgICAgICAgICAgICAgICAndnVlLXJvdXRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3Z1ZS1pMThuJyxcclxuICAgICAgICAgICAgICAgICAgICAnQHZ1ZXVzZS9oZWFkJyxcclxuICAgICAgICAgICAgICAgICAgICAnQHZ1ZXVzZS9jb3JlJyxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBkdHM6ICdzcmMvdHlwZXMvYXV0by1pbXBvcnRzLmQudHMnLFxyXG4gICAgICAgICAgICAgICAgZGlyczogW1xyXG4gICAgICAgICAgICAgICAgICAgICdzcmMvY29tcG9zYWJsZXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdzcmMvc3RvcmUnLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHZ1ZVRlbXBsYXRlOiB0cnVlLFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgQ29tcG9uZW50cyh7XHJcbiAgICAgICAgICAgICAgICAvLyBhbGxvdyBhdXRvIGxvYWQgbWFya2Rvd24gY29tcG9uZW50cyB1bmRlciBgLi9zcmMvY29tcG9uZW50cy9gXHJcbiAgICAgICAgICAgICAgICBleHRlbnNpb25zOiBbJ3Z1ZScsICdtZCddLFxyXG4gICAgICAgICAgICAgICAgLy8gYWxsb3cgYXV0byBpbXBvcnQgYW5kIHJlZ2lzdGVyIGNvbXBvbmVudHMgdXNlZCBpbiBtYXJrZG93blxyXG4gICAgICAgICAgICAgICAgaW5jbHVkZTogWy9cXC52dWUkLywgL1xcLnZ1ZVxcP3Z1ZS8sIC9cXC5tZCQvXSxcclxuICAgICAgICAgICAgICAgIGR0czogJ3NyYy9jb21wb25lbnRzLmQudHMnLFxyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZXJzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgQW50RGVzaWduVnVlUmVzb2x2ZXIoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbXBvcnRTdHlsZTogZmFsc2UsIC8vIGNzcyBpbiBqc1xyXG4gICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIFVub2Nzcyh1bm9jc3NDb25maWcpLFxyXG4gICAgICAgICAgICBCb29sZWFuKGVudi5WSVRFX1VTRV9QV0EpICYmIFZpdGVQV0Eoe1xyXG4gICAgICAgICAgICAgICAgcmVnaXN0ZXJUeXBlOiAnYXV0b1VwZGF0ZScsXHJcbiAgICAgICAgICAgICAgICBpbmNsdWRlQXNzZXRzOiBbJ2Zhdmljb24uc3ZnJywgJ3NhZmFyaS1waW5uZWQtdGFiLnN2ZyddLFxyXG4gICAgICAgICAgICAgICAgbWFuaWZlc3Q6IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBlbnYuVklURV9HTE9CX0FQUF9USVRMRSxcclxuICAgICAgICAgICAgICAgICAgICBzaG9ydF9uYW1lOiBlbnYuVklURV9HTE9CX0FQUF9TSE9SVF9OQU1FLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoZW1lX2NvbG9yOiAnI2ZmZmZmZicsXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbnM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiAnL3B3YS0xOTJ4MTkyLnBuZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplczogJzE5MngxOTInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogJy9wd2EtNTEyeDUxMi5wbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZXM6ICc1MTJ4NTEyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6ICcvcHdhLTUxMng1MTIucG5nJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemVzOiAnNTEyeDUxMicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB1cnBvc2U6ICdhbnkgbWFza2FibGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgVnVlSTE4blBsdWdpbih7XHJcbiAgICAgICAgICAgICAgICBydW50aW1lT25seTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNvbXBvc2l0aW9uT25seTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGluY2x1ZGU6IFtyZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9jb25maWcvaTE4bi9sb2NhbGVzLyoqJyldLFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgY29tcHJlc3Npb24oKSxcclxuICAgICAgICAgICAgSW5zcGVjdCgpXHJcbiAgICAgICAgXSxcclxuICAgICAgICBvcHRpbWl6ZURlcHM6IHtcclxuICAgICAgICAgICAgaW5jbHVkZTogW1xyXG4gICAgICAgICAgICAgICAgJ3Z1ZScsXHJcbiAgICAgICAgICAgICAgICAndnVlLXJvdXRlcicsXHJcbiAgICAgICAgICAgICAgICAnQHZ1ZXVzZS9jb3JlJyxcclxuICAgICAgICAgICAgICAgICdAdnVlbGlkYXRlL3ZhbGlkYXRvcnMnLFxyXG4gICAgICAgICAgICAgICAgLy8gJ0BpY29uaWZ5L2ljb25pZnknLFxyXG4gICAgICAgICAgICAgICAgLy8gJ2FudC1kZXNpZ24tdnVlL2VzL2xvY2FsZS9lc19FUycsXHJcbiAgICAgICAgICAgICAgICAvLyAnYW50LWRlc2lnbi12dWUvZXMvbG9jYWxlL2VuX1VTJyxcclxuICAgICAgICAgICAgICAgICd2dWUtdHlwZXMnLFxyXG4gICAgICAgICAgICAgICAgLy8gJ3Z1ZWRyYWdnYWJsZScsXHJcbiAgICAgICAgICAgICAgICAvLyAnZXhjZWxqcycsXHJcbiAgICAgICAgICAgICAgICAnYW50LWRlc2lnbi12dWUvZXMnLFxyXG4gICAgICAgICAgICAgICAgJ2FudC1kZXNpZ24tdnVlL2VzL3Rvb2x0aXAnLFxyXG4gICAgICAgICAgICAgICAgJ2FudC1kZXNpZ24tdnVlL2VzL3Rvb2x0aXAvc3R5bGUnLFxyXG4gICAgICAgICAgICAgICAgJ2FudC1kZXNpZ24tdnVlL2VzL3JhZGlvJyxcclxuICAgICAgICAgICAgICAgICdhbnQtZGVzaWduLXZ1ZS9lcy9yYWRpby9zdHlsZScsXHJcbiAgICAgICAgICAgICAgICAvLyAnYW50LWRlc2lnbi12dWUvZXMvZHJhd2VyJyxcclxuICAgICAgICAgICAgICAgIC8vICdhbnQtZGVzaWduLXZ1ZS9lcy9kcmF3ZXIvc3R5bGUnLFxyXG4gICAgICAgICAgICAgICAgJ2FudC1kZXNpZ24tdnVlL2VzL2lucHV0JyxcclxuICAgICAgICAgICAgICAgICdhbnQtZGVzaWduLXZ1ZS9lcy9pbnB1dC9zdHlsZScsXHJcbiAgICAgICAgICAgICAgICAnYW50LWRlc2lnbi12dWUvZXMvaW5wdXQtbnVtYmVyJyxcclxuICAgICAgICAgICAgICAgICdhbnQtZGVzaWduLXZ1ZS9lcy9pbnB1dC1udW1iZXIvc3R5bGUnLFxyXG4gICAgICAgICAgICAgICAgJ2FudC1kZXNpZ24tdnVlL2VzL3NlbGVjdCcsXHJcbiAgICAgICAgICAgICAgICAnYW50LWRlc2lnbi12dWUvZXMvc2VsZWN0L3N0eWxlJyxcclxuICAgICAgICAgICAgICAgICdhbnQtZGVzaWduLXZ1ZS9lcy9jaGVja2JveCcsXHJcbiAgICAgICAgICAgICAgICAnYW50LWRlc2lnbi12dWUvZXMvY2hlY2tib3gvc3R5bGUnLFxyXG4gICAgICAgICAgICAgICAgJ2FudC1kZXNpZ24tdnVlL2VzL3N3aXRjaCcsXHJcbiAgICAgICAgICAgICAgICAnYW50LWRlc2lnbi12dWUvZXMvc3dpdGNoL3N0eWxlJyxcclxuICAgICAgICAgICAgICAgICdhbnQtZGVzaWduLXZ1ZS9lcy9kcm9wZG93bicsXHJcbiAgICAgICAgICAgICAgICAnYW50LWRlc2lnbi12dWUvZXMvZHJvcGRvd24vc3R5bGUnLFxyXG4gICAgICAgICAgICAgICAgJ2FudC1kZXNpZ24tdnVlL2VzL2RpdmlkZXInLFxyXG4gICAgICAgICAgICAgICAgJ2FudC1kZXNpZ24tdnVlL2VzL2RpdmlkZXIvc3R5bGUnLFxyXG4gICAgICAgICAgICAgICAgJ2FudC1kZXNpZ24tdnVlL2VzL21lc3NhZ2UnLFxyXG4gICAgICAgICAgICAgICAgJ2FudC1kZXNpZ24tdnVlL2VzL21lc3NhZ2Uvc3R5bGUnLFxyXG4gICAgICAgICAgICAgICAgJ2FudC1kZXNpZ24tdnVlL2VzL21vZGFsJyxcclxuICAgICAgICAgICAgICAgICdhbnQtZGVzaWduLXZ1ZS9lcy9tb2RhbC9zdHlsZScsXHJcbiAgICAgICAgICAgICAgICAnYW50LWRlc2lnbi12dWUvZXMvbm90aWZpY2F0aW9uJyxcclxuICAgICAgICAgICAgICAgICdhbnQtZGVzaWduLXZ1ZS9lcy9ub3RpZmljYXRpb24vc3R5bGUnLFxyXG4gICAgICAgICAgICAgICAgJ2FudC1kZXNpZ24tdnVlL2VzL3RhYmxlJyxcclxuICAgICAgICAgICAgICAgICdhbnQtZGVzaWduLXZ1ZS9lcy90YWJsZS9zdHlsZScsXHJcbiAgICAgICAgICAgICAgICAnYW50LWRlc2lnbi12dWUvZXMvcG9wb3ZlcicsXHJcbiAgICAgICAgICAgICAgICAnYW50LWRlc2lnbi12dWUvZXMvcG9wb3Zlci9zdHlsZScsXHJcbiAgICAgICAgICAgICAgICAnYW50LWRlc2lnbi12dWUvZXMvcGFnaW5hdGlvbicsXHJcbiAgICAgICAgICAgICAgICAnYW50LWRlc2lnbi12dWUvZXMvcGFnaW5hdGlvbi9zdHlsZScsXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGV4Y2x1ZGU6IFsndnVlLWRlbWknXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlc29sdmU6IHtcclxuICAgICAgICAgICAgYWxpYXM6IHtcclxuICAgICAgICAgICAgICAgICd+Lyc6IHJlc29sdmVQYXRoKCdzcmMnKSxcclxuICAgICAgICAgICAgICAgICdALyc6IHJlc29sdmVQYXRoKCdzcmMnKSxcclxuICAgICAgICAgICAgICAgICd+Yy8nOiByZXNvbHZlUGF0aCgnc3JjL2NvcmUvY29tcG9zYWJsZXMnKSxcclxuICAgICAgICAgICAgICAgICd+Y28vJzogcmVzb2x2ZVBhdGgoJ3NyYy9jb3JlJyksXHJcbiAgICAgICAgICAgICAgICAnfmgvJzogcmVzb2x2ZVBhdGgoJ3NyYy9jb3JlL2hlbHBlcnMnKSxcclxuICAgICAgICAgICAgICAgICd+Y2YvJzogcmVzb2x2ZVBhdGgoJ3NyYy9jb25maWcnKSxcclxuICAgICAgICAgICAgICAgICd+bS8nOiByZXNvbHZlUGF0aCgnc3JjL21vZHVsZXMnKSxcclxuICAgICAgICAgICAgICAgICd+dC8nOiByZXNvbHZlUGF0aCgnc3JjL3RoZW1lcycpLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXJ2ZXI6IHtcclxuICAgICAgICAgICAgcG9ydDogTnVtYmVyKGVudi5WSVRFX1BPUlQpLFxyXG4gICAgICAgICAgICBobXI6IHtcclxuICAgICAgICAgICAgICAgIG92ZXJsYXk6IHRydWUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBidWlsZDoge1xyXG4gICAgICAgICAgICBjc3NDb2RlU3BsaXQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBtaW5pZnk6IFwidGVyc2VyXCIsXHJcbiAgICAgICAgICAgIG91dERpcjogJ2Rpc3QnLFxyXG4gICAgICAgICAgICB0ZXJzZXJPcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICBjb21wcmVzczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGtlZXBfaW5maW5pdHk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVXNlZCB0byBkZWxldGUgY29uc29sZSBpbiBwcm9kdWN0aW9uIGVudmlyb25tZW50XHJcbiAgICAgICAgICAgICAgICAgICAgZHJvcF9jb25zb2xlOiBCb29sZWFuKGVudi5WSVRFX0RST1BfQ09OU09MRSksXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvLyBUdXJuaW5nIG9mZiBicm90bGlTaXplIGRpc3BsYXkgY2FuIHNsaWdodGx5IHJlZHVjZSBwYWNrYWdpbmcgdGltZVxyXG4gICAgICAgICAgICBicm90bGlTaXplOiBmYWxzZSxcclxuICAgICAgICAgICAgY2h1bmtTaXplV2FybmluZ0xpbWl0OiAxMjAwLFxyXG4gICAgICAgICAgICBzb3VyY2VtYXA6IHByb2Nlc3MuZW52LlNPVVJDRV9NQVAgPT09ICd0cnVlJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNzczoge1xyXG4gICAgICAgICAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICBsZXNzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kaWZ5VmFyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBVc2VkIGZvciBnbG9iYWwgaW1wb3J0IHRvIGF2b2lkIHRoZSBuZWVkIHRvIGltcG9ydCBlYWNoIHN0eWxlIGZpbGUgc2VwYXJhdGVseVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZWZlcmVuY2U6ICBBdm9pZCByZXBlYXRlZCByZWZlcmVuY2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGhhY2s6IGB0cnVlOyBAaW1wb3J0IChyZWZlcmVuY2UpIFwiJHtyZXNvbHZlKCdzcmMvZGVzaWduL2NvbmZpZy5sZXNzJyl9XCI7YCxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGphdmFzY3JpcHRFbmFibGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG5cclxuICAgIH0gYXMgVXNlckNvbmZpZ1xyXG59KVxyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXHdhbXA2NFxcXFx3d3dcXFxcYmFuZGVyYXNfZnJvbnRlbmRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXHdhbXA2NFxcXFx3d3dcXFxcYmFuZGVyYXNfZnJvbnRlbmRcXFxcdW5vY3NzLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovd2FtcDY0L3d3dy9iYW5kZXJhc19mcm9udGVuZC91bm9jc3MuY29uZmlnLnRzXCI7aW1wb3J0IHtcclxuICAgIGRlZmluZUNvbmZpZyxcclxuICAgIHByZXNldEF0dHJpYnV0aWZ5LFxyXG4gICAgcHJlc2V0SWNvbnMsXHJcbiAgICBwcmVzZXRUeXBvZ3JhcGh5LFxyXG4gICAgcHJlc2V0VW5vLFxyXG4gICAgdHJhbnNmb3JtZXJEaXJlY3RpdmVzLFxyXG4gICAgdHJhbnNmb3JtZXJWYXJpYW50R3JvdXAsXHJcbn0gZnJvbSAndW5vY3NzJ1xyXG5pbXBvcnQge3RoZW1lQ29sb3JzfSBmcm9tIFwiLi9zcmMvdGhlbWVzL2FkbWluL2NvbmZpZy91bm9jc3MvY29sb3JzXCJcclxuaW1wb3J0IG1lbnVKc29uIGZyb20gXCIuL3NyYy90aGVtZXMvYWRtaW4vbWVudS9tZW51Lmpzb25cIlxyXG5pbXBvcnQgc2hvcnRjdXRzX2FkbWluIGZyb20gXCIuL3NyYy90aGVtZXMvYWRtaW4vY29uZmlnL3Vub2Nzcy9zaG9ydGN1dHNcIlxyXG5cclxuY29uc3Qgc2FmZWxpc3RfZGVmYXVsdCA9ICdwcm9zZSBib3JkZXIgcHJvc2Utc20gbS1hdXRvIHRleHQtbGVmdCcuc3BsaXQoJyAnKVxyXG5jb25zdCBpY29ucyA9IG1lbnVKc29uLm1hcCgoZSkgPT4ge1xyXG4gICAgcmV0dXJuIGUuaWNvbi5zcGxpdCgnICcpWzBdXHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgICBjb250ZW50OiB7XHJcbiAgICAgICAgcGlwZWxpbmU6IHtcclxuICAgICAgICAgICAgaW5jbHVkZTogW1xyXG4gICAgICAgICAgICAgICAgLy8gdGhlIGRlZmF1bHRcclxuICAgICAgICAgICAgICAgIC9cXC4odnVlfHN2ZWx0ZXxbanRdc3h8bWR4P3xhc3Ryb3xlbG18cGhwfHBodG1sfGh0bWwpKCR8XFw/KS8sXHJcbiAgICAgICAgICAgICAgICAvLyBpbmNsdWRlIGpzL3RzIGZpbGVzXHJcbiAgICAgICAgICAgICAgICAnc3JjLyoqLyoue2pzLHRzfScsXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIC8vIGV4Y2x1ZGUgZmlsZXNcclxuICAgICAgICAgICAgLy8gZXhjbHVkZTogW11cclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIHNob3J0Y3V0czogW1xyXG4gICAgICAgIC4uLnNob3J0Y3V0c19hZG1pblxyXG4gICAgXSxcclxuICAgIHByZXNldHM6IFtcclxuICAgICAgICBwcmVzZXRVbm8oKSxcclxuICAgICAgICBwcmVzZXRBdHRyaWJ1dGlmeSh7XHJcbiAgICAgICAgICAgIHByZWZpeDogJ3c6JyxcclxuICAgICAgICB9LCksXHJcbiAgICAgICAgcHJlc2V0SWNvbnMoe1xyXG4gICAgICAgICAgICBzY2FsZTogMS4yLFxyXG4gICAgICAgICAgICB3YXJuOiB0cnVlLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHByZXNldFR5cG9ncmFwaHkoKSxcclxuICAgIF0sXHJcbiAgICB0cmFuc2Zvcm1lcnM6IFtcclxuICAgICAgICB0cmFuc2Zvcm1lckRpcmVjdGl2ZXMoKSxcclxuICAgICAgICB0cmFuc2Zvcm1lclZhcmlhbnRHcm91cCgpLFxyXG4gICAgXSxcclxuICAgIHRoZW1lOiB7XHJcbiAgICAgICAgY29sb3JzOiB0aGVtZUNvbG9ycyxcclxuICAgICAgICBicmVha3BvaW50czoge1xyXG4gICAgICAgICAgICAneHMnOiAnNDc1cHgnLFxyXG4gICAgICAgICAgICAnc20nOiAnNjQwcHgnLFxyXG4gICAgICAgICAgICAnbWQnOiAnNzY4cHgnLFxyXG4gICAgICAgICAgICAnbGcnOiAnMTAyNHB4JyxcclxuICAgICAgICAgICAgJ3hsJzogJzEyODBweCcsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBzYWZlbGlzdDogW1xyXG4gICAgICAgIC4uLnNhZmVsaXN0X2RlZmF1bHQsXHJcbiAgICAgICAgLi4uaWNvbnMsXHJcbiAgICBdLFxyXG59KVxyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXHdhbXA2NFxcXFx3d3dcXFxcYmFuZGVyYXNfZnJvbnRlbmRcXFxcc3JjXFxcXGNvbmZpZ1xcXFx0aGVtZXNcXFxcZGVmYXVsdHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXHdhbXA2NFxcXFx3d3dcXFxcYmFuZGVyYXNfZnJvbnRlbmRcXFxcc3JjXFxcXGNvbmZpZ1xcXFx0aGVtZXNcXFxcZGVmYXVsdHNcXFxcY29sb3JzLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi93YW1wNjQvd3d3L2JhbmRlcmFzX2Zyb250ZW5kL3NyYy9jb25maWcvdGhlbWVzL2RlZmF1bHRzL2NvbG9ycy50c1wiO2V4cG9ydCBjb25zdCBkZWZhdWx0Q29sb3JzPSB7XHJcbiAgICBpbmhlcml0OiAnaW5oZXJpdCcsXHJcbiAgICBjdXJyZW50OiAnY3VycmVudENvbG9yJyxcclxuICAgIHRyYW5zcGFyZW50OiAndHJhbnNwYXJlbnQnLFxyXG4gICAgYmxhY2s6ICcjMDAwJyxcclxuICAgIHdoaXRlOiAnI2ZmZicsXHJcbiAgICBzbGF0ZToge1xyXG4gICAgICAgICc1MCc6ICcjZjhmYWZjJyxcclxuICAgICAgICAnMTAwJzogJyNmMWY1ZjknLFxyXG4gICAgICAgICcyMDAnOiAnI2UyZThmMCcsXHJcbiAgICAgICAgJzMwMCc6ICcjY2JkNWUxJyxcclxuICAgICAgICAnNDAwJzogJyM5NGEzYjgnLFxyXG4gICAgICAgICc1MDAnOiAnIzY0NzQ4YicsXHJcbiAgICAgICAgJzYwMCc6ICcjNDc1NTY5JyxcclxuICAgICAgICAnNzAwJzogJyMzMzQxNTUnLFxyXG4gICAgICAgICc4MDAnOiAnIzFlMjkzYicsXHJcbiAgICAgICAgJzkwMCc6ICcjMGYxNzJhJyxcclxuICAgICAgICAnOTUwJzogJyMwMjA2MTcnLFxyXG4gIH0sXHJcbiAgICBncmF5OiB7XHJcbiAgICAgICAgJzUwJzogJyNmOWZhZmInLFxyXG4gICAgICAgICcxMDAnOiAnI2YzZjRmNicsXHJcbiAgICAgICAgJzIwMCc6ICcjZTVlN2ViJyxcclxuICAgICAgICAnMzAwJzogJyNkMWQ1ZGInLFxyXG4gICAgICAgICc0MDAnOiAnIzljYTNhZicsXHJcbiAgICAgICAgJzUwMCc6ICcjNmI3MjgwJyxcclxuICAgICAgICAnNjAwJzogJyM0YjU1NjMnLFxyXG4gICAgICAgICc3MDAnOiAnIzM3NDE1MScsXHJcbiAgICAgICAgJzgwMCc6ICcjMWYyOTM3JyxcclxuICAgICAgICAnOTAwJzogJyMxMTE4MjcnLFxyXG4gICAgICAgICc5NTAnOiAnIzAzMDcxMicsXHJcbiAgfSxcclxuICAgIHppbmM6IHtcclxuICAgICAgICAnNTAnOiAnI2ZhZmFmYScsXHJcbiAgICAgICAgJzEwMCc6ICcjZjRmNGY1JyxcclxuICAgICAgICAnMjAwJzogJyNlNGU0ZTcnLFxyXG4gICAgICAgICczMDAnOiAnI2Q0ZDRkOCcsXHJcbiAgICAgICAgJzQwMCc6ICcjYTFhMWFhJyxcclxuICAgICAgICAnNTAwJzogJyM3MTcxN2EnLFxyXG4gICAgICAgICc2MDAnOiAnIzUyNTI1YicsXHJcbiAgICAgICAgJzcwMCc6ICcjM2YzZjQ2JyxcclxuICAgICAgICAnODAwJzogJyMyNzI3MmEnLFxyXG4gICAgICAgICc5MDAnOiAnIzE4MTgxYicsXHJcbiAgICAgICAgJzk1MCc6ICcjMDkwOTBiJyxcclxuICB9LFxyXG4gICAgbmV1dHJhbDoge1xyXG4gICAgICAgICc1MCc6ICcjZmFmYWZhJyxcclxuICAgICAgICAnMTAwJzogJyNmNWY1ZjUnLFxyXG4gICAgICAgICcyMDAnOiAnI2U1ZTVlNScsXHJcbiAgICAgICAgJzMwMCc6ICcjZDRkNGQ0JyxcclxuICAgICAgICAnNDAwJzogJyNhM2EzYTMnLFxyXG4gICAgICAgICc1MDAnOiAnIzczNzM3MycsXHJcbiAgICAgICAgJzYwMCc6ICcjNTI1MjUyJyxcclxuICAgICAgICAnNzAwJzogJyM0MDQwNDAnLFxyXG4gICAgICAgICc4MDAnOiAnIzI2MjYyNicsXHJcbiAgICAgICAgJzkwMCc6ICcjMTcxNzE3JyxcclxuICAgICAgICAnOTUwJzogJyMwYTBhMGEnLFxyXG4gIH0sXHJcbiAgICBzdG9uZToge1xyXG4gICAgICAgICc1MCc6ICcjZmFmYWY5JyxcclxuICAgICAgICAnMTAwJzogJyNmNWY1ZjQnLFxyXG4gICAgICAgICcyMDAnOiAnI2U3ZTVlNCcsXHJcbiAgICAgICAgJzMwMCc6ICcjZDZkM2QxJyxcclxuICAgICAgICAnNDAwJzogJyNhOGEyOWUnLFxyXG4gICAgICAgICc1MDAnOiAnIzc4NzE2YycsXHJcbiAgICAgICAgJzYwMCc6ICcjNTc1MzRlJyxcclxuICAgICAgICAnNzAwJzogJyM0NDQwM2MnLFxyXG4gICAgICAgICc4MDAnOiAnIzI5MjUyNCcsXHJcbiAgICAgICAgJzkwMCc6ICcjMWMxOTE3JyxcclxuICAgICAgICAnOTUwJzogJyMwYzBhMDknLFxyXG4gIH0sXHJcbiAgICByZWQ6IHtcclxuICAgICAgICAnNTAnOiAnI2ZlZjJmMicsXHJcbiAgICAgICAgJzEwMCc6ICcjZmVlMmUyJyxcclxuICAgICAgICAnMjAwJzogJyNmZWNhY2EnLFxyXG4gICAgICAgICczMDAnOiAnI2ZjYTVhNScsXHJcbiAgICAgICAgJzQwMCc6ICcjZjg3MTcxJyxcclxuICAgICAgICAnNTAwJzogJyNlZjQ0NDQnLFxyXG4gICAgICAgICc2MDAnOiAnI2RjMjYyNicsXHJcbiAgICAgICAgJzcwMCc6ICcjYjkxYzFjJyxcclxuICAgICAgICAnODAwJzogJyM5OTFiMWInLFxyXG4gICAgICAgICc5MDAnOiAnIzdmMWQxZCcsXHJcbiAgICAgICAgJzk1MCc6ICcjNDUwYTBhJyxcclxuICB9LFxyXG4gICAgb3JhbmdlOiB7XHJcbiAgICAgICAgJzUwJzogJyNmZmY3ZWQnLFxyXG4gICAgICAgICcxMDAnOiAnI2ZmZWRkNScsXHJcbiAgICAgICAgJzIwMCc6ICcjZmVkN2FhJyxcclxuICAgICAgICAnMzAwJzogJyNmZGJhNzQnLFxyXG4gICAgICAgICc0MDAnOiAnI2ZiOTIzYycsXHJcbiAgICAgICAgJzUwMCc6ICcjZjk3MzE2JyxcclxuICAgICAgICAnNjAwJzogJyNlYTU4MGMnLFxyXG4gICAgICAgICc3MDAnOiAnI2MyNDEwYycsXHJcbiAgICAgICAgJzgwMCc6ICcjOWEzNDEyJyxcclxuICAgICAgICAnOTAwJzogJyM3YzJkMTInLFxyXG4gICAgICAgICc5NTAnOiAnIzQzMTQwNycsXHJcbiAgfSxcclxuICAgIGFtYmVyOiB7XHJcbiAgICAgICAgJzUwJzogJyNmZmZiZWInLFxyXG4gICAgICAgICcxMDAnOiAnI2ZlZjNjNycsXHJcbiAgICAgICAgJzIwMCc6ICcjZmRlNjhhJyxcclxuICAgICAgICAnMzAwJzogJyNmY2QzNGQnLFxyXG4gICAgICAgICc0MDAnOiAnI2ZiYmYyNCcsXHJcbiAgICAgICAgJzUwMCc6ICcjZjU5ZTBiJyxcclxuICAgICAgICAnNjAwJzogJyNkOTc3MDYnLFxyXG4gICAgICAgICc3MDAnOiAnI2I0NTMwOScsXHJcbiAgICAgICAgJzgwMCc6ICcjOTI0MDBlJyxcclxuICAgICAgICAnOTAwJzogJyM3ODM1MGYnLFxyXG4gICAgICAgICc5NTAnOiAnIzQ1MWEwMycsXHJcbiAgfSxcclxuICAgIHllbGxvdzoge1xyXG4gICAgICAgICc1MCc6ICcjZmVmY2U4JyxcclxuICAgICAgICAnMTAwJzogJyNmZWY5YzMnLFxyXG4gICAgICAgICcyMDAnOiAnI2ZlZjA4YScsXHJcbiAgICAgICAgJzMwMCc6ICcjZmRlMDQ3JyxcclxuICAgICAgICAnNDAwJzogJyNmYWNjMTUnLFxyXG4gICAgICAgICc1MDAnOiAnI2VhYjMwOCcsXHJcbiAgICAgICAgJzYwMCc6ICcjY2E4YTA0JyxcclxuICAgICAgICAnNzAwJzogJyNhMTYyMDcnLFxyXG4gICAgICAgICc4MDAnOiAnIzg1NGQwZScsXHJcbiAgICAgICAgJzkwMCc6ICcjNzEzZjEyJyxcclxuICAgICAgICAnOTUwJzogJyM0MjIwMDYnLFxyXG4gIH0sXHJcbiAgICBsaW1lZDoge1xyXG4gICAgICAgICc1MCc6ICcjZjdmZWU3JyxcclxuICAgICAgICAnMTAwJzogJyNlY2ZjY2InLFxyXG4gICAgICAgICcyMDAnOiAnI2Q5Zjk5ZCcsXHJcbiAgICAgICAgJzMwMCc6ICcjYmVmMjY0JyxcclxuICAgICAgICAnNDAwJzogJyNhM2U2MzUnLFxyXG4gICAgICAgICc1MDAnOiAnIzg0Y2MxNicsXHJcbiAgICAgICAgJzYwMCc6ICcjNjVhMzBkJyxcclxuICAgICAgICAnNzAwJzogJyM0ZDdjMGYnLFxyXG4gICAgICAgICc4MDAnOiAnIzNmNjIxMicsXHJcbiAgICAgICAgJzkwMCc6ICcjMzY1MzE0JyxcclxuICAgICAgICAnOTUwJzogJyMxYTJlMDUnLFxyXG4gIH0sXHJcbiAgICBncmVlbjoge1xyXG4gICAgICAgICc1MCc6ICcjZjBmZGY0JyxcclxuICAgICAgICAnMTAwJzogJyNkY2ZjZTcnLFxyXG4gICAgICAgICcyMDAnOiAnI2JiZjdkMCcsXHJcbiAgICAgICAgJzMwMCc6ICcjODZlZmFjJyxcclxuICAgICAgICAnNDAwJzogJyM0YWRlODAnLFxyXG4gICAgICAgICc1MDAnOiAnIzIyYzU1ZScsXHJcbiAgICAgICAgJzYwMCc6ICcjMTZhMzRhJyxcclxuICAgICAgICAnNzAwJzogJyMxNTgwM2QnLFxyXG4gICAgICAgICc4MDAnOiAnIzE2NjUzNCcsXHJcbiAgICAgICAgJzkwMCc6ICcjMTQ1MzJkJyxcclxuICAgICAgICAnOTUwJzogJyMwNTJlMTYnLFxyXG4gIH0sXHJcbiAgICBlbWVyYWxkOiB7XHJcbiAgICAgICAgJzUwJzogJyNlY2ZkZjUnLFxyXG4gICAgICAgICcxMDAnOiAnI2QxZmFlNScsXHJcbiAgICAgICAgJzIwMCc6ICcjYTdmM2QwJyxcclxuICAgICAgICAnMzAwJzogJyM2ZWU3YjcnLFxyXG4gICAgICAgICc0MDAnOiAnIzM0ZDM5OScsXHJcbiAgICAgICAgJzUwMCc6ICcjMTBiOTgxJyxcclxuICAgICAgICAnNjAwJzogJyMwNTk2NjknLFxyXG4gICAgICAgICc3MDAnOiAnIzA0Nzg1NycsXHJcbiAgICAgICAgJzgwMCc6ICcjMDY1ZjQ2JyxcclxuICAgICAgICAnOTAwJzogJyMwNjRlM2InLFxyXG4gICAgICAgICc5NTAnOiAnIzAyMmMyMicsXHJcbiAgfSxcclxuICAgIHRlYWw6IHtcclxuICAgICAgICAnNTAnOiAnI2YwZmRmYScsXHJcbiAgICAgICAgJzEwMCc6ICcjY2NmYmYxJyxcclxuICAgICAgICAnMjAwJzogJyM5OWY2ZTQnLFxyXG4gICAgICAgICczMDAnOiAnIzVlZWFkNCcsXHJcbiAgICAgICAgJzQwMCc6ICcjMmRkNGJmJyxcclxuICAgICAgICAnNTAwJzogJyMxNGI4YTYnLFxyXG4gICAgICAgICc2MDAnOiAnIzBkOTQ4OCcsXHJcbiAgICAgICAgJzcwMCc6ICcjMGY3NjZlJyxcclxuICAgICAgICAnODAwJzogJyMxMTVlNTknLFxyXG4gICAgICAgICc5MDAnOiAnIzEzNGU0YScsXHJcbiAgICAgICAgJzk1MCc6ICcjMDQyZjJlJyxcclxuICB9LFxyXG4gICAgY3lhbjoge1xyXG4gICAgICAgICc1MCc6ICcjZWNmZWZmJyxcclxuICAgICAgICAnMTAwJzogJyNjZmZhZmUnLFxyXG4gICAgICAgICcyMDAnOiAnI2E1ZjNmYycsXHJcbiAgICAgICAgJzMwMCc6ICcjNjdlOGY5JyxcclxuICAgICAgICAnNDAwJzogJyMyMmQzZWUnLFxyXG4gICAgICAgICc1MDAnOiAnIzA2YjZkNCcsXHJcbiAgICAgICAgJzYwMCc6ICcjMDg5MWIyJyxcclxuICAgICAgICAnNzAwJzogJyMwZTc0OTAnLFxyXG4gICAgICAgICc4MDAnOiAnIzE1NWU3NScsXHJcbiAgICAgICAgJzkwMCc6ICcjMTY0ZTYzJyxcclxuICAgICAgICAnOTUwJzogJyMwODMzNDQnLFxyXG4gIH0sXHJcbiAgICBza3k6IHtcclxuICAgICAgICAnNTAnOiAnI2YwZjlmZicsXHJcbiAgICAgICAgJzEwMCc6ICcjZTBmMmZlJyxcclxuICAgICAgICAnMjAwJzogJyNiYWU2ZmQnLFxyXG4gICAgICAgICczMDAnOiAnIzdkZDNmYycsXHJcbiAgICAgICAgJzQwMCc6ICcjMzhiZGY4JyxcclxuICAgICAgICAnNTAwJzogJyMwZWE1ZTknLFxyXG4gICAgICAgICc2MDAnOiAnIzAyODRjNycsXHJcbiAgICAgICAgJzcwMCc6ICcjMDM2OWExJyxcclxuICAgICAgICAnODAwJzogJyMwNzU5ODUnLFxyXG4gICAgICAgICc5MDAnOiAnIzBjNGE2ZScsXHJcbiAgICAgICAgJzk1MCc6ICcjMDgyZjQ5JyxcclxuICB9LFxyXG4gICAgYmx1ZToge1xyXG4gICAgICAgICc1MCc6ICcjZWZmNmZmJyxcclxuICAgICAgICAnMTAwJzogJyNkYmVhZmUnLFxyXG4gICAgICAgICcyMDAnOiAnI2JmZGJmZScsXHJcbiAgICAgICAgJzMwMCc6ICcjOTNjNWZkJyxcclxuICAgICAgICAnNDAwJzogJyM2MGE1ZmEnLFxyXG4gICAgICAgICc1MDAnOiAnIzNiODJmNicsXHJcbiAgICAgICAgJzYwMCc6ICcjMjU2M2ViJyxcclxuICAgICAgICAnNzAwJzogJyMxZDRlZDgnLFxyXG4gICAgICAgICc4MDAnOiAnIzFlNDBhZicsXHJcbiAgICAgICAgJzkwMCc6ICcjMWUzYThhJyxcclxuICAgICAgICAnOTUwJzogJyMxNzI1NTQnLFxyXG4gIH0sXHJcbiAgICBpbmRpZ286IHtcclxuICAgICAgICAnNTAnOiAnI2VlZjJmZicsXHJcbiAgICAgICAgJzEwMCc6ICcjZTBlN2ZmJyxcclxuICAgICAgICAnMjAwJzogJyNjN2QyZmUnLFxyXG4gICAgICAgICczMDAnOiAnI2E1YjRmYycsXHJcbiAgICAgICAgJzQwMCc6ICcjODE4Y2Y4JyxcclxuICAgICAgICAnNTAwJzogJyM2MzY2ZjEnLFxyXG4gICAgICAgICc2MDAnOiAnIzRmNDZlNScsXHJcbiAgICAgICAgJzcwMCc6ICcjNDMzOGNhJyxcclxuICAgICAgICAnODAwJzogJyMzNzMwYTMnLFxyXG4gICAgICAgICc5MDAnOiAnIzMxMmU4MScsXHJcbiAgICAgICAgJzk1MCc6ICcjMWUxYjRiJyxcclxuICB9LFxyXG4gICAgdmlvbGV0OiB7XHJcbiAgICAgICAgJzUwJzogJyNmNWYzZmYnLFxyXG4gICAgICAgICcxMDAnOiAnI2VkZTlmZScsXHJcbiAgICAgICAgJzIwMCc6ICcjZGRkNmZlJyxcclxuICAgICAgICAnMzAwJzogJyNjNGI1ZmQnLFxyXG4gICAgICAgICc0MDAnOiAnI2E3OGJmYScsXHJcbiAgICAgICAgJzUwMCc6ICcjOGI1Y2Y2JyxcclxuICAgICAgICAnNjAwJzogJyM3YzNhZWQnLFxyXG4gICAgICAgICc3MDAnOiAnIzZkMjhkOScsXHJcbiAgICAgICAgJzgwMCc6ICcjNWIyMWI2JyxcclxuICAgICAgICAnOTAwJzogJyM0YzFkOTUnLFxyXG4gICAgICAgICc5NTAnOiAnIzJlMTA2NScsXHJcbiAgfSxcclxuICAgIHB1cnBsZToge1xyXG4gICAgICAgICc1MCc6ICcjZmFmNWZmJyxcclxuICAgICAgICAnMTAwJzogJyNmM2U4ZmYnLFxyXG4gICAgICAgICcyMDAnOiAnI2U5ZDVmZicsXHJcbiAgICAgICAgJzMwMCc6ICcjZDhiNGZlJyxcclxuICAgICAgICAnNDAwJzogJyNjMDg0ZmMnLFxyXG4gICAgICAgICc1MDAnOiAnI2E4NTVmNycsXHJcbiAgICAgICAgJzYwMCc6ICcjOTMzM2VhJyxcclxuICAgICAgICAnNzAwJzogJyM3ZTIyY2UnLFxyXG4gICAgICAgICc4MDAnOiAnIzZiMjFhOCcsXHJcbiAgICAgICAgJzkwMCc6ICcjNTgxYzg3JyxcclxuICAgICAgICAnOTUwJzogJyMzYjA3NjQnLFxyXG4gIH0sXHJcbiAgICBmdWNoc2lhOiB7XHJcbiAgICAgICAgJzUwJzogJyNmZGY0ZmYnLFxyXG4gICAgICAgICcxMDAnOiAnI2ZhZThmZicsXHJcbiAgICAgICAgJzIwMCc6ICcjZjVkMGZlJyxcclxuICAgICAgICAnMzAwJzogJyNmMGFiZmMnLFxyXG4gICAgICAgICc0MDAnOiAnI2U4NzlmOScsXHJcbiAgICAgICAgJzUwMCc6ICcjZDk0NmVmJyxcclxuICAgICAgICAnNjAwJzogJyNjMDI2ZDMnLFxyXG4gICAgICAgICc3MDAnOiAnI2EyMWNhZicsXHJcbiAgICAgICAgJzgwMCc6ICcjODYxOThmJyxcclxuICAgICAgICAnOTAwJzogJyM3MDFhNzUnLFxyXG4gICAgICAgICc5NTAnOiAnIzRhMDQ0ZScsXHJcbiAgfSxcclxuICAgIHBpbms6IHtcclxuICAgICAgICAnNTAnOiAnI2ZkZjJmOCcsXHJcbiAgICAgICAgJzEwMCc6ICcjZmNlN2YzJyxcclxuICAgICAgICAnMjAwJzogJyNmYmNmZTgnLFxyXG4gICAgICAgICczMDAnOiAnI2Y5YThkNCcsXHJcbiAgICAgICAgJzQwMCc6ICcjZjQ3MmI2JyxcclxuICAgICAgICAnNTAwJzogJyNlYzQ4OTknLFxyXG4gICAgICAgICc2MDAnOiAnI2RiMjc3NycsXHJcbiAgICAgICAgJzcwMCc6ICcjYmUxODVkJyxcclxuICAgICAgICAnODAwJzogJyM5ZDE3NGQnLFxyXG4gICAgICAgICc5MDAnOiAnIzgzMTg0MycsXHJcbiAgICAgICAgJzk1MCc6ICcjNTAwNzI0JyxcclxuICB9LFxyXG4gICAgcm9zZToge1xyXG4gICAgICAgICc1MCc6ICcjZmZmMWYyJyxcclxuICAgICAgICAnMTAwJzogJyNmZmU0ZTYnLFxyXG4gICAgICAgICcyMDAnOiAnI2ZlY2RkMycsXHJcbiAgICAgICAgJzMwMCc6ICcjZmRhNGFmJyxcclxuICAgICAgICAnNDAwJzogJyNmYjcxODUnLFxyXG4gICAgICAgICc1MDAnOiAnI2Y0M2Y1ZScsXHJcbiAgICAgICAgJzYwMCc6ICcjZTExZDQ4JyxcclxuICAgICAgICAnNzAwJzogJyNiZTEyM2MnLFxyXG4gICAgICAgICc4MDAnOiAnIzlmMTIzOScsXHJcbiAgICAgICAgJzkwMCc6ICcjODgxMzM3JyxcclxuICAgICAgICAnOTUwJzogJyM0YzA1MTknLFxyXG4gICB9LFxyXG59XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcd2FtcDY0XFxcXHd3d1xcXFxiYW5kZXJhc19mcm9udGVuZFxcXFxzcmNcXFxcdGhlbWVzXFxcXGFkbWluXFxcXGNvbmZpZ1xcXFx1bm9jc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXHdhbXA2NFxcXFx3d3dcXFxcYmFuZGVyYXNfZnJvbnRlbmRcXFxcc3JjXFxcXHRoZW1lc1xcXFxhZG1pblxcXFxjb25maWdcXFxcdW5vY3NzXFxcXGNvbG9ycy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovd2FtcDY0L3d3dy9iYW5kZXJhc19mcm9udGVuZC9zcmMvdGhlbWVzL2FkbWluL2NvbmZpZy91bm9jc3MvY29sb3JzLnRzXCI7aW1wb3J0IHtkZWZhdWx0Q29sb3JzfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29uZmlnL3RoZW1lcy9kZWZhdWx0cy9jb2xvcnNcIlxyXG5cclxuXHJcbmNvbnN0IHNlY29uZGFyeSA9IHtcclxuICAgICc1MCc6ICcjZWRmYmZmJyxcclxuICAgICcxMDAnOiAnI2Q2ZjRmZicsXHJcbiAgICAnMjAwJzogJyNiNWVkZmYnLFxyXG4gICAgJzMwMCc6ICcjODNlNGZmJyxcclxuICAgICc0MDAnOiAnIzQ4ZDJmZicsXHJcbiAgICAnNTAwJzogJyMxZWI1ZmYnLFxyXG4gICAgJzYwMCc6ICcjMDY5OWZmJyxcclxuICAgICc3MDAnOiAnIzAwODVmZicsXHJcbiAgICAnODAwJzogJyMwODY1YzUnLFxyXG4gICAgJzkwMCc6ICcjMGQ1NzliJyxcclxuICAgICc5NTAnOiAnIzBlMzU1ZCcsXHJcbn1cclxuXHJcblxyXG5jb25zdCBpbmZvID0ge1xyXG4gICAgMTAwOiBcIiNhZGZmZmZcIixcclxuICAgIDIwMDogXCIjOTFmZmZmXCIsXHJcbiAgICAzMDA6IFwiIzczZmFmZlwiLFxyXG4gICAgNDAwOiBcIiM1M2UwZmZcIixcclxuICAgIDUwMDogXCIjMmNjN2U3XCIsXHJcbiAgICA2MDA6IFwiIzAwYWVjZVwiLFxyXG4gICAgNzAwOiBcIiMwMDk2YjVcIixcclxuICAgIDgwMDogXCIjMDA3ZTlkXCIsXHJcbiAgICA5MDA6IFwiIzAwNjc4NVwiXHJcbn1cclxuY29uc3Qgd2FybmluZyA9IHtcclxuICAgIDEwMDogXCIjZmZmZmE0XCIsXHJcbiAgICAyMDA6IFwiI2ZmZmY4YlwiLFxyXG4gICAgMzAwOiBcIiNmZmY5NzJcIixcclxuICAgIDQwMDogXCIjZjZkZjVhXCIsXHJcbiAgICA1MDA6IFwiI2RiYzY0MFwiLFxyXG4gICAgNjAwOiBcIiNjMGFlMjVcIixcclxuICAgIDcwMDogXCIjYTY5NjAwXCIsXHJcbiAgICA4MDA6IFwiIzhjN2YwMFwiLFxyXG4gICAgOTAwOiBcIiM3MzY5MDBcIlxyXG59XHJcbmNvbnN0IHN1Y2Nlc3MgPSB7XHJcbiAgICA1MDogXCIjZDJmNWQ3XCIsXHJcbiAgICAxMDA6IFwiI2IxZmZiY1wiLFxyXG4gICAgMjAwOiBcIiM5NWZmYTJcIixcclxuICAgIDMwMDogXCIjNzlmZjhhXCIsXHJcbiAgICA0MDA6IFwiIzVkZWU3MlwiLFxyXG4gICAgNTAwOiBcIiMzY2Q0NWFcIixcclxuICAgIDYwMDogXCIjMDhiYTQzXCIsXHJcbiAgICA3MDA6IFwiIzAwYTEyYlwiLFxyXG4gICAgODAwOiBcIiMwMDg5MGVcIixcclxuICAgIDkwMDogXCIjMDA3MTAwXCIsXHJcbiAgICA5NTA6IFwiIzAyM2QwMlwiXHJcbn1cclxuXHJcbmNvbnN0IGJhbmRlcmEgPSB7XHJcbiAgICAnNTAnOiAnI2VhZmFmZicsXHJcbiAgICAnMTAwJzogJyNkMGYzZmYnLFxyXG4gICAgJzIwMCc6ICcjYWJlY2ZmJyxcclxuICAgICczMDAnOiAnIzcyZTNmZicsXHJcbiAgICAnNDAwJzogJyMzMGQwZmYnLFxyXG4gICAgJzUwMCc6ICcjMDFhZWZmJyxcclxuICAgICc2MDAnOiAnIzAwODdmZicsXHJcbiAgICAnNzAwJzogJyMwMDZkZmYnLFxyXG4gICAgJzgwMCc6ICcjMDA1YWRjJyxcclxuICAgICc5MDAnOiAnIzAwNTFhYycsXHJcbiAgICAnOTUwJzogJyMwNTNkN2YnLFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHRoZW1lQ29sb3JzID0ge3ByaW1hcnk6IGJhbmRlcmEsIHNlY29uZGFyeSwgLi4uZGVmYXVsdENvbG9yc31cclxuIiwgIltcclxuICB7XHJcbiAgICBcImNhcHRpb25cIjogXCJOb21lbmNsYWRvcmVzXCIsXHJcbiAgICBcIm1vZHVsZXNcIjogXCJbJ21hc3RlcnMnXVwiLFxyXG4gICAgXCJpY29uXCI6IFwiaS1tZGk6Zm9ybWF0LXNpemUgdy0xZW0gaC0xZW1cIixcclxuICAgIFwiY2hpbGRyZW5zXCI6IFtcclxuICAgICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcImF0dHJpYnV0ZXNfbGlzdFwiLFxyXG4gICAgICAgIFwibW9kdWxlXCI6IFwibWFzdGVyc1wiLFxyXG4gICAgICAgIFwiY2FwdGlvblwiOiBcIkF0cmlidXRvc1wiLFxyXG4gICAgICAgIFwiaWNvblwiOiBcIlwiLFxyXG4gICAgICAgIFwicGF0aFwiOiBcIi9tYXN0ZXJzL2F0dHJpYnV0ZXNfbGlzdFwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJjYXRlZ29yaWVzX2xpc3RcIixcclxuICAgICAgICBcIm1vZHVsZVwiOiBcIm1hc3RlcnNcIixcclxuICAgICAgICBcImNhcHRpb25cIjogXCJDYXRlZ29yXHUwMEVEYXNcIixcclxuICAgICAgICBcImljb25cIjogXCJcIixcclxuICAgICAgICBcInBhdGhcIjogXCIvbWFzdGVycy9jYXRlZ29yaWVzX2xpc3RcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwicmVxdWVzdF9zdGF0dXNlc19saXN0XCIsXHJcbiAgICAgICAgXCJtb2R1bGVcIjogXCJtYXN0ZXJzXCIsXHJcbiAgICAgICAgXCJjYXB0aW9uXCI6IFwiRXN0YWRvcyBkZSBzb2xpY2l0dWRcIixcclxuICAgICAgICBcImljb25cIjogXCJcIixcclxuICAgICAgICBcInBhdGhcIjogXCIvbWFzdGVycy9yZXF1ZXN0X3N0YXR1c2VzX2xpc3RcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwicHJvZHVjdF90eXBlX2xpc3RcIixcclxuICAgICAgICBcIm1vZHVsZVwiOiBcIm1hc3RlcnNcIixcclxuICAgICAgICBcImNhcHRpb25cIjogXCJUaXBvcyBkZSBwcm9kdWN0b1wiLFxyXG4gICAgICAgIFwiaWNvblwiOiBcIlwiLFxyXG4gICAgICAgIFwiaGlkZGVuXCI6IGZhbHNlLFxyXG4gICAgICAgIFwicGF0aFwiOiBcIi9tYXN0ZXJzL3Byb2R1Y3RfdHlwZV9saXN0XCJcclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJjYXB0aW9uXCI6IFwiQWRtaW5pc3RyYWNpXHUwMEYzblwiLFxyXG4gICAgXCJtb2R1bGVzXCI6IFwiWydtYW5hZ2UnXVwiLFxyXG4gICAgXCJpY29uXCI6IFwiaS1tZGk6dmlldy1kYXNoYm9hcmQgdy0xZW0gaC0xZW1cIixcclxuICAgIFwiY2hpbGRyZW5zXCI6IFtcclxuICAgICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcInByb2R1Y3RzX2xpc3RcIixcclxuICAgICAgICBcIm1vZHVsZVwiOiBcIm1hbmFnZVwiLFxyXG4gICAgICAgIFwiY2FwdGlvblwiOiBcIlByb2R1Y3Rvc1wiLFxyXG4gICAgICAgIFwiaWNvblwiOiBcIlwiLFxyXG4gICAgICAgIFwicGF0aFwiOiBcIi9tYW5hZ2UvcHJvZHVjdHNfbGlzdFwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJyZWZ1cmJpc2hlZF9saXN0XCIsXHJcbiAgICAgICAgXCJtb2R1bGVcIjogXCJtYW5hZ2VcIixcclxuICAgICAgICBcImNhcHRpb25cIjogXCJEZXZvbHVjaW9uZXNcIixcclxuICAgICAgICBcImljb25cIjogXCJcIixcclxuICAgICAgICBcInBhdGhcIjogXCIvbWFuYWdlL3JlZnVyYmlzaGVkX2xpc3RcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiY2xpZW50X2xpc3RcIixcclxuICAgICAgICBcIm1vZHVsZVwiOiBcIm1hbmFnZVwiLFxyXG4gICAgICAgIFwiY2FwdGlvblwiOiBcIkNsaWVudGVzXCIsXHJcbiAgICAgICAgXCJpY29uXCI6IFwiXCIsXHJcbiAgICAgICAgXCJwYXRoXCI6IFwiL21hbmFnZS9jbGllbnRfbGlzdFwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJpbnZvaWNlc19saXN0XCIsXHJcbiAgICAgICAgXCJtb2R1bGVcIjogXCJtYW5hZ2VcIixcclxuICAgICAgICBcImNhcHRpb25cIjogXCJGYWN0dXJhc1wiLFxyXG4gICAgICAgIFwiaWNvblwiOiBcIlwiLFxyXG4gICAgICAgIFwicGF0aFwiOiBcIi9tYW5hZ2UvaW52b2ljZXNfbGlzdFwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJvcmRlcnNfbGlzdFwiLFxyXG4gICAgICAgIFwibW9kdWxlXCI6IFwibWFuYWdlXCIsXHJcbiAgICAgICAgXCJjYXB0aW9uXCI6IFwiUGVkaWRvc1wiLFxyXG4gICAgICAgIFwiaWNvblwiOiBcIlwiLFxyXG4gICAgICAgIFwicGF0aFwiOiBcIi9tYW5hZ2Uvb3JkZXJzX2xpc3RcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwicHJvZHVjdF9jYXRlZ29yeV9saXN0XCIsXHJcbiAgICAgICAgXCJtb2R1bGVcIjogXCJtYW5hZ2VcIixcclxuICAgICAgICBcImNhcHRpb25cIjogXCJQcm9kdWN0IGNhdGVnb3J5XCIsXHJcbiAgICAgICAgXCJpY29uXCI6IFwiXCIsXHJcbiAgICAgICAgXCJwYXRoXCI6IFwiL21hbmFnZS9wcm9kdWN0X2NhdGVnb3J5X2xpc3RcIixcclxuICAgICAgICBcImhpZGRlblwiOiB0cnVlXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJwcm9kdWN0X29yZGVyX2xpc3RcIixcclxuICAgICAgICBcIm1vZHVsZVwiOiBcIm1hbmFnZVwiLFxyXG4gICAgICAgIFwiY2FwdGlvblwiOiBcIlByb2R1Y3Qgb3JkZXJcIixcclxuICAgICAgICBcImljb25cIjogXCJcIixcclxuICAgICAgICBcInBhdGhcIjogXCIvbWFuYWdlL3Byb2R1Y3Rfb3JkZXJfbGlzdFwiLFxyXG4gICAgICAgIFwiaGlkZGVuXCI6IHRydWVcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcInByb2R1Y3RzX2F0dHJpYnV0ZV9saXN0XCIsXHJcbiAgICAgICAgXCJtb2R1bGVcIjogXCJtYW5hZ2VcIixcclxuICAgICAgICBcImNhcHRpb25cIjogXCJQcm9kdWN0cyBhdHRyaWJ1dGVcIixcclxuICAgICAgICBcImljb25cIjogXCJcIixcclxuICAgICAgICBcInBhdGhcIjogXCIvbWFuYWdlL3Byb2R1Y3RzX2F0dHJpYnV0ZV9saXN0XCIsXHJcbiAgICAgICAgXCJoaWRkZW5cIjogdHJ1ZVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiYnVzaW5lc3Nfc2VjdG9yc19saXN0XCIsXHJcbiAgICAgICAgXCJtb2R1bGVcIjogXCJtYW5hZ2VcIixcclxuICAgICAgICBcImNhcHRpb25cIjogXCJTZWN0b3JlcyBkZSBuZWdvY2lvc1wiLFxyXG4gICAgICAgIFwiaWNvblwiOiBcIlwiLFxyXG4gICAgICAgIFwicGF0aFwiOiBcIi9tYW5hZ2UvYnVzaW5lc3Nfc2VjdG9yc19saXN0XCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcImtleV93b3Jkc19saXN0XCIsXHJcbiAgICAgICAgXCJtb2R1bGVcIjogXCJtYW5hZ2VcIixcclxuICAgICAgICBcImNhcHRpb25cIjogXCJQYWxhYnJhcyBjbGF2ZXNcIixcclxuICAgICAgICBcImljb25cIjogXCJcIixcclxuICAgICAgICBcInBhdGhcIjogXCIvbWFuYWdlL2tleV93b3Jkc19saXN0XCJcclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJjYXB0aW9uXCI6IFwiVmVudGFzXCIsXHJcbiAgICBcIm1vZHVsZXNcIjogXCJbJ3NhbGUnXVwiLFxyXG4gICAgXCJpY29uXCI6IFwiaS1tZGk6Y2FydC1zYWxlIHctMWVtIGgtMWVtXCIsXHJcbiAgICBcImNoaWxkcmVuc1wiOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJwYXlfd2F5c19saXN0XCIsXHJcbiAgICAgICAgXCJtb2R1bGVcIjogXCJzYWxlXCIsXHJcbiAgICAgICAgXCJjYXB0aW9uXCI6IFwiRm9ybWFzIGRlIHBhZ29cIixcclxuICAgICAgICBcImljb25cIjogXCJcIixcclxuICAgICAgICBcInBhdGhcIjogXCIvc2FsZS9wYXlfd2F5c19saXN0XCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcImNvdXBvbnNfbGlzdFwiLFxyXG4gICAgICAgIFwibW9kdWxlXCI6IFwic2FsZVwiLFxyXG4gICAgICAgIFwiY2FwdGlvblwiOiBcIkN1cG9uZXNcIixcclxuICAgICAgICBcImljb25cIjogXCJcIixcclxuICAgICAgICBcInBhdGhcIjogXCIvc2FsZS9jb3Vwb25zX2xpc3RcIlxyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImNhcHRpb25cIjogXCJDb25maWd1cmFjaVx1MDBGM25cIixcclxuICAgIFwibW9kdWxlc1wiOiBcIlsnc2V0dGluZ3MnXVwiLFxyXG4gICAgXCJpY29uXCI6IFwiaS1tZGk6c2V0dGluZ3Mgdy0xZW0gaC0xZW1cIixcclxuICAgIFwiY2hpbGRyZW5zXCI6IFtcclxuICAgICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcInNldHRpbmdzX2xpc3RcIixcclxuICAgICAgICBcIm1vZHVsZVwiOiBcInNldHRpbmdzXCIsXHJcbiAgICAgICAgXCJjYXB0aW9uXCI6IFwiQ29uZmlndXJhY2lcdTAwRjNuXCIsXHJcbiAgICAgICAgXCJpY29uXCI6IFwiXCIsXHJcbiAgICAgICAgXCJwYXRoXCI6IFwiL3NldHRpbmdzL3NldHRpbmdzX2xpc3RcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwibWVzc2FnZV9ibG9ja3NfbGlzdFwiLFxyXG4gICAgICAgIFwibW9kdWxlXCI6IFwic2V0dGluZ3NcIixcclxuICAgICAgICBcImNhcHRpb25cIjogXCJCbG9xdWVzIGRlIE1lbnNhamVzXCIsXHJcbiAgICAgICAgXCJpY29uXCI6IFwiXCIsXHJcbiAgICAgICAgXCJwYXRoXCI6IFwiL3NldHRpbmdzL21lc3NhZ2VfYmxvY2tzX2xpc3RcIlxyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImNhcHRpb25cIjogXCJTZWd1cmlkYWRcIixcclxuICAgIFwibW9kdWxlc1wiOiBcIlsnc2VjdXJpdHknXVwiLFxyXG4gICAgXCJpY29uXCI6IFwiaS1tZGk6c2VydmVyLXNoaWVsZCB3LTFlbSBoLTFlbSB0ZXh0LWdyYXktMzAwXCIsXHJcbiAgICBcImNoaWxkcmVuc1wiOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJwZXJtaXNzaW9uc19saXN0XCIsXHJcbiAgICAgICAgXCJtb2R1bGVcIjogXCJzZWN1cml0eVwiLFxyXG4gICAgICAgIFwiY2FwdGlvblwiOiBcIlBlcm1pc29zXCIsXHJcbiAgICAgICAgXCJpY29uXCI6IFwiaS1tZGk6Y2lyY2xlLXNtYWxsIHctMWVtIGgtMWVtXCIsXHJcbiAgICAgICAgXCJwYXRoXCI6IFwiL3NlY3VyaXR5L3Blcm1pc3Npb25zX2xpc3RcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwicm9sZXNfbGlzdFwiLFxyXG4gICAgICAgIFwibW9kdWxlXCI6IFwic2VjdXJpdHlcIixcclxuICAgICAgICBcImNhcHRpb25cIjogXCJSb2xlc1wiLFxyXG4gICAgICAgIFwiaWNvblwiOiBcImktbWRpOmNpcmNsZS1zbWFsbCB3LTFlbSBoLTFlbVwiLFxyXG4gICAgICAgIFwicGF0aFwiOiBcIi9zZWN1cml0eS9yb2xlc19saXN0XCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcInVzZXJzX2xpc3RcIixcclxuICAgICAgICBcIm1vZHVsZVwiOiBcInNlY3VyaXR5XCIsXHJcbiAgICAgICAgXCJjYXB0aW9uXCI6IFwiVXN1YXJpb3NcIixcclxuICAgICAgICBcImljb25cIjogXCJpLWhlcm9pY29uczp1c2VyLTE2LXNvbGlkIHctMWVtIGgtMWVtXCIsXHJcbiAgICAgICAgXCJwYXRoXCI6IFwiL3NlY3VyaXR5L3VzZXJzX2xpc3RcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiZGVhbGVyc19saXN0XCIsXHJcbiAgICAgICAgXCJtb2R1bGVcIjogXCJzZWN1cml0eVwiLFxyXG4gICAgICAgIFwiY2FwdGlvblwiOiBcIkRpc3RyaWJ1aWRvcmVzXCIsXHJcbiAgICAgICAgXCJpY29uXCI6IFwiaS1oZXJvaWNvbnM6dXNlci0xNi1zb2xpZCB3LTFlbSBoLTFlbVwiLFxyXG4gICAgICAgIFwicGF0aFwiOiBcIi9zZWN1cml0eS9kZWFsZXJzX2xpc3RcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiYWxsX2xpc3RcIixcclxuICAgICAgICBcIm1vZHVsZVwiOiBcInNlY3VyaXR5XCIsXHJcbiAgICAgICAgXCJjYXB0aW9uXCI6IFwiTGlzdGFyIFVzdWFyaW9zLCBDTGllbnRlcyB5IERpc3RyaWJ1aWRvcmVzXCIsXHJcbiAgICAgICAgXCJpY29uXCI6IFwiaS1oZXJvaWNvbnM6dXNlci0xNi1zb2xpZCB3LTFlbSBoLTFlbVwiLFxyXG4gICAgICAgIFwicGF0aFwiOiBcIi9zZWN1cml0eS9hbGxfbGlzdFwiXHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9XHJcbl0iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXHdhbXA2NFxcXFx3d3dcXFxcYmFuZGVyYXNfZnJvbnRlbmRcXFxcc3JjXFxcXHRoZW1lc1xcXFxhZG1pblxcXFxjb25maWdcXFxcdW5vY3NzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFx3YW1wNjRcXFxcd3d3XFxcXGJhbmRlcmFzX2Zyb250ZW5kXFxcXHNyY1xcXFx0aGVtZXNcXFxcYWRtaW5cXFxcY29uZmlnXFxcXHVub2Nzc1xcXFxzaG9ydGN1dHMudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L3dhbXA2NC93d3cvYmFuZGVyYXNfZnJvbnRlbmQvc3JjL3RoZW1lcy9hZG1pbi9jb25maWcvdW5vY3NzL3Nob3J0Y3V0cy50c1wiO2NvbnN0IHNob3J0Y3V0c19hZG1pbiA9IFt7J2J0bic6ICcnfSxcclxuICAgIHsnYnRuLWFjY2VwdCc6ICcnfSxcclxuICAgIHsnYnRuLWNhbmNlbCc6ICcnfSxcclxuICAgIHsnYnRuLWNyZWF0ZSc6ICcnfSxcclxuICAgIHsnci1jb250YWluZXItbGlzdCc6ICdqdXN0aWZ5LWNlbnRlciBmbGV4IGFsaWduLWNlbnRlciBwLTYgaC1bNDUtcmVtXSd9LFxyXG4gICAgeydyLWNvbnRhaW5lci1wYWdlJzogJ2p1c3RpZnktY2VudGVyIHAtNiB3LWZ1bGwgaC1bNDUtcmVtXSd9LFxyXG4gICAgeydyLWNvbnRhaW5lci1mb3JtJzogJ2JnLXdoaXRlIGRhcms6Ymctc2xhdGUtODAwIHNoYWRvdyBvdmVyZmxvdy1oaWRkZW4gc206cm91bmRlZC1sZyd9LFxyXG4gICAgeydyLWZvb3Rlci1mb3JtJzogJ3JlbGF0aXZlIGZsZXggaXRlbXMtc3RhcnQnfSxcclxuICAgIHsnci1mb290ZXItYnV0dG9uLWZvcm0nOiAnZmxleC0xIGxnOmp1c3RpZnktZW5kIGFsaWduLWVuZCBpdGVtcy1lbmQgbGc6bXQtbm9uZSBtZDptdC0xMCBzbTp3LWZ1bGwgc206anVzdGlmeS1jZW50ZXInfSxcclxuICAgIHsnYnRuLWRlbGV0ZSc6ICchY3Vyc29yLXBvaW50ZXIgbXItMyAhYmctcmVkLTgwMCBob3ZlcjpiZy1yZWQtNjAwIGhvdmVyOmRpc2FibGVkOmJnLWdyYXktMTAwIGRpc2FibGVkOiFiZy13aGl0ZSBkaXNhYmxlZDohdGV4dC1ncmF5LTUwMCBkaXNhYmxlZDpib3JkZXItc29saWQgZGlzYWJsZWQ6Ym9yZGVyLVsxcHhdJ30sXHJcbiAgICB7J3ItYnJlYWRjdW1icyc6ICdiZy13aGl0ZSBweC01IHB5LTUgcm91bmRlZC1tZCBzaGFkb3ctc20nfSxcclxuICAgIHsnci1oZWFkZXItbW9kYWwnOiAndGV4dC1ibGFjayd9LFxyXG4gICAgeydyLWNsb3NlLWljb24nOiAnaS1oZXJvaWNvbnM6eC1tYXJrIHRleHQtYmxhY2snfSxcclxuICAgIHsnci1sb2FkaW5nLWRlZmF1bHQnOiAnaS1zdmctc3Bpbm5lcnM6Ni1kb3RzLXNjYWxlIHRleHQtcHJpbWFyeS04MDAgdGV4dC1bM3JlbV0nfSxcclxuICAgIHsnY3RuLWlucHV0JzogJ3ctZnVsbCBib3JkZXItdGhpbiByaW5nLTEgcmluZy1wcmltYXJ5LTMwMCd9LFxyXG4gICAgeydncmlkLWlucHV0JzogJ3hsOmNvbC1zcGFuLTEgIGxnOmNvbC1zcGFuLTIgbWQ6Y29sLXNwYW4tMiBzbTpjb2wtc3Bhbi00IHhzOmNvbC1zcGFuLTQnfSxcclxuICAgIHsnYnRuLXJnJzogJyFmb250LWJvbGQgcHJlc3Mgci1idXR0b24gb3V0bGluZS1ub25lIGJvcmRlci1ub25lIHJlbGF0aXZlIHNlbGVjdC1ub25lIG92ZXJmbG93LWhpZGRlbiBncm91cCBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgIW91dGxpbmUtbm9uZSByaW5nLTAgcm91bmRlZC1tZCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0xMDAgY3Vyc29yLXBvaW50ZXIgci1idXR0b24tZmlsbGVkLXByaW1hcnkgZGVmYXVsdCBiZy1wcmltYXJ5LTYwMCBhY3RpdmU6IWJnLXByaW1hcnktNjAwIHRleHQtd2hpdGUgaG92ZXI6YmctcHJpbWFyeS03MDAgZGFyazpiZy1wcmltYXJ5LTYwMCBkYXJrOmhvdmVyOmJnLXByaW1hcnktNTAwIGRhcms6YWN0aXZlOiFiZy1wcmltYXJ5LTYwMCAhcm91bmRlZC1mdWxsIHRleHQtc20gZm9udC1tZWRpdW0gcHgtNCBweS0yIGgtOSBiZy1ncmFkaWVudC10by1yIGZyb20tcHJpbWFyeS01MDAgdG8taW5kaWdvLTYwMCBob3Zlcjpmcm9tLXByaW1hcnktNjAwIGhvdmVyOnRvLWluZGlnby03MDAgdGV4dC14bCBmb250LWJvbGQgcHgtMTAgIXB5LTcgdHJhbnNmb3JtIHRyYW5zaXRpb24gaG92ZXI6c2NhbGUtMTEwIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dCd9LFxyXG4gICAgeydpY29uLWJ0bic6ICdpbmxpbmUtYmxvY2sgY3Vyc29yLXBvaW50ZXIgc2VsZWN0LW5vbmUgb3BhY2l0eS03NSB0cmFuc2l0aW9uIGR1cmF0aW9uLTIwMCBlYXNlLWluLW91dCBob3ZlcjpvcGFjaXR5LTEwMCBob3Zlcjp0ZXh0LXRlYWwtNjAwJ30sXHJcbiAgICB7J2JhZGdlLXByaW1hcnknOiAnYmctcHJpbWFyeS01MCB0ZXh0LXByaW1hcnktODAwIHRleHQteHMgZm9udC1tZWRpdW0gbWUtMiBweC0yLjUgcHktMC41IHctMzAgcm91bmRlZCBkYXJrOmJnLWJsdWUtOTAwIGRhcms6dGV4dC1ibHVlLTMwMCd9LF1cclxuZXhwb3J0IGRlZmF1bHQgc2hvcnRjdXRzX2FkbWluXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBdVIsU0FBUSxnQkFBQUEsZUFBYyxlQUEwQjtBQUN2VSxPQUFPLFNBQVM7QUFDaEIsT0FBTyxZQUFZO0FBQ25CLE9BQU8saUJBQWlCO0FBQ3hCLFNBQVEsZUFBYztBQUN0QixPQUFPLFdBQVc7QUFDbEIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxZQUFZO0FBQ25CLE9BQU8sWUFBWTtBQUNuQixPQUFPLG1CQUFtQjtBQUMxQixPQUFPLGlCQUFpQjtBQUN4QixPQUFPLGFBQWE7QUFDcEIsU0FBUSxlQUFjO0FBQ3RCLFNBQVEsNEJBQTJCOzs7QUNkd1A7QUFBQSxFQUN2UjtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLE9BQ0c7OztBQ1JzVyxJQUFNLGdCQUFlO0FBQUEsRUFDOVgsU0FBUztBQUFBLEVBQ1QsU0FBUztBQUFBLEVBQ1QsYUFBYTtBQUFBLEVBQ2IsT0FBTztBQUFBLEVBQ1AsT0FBTztBQUFBLEVBQ1AsT0FBTztBQUFBLElBQ0gsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsT0FBTztBQUFBLElBQ1AsT0FBTztBQUFBLElBQ1AsT0FBTztBQUFBLElBQ1AsT0FBTztBQUFBLElBQ1AsT0FBTztBQUFBLElBQ1AsT0FBTztBQUFBLElBQ1AsT0FBTztBQUFBLElBQ1AsT0FBTztBQUFBLElBQ1AsT0FBTztBQUFBLEVBQ2I7QUFBQSxFQUNFLE1BQU07QUFBQSxJQUNGLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLE9BQU87QUFBQSxJQUNQLE9BQU87QUFBQSxJQUNQLE9BQU87QUFBQSxJQUNQLE9BQU87QUFBQSxJQUNQLE9BQU87QUFBQSxJQUNQLE9BQU87QUFBQSxJQUNQLE9BQU87QUFBQSxJQUNQLE9BQU87QUFBQSxJQUNQLE9BQU87QUFBQSxFQUNiO0FBQUEsRUFDRSxNQUFNO0FBQUEsSUFDRixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxPQUFPO0FBQUEsSUFDUCxPQUFPO0FBQUEsSUFDUCxPQUFPO0FBQUEsSUFDUCxPQUFPO0FBQUEsSUFDUCxPQUFPO0FBQUEsSUFDUCxPQUFPO0FBQUEsSUFDUCxPQUFPO0FBQUEsSUFDUCxPQUFPO0FBQUEsSUFDUCxPQUFPO0FBQUEsRUFDYjtBQUFBLEVBQ0UsU0FBUztBQUFBLElBQ0wsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsT0FBTztBQUFBLElBQ1AsT0FBTztBQUFBLElBQ1AsT0FBTztBQUFBLElBQ1AsT0FBTztBQUFBLElBQ1AsT0FBTztBQUFBLElBQ1AsT0FBTztBQUFBLElBQ1AsT0FBTztBQUFBLElBQ1AsT0FBTztBQUFBLElBQ1AsT0FBTztBQUFBLEVBQ2I7QUFBQSxFQUNFLE9BQU87QUFBQSxJQUNILE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLE9BQU87QUFBQSxJQUNQLE9BQU87QUFBQSxJQUNQLE9BQU87QUFBQSxJQUNQLE9BQU87QUFBQSxJQUNQLE9BQU87QUFBQSxJQUNQLE9BQU87QUFBQSxJQUNQLE9BQU87QUFBQSxJQUNQLE9BQU87QUFBQSxJQUNQLE9BQU87QUFBQSxFQUNiO0FBQUEsRUFDRSxLQUFLO0FBQUEsSUFDRCxNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxPQUFPO0FBQUEsSUFDUCxPQUFPO0FBQUEsSUFDUCxPQUFPO0FBQUEsSUFDUCxPQUFPO0FBQUEsSUFDUCxPQUFPO0FBQUEsSUFDUCxPQUFPO0FBQUEsSUFDUCxPQUFPO0FBQUEsSUFDUCxPQUFPO0FBQUEsSUFDUCxPQUFPO0FBQUEsRUFDYjtBQUFBLEVBQ0UsUUFBUTtBQUFBLElBQ0osTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsT0FBTztBQUFBLElBQ1AsT0FBTztBQUFBLElBQ1AsT0FBTztBQUFBLElBQ1AsT0FBTztBQUFBLElBQ1AsT0FBTztBQUFBLElBQ1AsT0FBTztBQUFBLElBQ1AsT0FBTztBQUFBLElBQ1AsT0FBTztBQUFBLElBQ1AsT0FBTztBQUFBLEVBQ2I7QUFBQSxFQUNFLE9BQU87QUFBQSxJQUNILE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLE9BQU87QUFBQSxJQUNQLE9BQU87QUFBQSxJQUNQLE9BQU87QUFBQSxJQUNQLE9BQU87QUFBQSxJQUNQLE9BQU87QUFBQSxJQUNQLE9BQU87QUFBQSxJQUNQLE9BQU87QUFBQSxJQUNQLE9BQU87QUFBQSxJQUNQLE9BQU87QUFBQSxFQUNiO0FBQUEsRUFDRSxRQUFRO0FBQUEsSUFDSixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxPQUFPO0FBQUEsSUFDUCxPQUFPO0FBQUEsSUFDUCxPQUFPO0FBQUEsSUFDUCxPQUFPO0FBQUEsSUFDUCxPQUFPO0FBQUEsSUFDUCxPQUFPO0FBQUEsSUFDUCxPQUFPO0FBQUEsSUFDUCxPQUFPO0FBQUEsSUFDUCxPQUFPO0FBQUEsRUFDYjtBQUFBLEVBQ0UsT0FBTztBQUFBLElBQ0gsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsT0FBTztBQUFBLElBQ1AsT0FBTztBQUFBLElBQ1AsT0FBTztBQUFBLElBQ1AsT0FBTztBQUFBLElBQ1AsT0FBTztBQUFBLElBQ1AsT0FBTztBQUFBLElBQ1AsT0FBTztBQUFBLElBQ1AsT0FBTztBQUFBLElBQ1AsT0FBTztBQUFBLEVBQ2I7QUFBQSxFQUNFLE9BQU87QUFBQSxJQUNILE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLE9BQU87QUFBQSxJQUNQLE9BQU87QUFBQSxJQUNQLE9BQU87QUFBQSxJQUNQLE9BQU87QUFBQSxJQUNQLE9BQU87QUFBQSxJQUNQLE9BQU87QUFBQSxJQUNQLE9BQU87QUFBQSxJQUNQLE9BQU87QUFBQSxJQUNQLE9BQU87QUFBQSxFQUNiO0FBQUEsRUFDRSxTQUFTO0FBQUEsSUFDTCxNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxPQUFPO0FBQUEsSUFDUCxPQUFPO0FBQUEsSUFDUCxPQUFPO0FBQUEsSUFDUCxPQUFPO0FBQUEsSUFDUCxPQUFPO0FBQUEsSUFDUCxPQUFPO0FBQUEsSUFDUCxPQUFPO0FBQUEsSUFDUCxPQUFPO0FBQUEsSUFDUCxPQUFPO0FBQUEsRUFDYjtBQUFBLEVBQ0UsTUFBTTtBQUFBLElBQ0YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsT0FBTztBQUFBLElBQ1AsT0FBTztBQUFBLElBQ1AsT0FBTztBQUFBLElBQ1AsT0FBTztBQUFBLElBQ1AsT0FBTztBQUFBLElBQ1AsT0FBTztBQUFBLElBQ1AsT0FBTztBQUFBLElBQ1AsT0FBTztBQUFBLElBQ1AsT0FBTztBQUFBLEVBQ2I7QUFBQSxFQUNFLE1BQU07QUFBQSxJQUNGLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLE9BQU87QUFBQSxJQUNQLE9BQU87QUFBQSxJQUNQLE9BQU87QUFBQSxJQUNQLE9BQU87QUFBQSxJQUNQLE9BQU87QUFBQSxJQUNQLE9BQU87QUFBQSxJQUNQLE9BQU87QUFBQSxJQUNQLE9BQU87QUFBQSxJQUNQLE9BQU87QUFBQSxFQUNiO0FBQUEsRUFDRSxLQUFLO0FBQUEsSUFDRCxNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxPQUFPO0FBQUEsSUFDUCxPQUFPO0FBQUEsSUFDUCxPQUFPO0FBQUEsSUFDUCxPQUFPO0FBQUEsSUFDUCxPQUFPO0FBQUEsSUFDUCxPQUFPO0FBQUEsSUFDUCxPQUFPO0FBQUEsSUFDUCxPQUFPO0FBQUEsSUFDUCxPQUFPO0FBQUEsRUFDYjtBQUFBLEVBQ0UsTUFBTTtBQUFBLElBQ0YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsT0FBTztBQUFBLElBQ1AsT0FBTztBQUFBLElBQ1AsT0FBTztBQUFBLElBQ1AsT0FBTztBQUFBLElBQ1AsT0FBTztBQUFBLElBQ1AsT0FBTztBQUFBLElBQ1AsT0FBTztBQUFBLElBQ1AsT0FBTztBQUFBLElBQ1AsT0FBTztBQUFBLEVBQ2I7QUFBQSxFQUNFLFFBQVE7QUFBQSxJQUNKLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLE9BQU87QUFBQSxJQUNQLE9BQU87QUFBQSxJQUNQLE9BQU87QUFBQSxJQUNQLE9BQU87QUFBQSxJQUNQLE9BQU87QUFBQSxJQUNQLE9BQU87QUFBQSxJQUNQLE9BQU87QUFBQSxJQUNQLE9BQU87QUFBQSxJQUNQLE9BQU87QUFBQSxFQUNiO0FBQUEsRUFDRSxRQUFRO0FBQUEsSUFDSixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxPQUFPO0FBQUEsSUFDUCxPQUFPO0FBQUEsSUFDUCxPQUFPO0FBQUEsSUFDUCxPQUFPO0FBQUEsSUFDUCxPQUFPO0FBQUEsSUFDUCxPQUFPO0FBQUEsSUFDUCxPQUFPO0FBQUEsSUFDUCxPQUFPO0FBQUEsSUFDUCxPQUFPO0FBQUEsRUFDYjtBQUFBLEVBQ0UsUUFBUTtBQUFBLElBQ0osTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsT0FBTztBQUFBLElBQ1AsT0FBTztBQUFBLElBQ1AsT0FBTztBQUFBLElBQ1AsT0FBTztBQUFBLElBQ1AsT0FBTztBQUFBLElBQ1AsT0FBTztBQUFBLElBQ1AsT0FBTztBQUFBLElBQ1AsT0FBTztBQUFBLElBQ1AsT0FBTztBQUFBLEVBQ2I7QUFBQSxFQUNFLFNBQVM7QUFBQSxJQUNMLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLE9BQU87QUFBQSxJQUNQLE9BQU87QUFBQSxJQUNQLE9BQU87QUFBQSxJQUNQLE9BQU87QUFBQSxJQUNQLE9BQU87QUFBQSxJQUNQLE9BQU87QUFBQSxJQUNQLE9BQU87QUFBQSxJQUNQLE9BQU87QUFBQSxJQUNQLE9BQU87QUFBQSxFQUNiO0FBQUEsRUFDRSxNQUFNO0FBQUEsSUFDRixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxPQUFPO0FBQUEsSUFDUCxPQUFPO0FBQUEsSUFDUCxPQUFPO0FBQUEsSUFDUCxPQUFPO0FBQUEsSUFDUCxPQUFPO0FBQUEsSUFDUCxPQUFPO0FBQUEsSUFDUCxPQUFPO0FBQUEsSUFDUCxPQUFPO0FBQUEsSUFDUCxPQUFPO0FBQUEsRUFDYjtBQUFBLEVBQ0UsTUFBTTtBQUFBLElBQ0YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsT0FBTztBQUFBLElBQ1AsT0FBTztBQUFBLElBQ1AsT0FBTztBQUFBLElBQ1AsT0FBTztBQUFBLElBQ1AsT0FBTztBQUFBLElBQ1AsT0FBTztBQUFBLElBQ1AsT0FBTztBQUFBLElBQ1AsT0FBTztBQUFBLElBQ1AsT0FBTztBQUFBLEVBQ1o7QUFDSDs7O0FDalNBLElBQU0sWUFBWTtBQUFBLEVBQ2QsTUFBTTtBQUFBLEVBQ04sT0FBTztBQUFBLEVBQ1AsT0FBTztBQUFBLEVBQ1AsT0FBTztBQUFBLEVBQ1AsT0FBTztBQUFBLEVBQ1AsT0FBTztBQUFBLEVBQ1AsT0FBTztBQUFBLEVBQ1AsT0FBTztBQUFBLEVBQ1AsT0FBTztBQUFBLEVBQ1AsT0FBTztBQUFBLEVBQ1AsT0FBTztBQUNYO0FBdUNBLElBQU0sVUFBVTtBQUFBLEVBQ1osTUFBTTtBQUFBLEVBQ04sT0FBTztBQUFBLEVBQ1AsT0FBTztBQUFBLEVBQ1AsT0FBTztBQUFBLEVBQ1AsT0FBTztBQUFBLEVBQ1AsT0FBTztBQUFBLEVBQ1AsT0FBTztBQUFBLEVBQ1AsT0FBTztBQUFBLEVBQ1AsT0FBTztBQUFBLEVBQ1AsT0FBTztBQUFBLEVBQ1AsT0FBTztBQUNYO0FBR08sSUFBTSxjQUFjLEVBQUMsU0FBUyxTQUFTLFdBQVcsR0FBRyxjQUFhOzs7QUNyRXpFO0FBQUEsRUFDRTtBQUFBLElBQ0UsU0FBVztBQUFBLElBQ1gsU0FBVztBQUFBLElBQ1gsTUFBUTtBQUFBLElBQ1IsV0FBYTtBQUFBLE1BQ1g7QUFBQSxRQUNFLE1BQVE7QUFBQSxRQUNSLFFBQVU7QUFBQSxRQUNWLFNBQVc7QUFBQSxRQUNYLE1BQVE7QUFBQSxRQUNSLE1BQVE7QUFBQSxNQUNWO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBUTtBQUFBLFFBQ1IsUUFBVTtBQUFBLFFBQ1YsU0FBVztBQUFBLFFBQ1gsTUFBUTtBQUFBLFFBQ1IsTUFBUTtBQUFBLE1BQ1Y7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFRO0FBQUEsUUFDUixRQUFVO0FBQUEsUUFDVixTQUFXO0FBQUEsUUFDWCxNQUFRO0FBQUEsUUFDUixNQUFRO0FBQUEsTUFDVjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQVE7QUFBQSxRQUNSLFFBQVU7QUFBQSxRQUNWLFNBQVc7QUFBQSxRQUNYLE1BQVE7QUFBQSxRQUNSLFFBQVU7QUFBQSxRQUNWLE1BQVE7QUFBQSxNQUNWO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBO0FBQUEsSUFDRSxTQUFXO0FBQUEsSUFDWCxTQUFXO0FBQUEsSUFDWCxNQUFRO0FBQUEsSUFDUixXQUFhO0FBQUEsTUFDWDtBQUFBLFFBQ0UsTUFBUTtBQUFBLFFBQ1IsUUFBVTtBQUFBLFFBQ1YsU0FBVztBQUFBLFFBQ1gsTUFBUTtBQUFBLFFBQ1IsTUFBUTtBQUFBLE1BQ1Y7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFRO0FBQUEsUUFDUixRQUFVO0FBQUEsUUFDVixTQUFXO0FBQUEsUUFDWCxNQUFRO0FBQUEsUUFDUixNQUFRO0FBQUEsTUFDVjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQVE7QUFBQSxRQUNSLFFBQVU7QUFBQSxRQUNWLFNBQVc7QUFBQSxRQUNYLE1BQVE7QUFBQSxRQUNSLE1BQVE7QUFBQSxNQUNWO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBUTtBQUFBLFFBQ1IsUUFBVTtBQUFBLFFBQ1YsU0FBVztBQUFBLFFBQ1gsTUFBUTtBQUFBLFFBQ1IsTUFBUTtBQUFBLE1BQ1Y7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFRO0FBQUEsUUFDUixRQUFVO0FBQUEsUUFDVixTQUFXO0FBQUEsUUFDWCxNQUFRO0FBQUEsUUFDUixNQUFRO0FBQUEsTUFDVjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQVE7QUFBQSxRQUNSLFFBQVU7QUFBQSxRQUNWLFNBQVc7QUFBQSxRQUNYLE1BQVE7QUFBQSxRQUNSLE1BQVE7QUFBQSxRQUNSLFFBQVU7QUFBQSxNQUNaO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBUTtBQUFBLFFBQ1IsUUFBVTtBQUFBLFFBQ1YsU0FBVztBQUFBLFFBQ1gsTUFBUTtBQUFBLFFBQ1IsTUFBUTtBQUFBLFFBQ1IsUUFBVTtBQUFBLE1BQ1o7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFRO0FBQUEsUUFDUixRQUFVO0FBQUEsUUFDVixTQUFXO0FBQUEsUUFDWCxNQUFRO0FBQUEsUUFDUixNQUFRO0FBQUEsUUFDUixRQUFVO0FBQUEsTUFDWjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQVE7QUFBQSxRQUNSLFFBQVU7QUFBQSxRQUNWLFNBQVc7QUFBQSxRQUNYLE1BQVE7QUFBQSxRQUNSLE1BQVE7QUFBQSxNQUNWO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBUTtBQUFBLFFBQ1IsUUFBVTtBQUFBLFFBQ1YsU0FBVztBQUFBLFFBQ1gsTUFBUTtBQUFBLFFBQ1IsTUFBUTtBQUFBLE1BQ1Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFLFNBQVc7QUFBQSxJQUNYLFNBQVc7QUFBQSxJQUNYLE1BQVE7QUFBQSxJQUNSLFdBQWE7QUFBQSxNQUNYO0FBQUEsUUFDRSxNQUFRO0FBQUEsUUFDUixRQUFVO0FBQUEsUUFDVixTQUFXO0FBQUEsUUFDWCxNQUFRO0FBQUEsUUFDUixNQUFRO0FBQUEsTUFDVjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQVE7QUFBQSxRQUNSLFFBQVU7QUFBQSxRQUNWLFNBQVc7QUFBQSxRQUNYLE1BQVE7QUFBQSxRQUNSLE1BQVE7QUFBQSxNQUNWO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBO0FBQUEsSUFDRSxTQUFXO0FBQUEsSUFDWCxTQUFXO0FBQUEsSUFDWCxNQUFRO0FBQUEsSUFDUixXQUFhO0FBQUEsTUFDWDtBQUFBLFFBQ0Us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LENBQUM7QUFBQSxNQUNELFlBQVk7QUFBQSxNQUNaLFFBQVE7QUFBQSxJQUNaO0FBQUEsSUFDQSxjQUFjO0FBQUEsTUFDVixTQUFTO0FBQUEsUUFDTDtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBSUE7QUFBQTtBQUFBO0FBQUEsUUFHQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQTtBQUFBO0FBQUEsUUFHQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNKO0FBQUEsTUFDQSxTQUFTLENBQUMsVUFBVTtBQUFBLElBQ3hCO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDTCxPQUFPO0FBQUEsUUFDSCxNQUFNLFlBQVksS0FBSztBQUFBLFFBQ3ZCLE1BQU0sWUFBWSxLQUFLO0FBQUEsUUFDdkIsT0FBTyxZQUFZLHNCQUFzQjtBQUFBLFFBQ3pDLFFBQVEsWUFBWSxVQUFVO0FBQUEsUUFDOUIsT0FBTyxZQUFZLGtCQUFrQjtBQUFBLFFBQ3JDLFFBQVEsWUFBWSxZQUFZO0FBQUEsUUFDaEMsT0FBTyxZQUFZLGFBQWE7QUFBQSxRQUNoQyxPQUFPLFlBQVksWUFBWTtBQUFBLE1BQ25DO0FBQUEsSUFDSjtBQUFBLElBQ0EsUUFBUTtBQUFBLE1BQ0osTUFBTSxPQUFPLElBQUksU0FBUztBQUFBLE1BQzFCLEtBQUs7QUFBQSxRQUNELFNBQVM7QUFBQSxNQUNiO0FBQUEsSUFDSjtBQUFBLElBQ0EsT0FBTztBQUFBLE1BQ0gsY0FBYztBQUFBLE1BQ2QsUUFBUTtBQUFBLE1BQ1IsUUFBUTtBQUFBLE1BQ1IsZUFBZTtBQUFBLFFBQ1gsVUFBVTtBQUFBLFVBQ04sZUFBZTtBQUFBO0FBQUEsVUFFZixjQUFjLFFBQVEsSUFBSSxpQkFBaUI7QUFBQSxRQUMvQztBQUFBLE1BQ0o7QUFBQTtBQUFBLE1BRUEsWUFBWTtBQUFBLE1BQ1osdUJBQXVCO0FBQUEsTUFDdkIsV0FBVyxRQUFRLElBQUksZUFBZTtBQUFBLElBQzFDO0FBQUEsSUFDQSxLQUFLO0FBQUEsTUFDRCxxQkFBcUI7QUFBQSxRQUNqQixNQUFNO0FBQUEsVUFDRixZQUFZO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFJWjtBQUFBLFVBQ0EsbUJBQW1CO0FBQUEsUUFDdkI7QUFBQSxNQUNKO0FBQUEsSUFDSjtBQUFBLEVBRUo7QUFDSixDQUFDOyIsCiAgIm5hbWVzIjogWyJkZWZpbmVDb25maWciLCAiZGVmaW5lQ29uZmlnIl0KfQo=
