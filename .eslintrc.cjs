module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
  ],
  globals: {
    defineProps: "readonly",
    defineExpose: "readonly",
    defineEmits: "readonly",
    useSlots: "readonly",
    withDefaults: "readonly",
    computed: "readonly",
    reactive: "readonly",
    ref: "readonly",
    toRefs: "readonly",
    unref: "readonly",
    watch: "readonly",
    watchEffect: "readonly",
    inject: "readonly",
    provide: "readonly",
    onMounted: "readonly",
    onBeforeMount: "readonly",
    onUnmounted: "readonly",
    Ref: "readonly",
    MaybeRef: "readonly",
    PropType: "readonly",
    FilterQuery: "readonly",
    Nullable: "readonly",
    FormValidation: "readonly",
    SelectRef: "readonly",
    InputRef: "readonly",
    ComputedRef: "readonly",
    Pagination: "readonly",
    PaginationCursor: "readonly",
    PaginationInput: "readonly",
    TableModal: "readonly",
    Fn: "readonly",
    SRecord: "readonly",
    log: "readonly",
  },
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2020,
    sourceType: "module",

    // jsxPragma: 'preserve',
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
  },
  rules: {
    semi: ["error", "never"],

    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    // 'simple-import-sort/imports': 'off',
    // 'simple-import-sort/exports': 'error',
    // 'sort-imports': 'off',
    // 'import/order': 'off',
    "no-inner-declarations": "off",
    "@typescript-eslint/no-unused-vars": "off",
    // '@typescript-eslint/no-unused-vars': ['warning', { argsIgnorePattern: '^_' }],
    // '@typescript-eslint/no-unused-vars': ['warn', { varsIgnorePattern: '^(props|emits)' }],
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
        semi: false,
      },
    ],
    "vue/script-setup-uses-vars": "error",
    "vue/attribute-hyphenation": "off",
    "vue/require-default-prop": "off",
    "vue/multiline-html-element-content-newline": "off",
    "vue/singleline-html-element-content-newline": "off",
    "vue/custom-event-name-casing": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-non-null-assertion": "off",

    // 'vue/max-attributes-per-line': ['error', { singleline: 5 }],
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "always",
          normal: "never",
          component: "always",
        },
        svg: "always",
        math: "always",
      },
    ],
  },
  overrides: [
    {
      files: ["*.tsx", "*.jsx"],
      parser: "@typescript-eslint/parser",
    },
  ],
  plugins: ["simple-import-sort"],
}
