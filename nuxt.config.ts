// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false, // Disable SSR

    app: {
        baseURL: '/', // Set if Laravel serves it from a subdirectory
    },

    modules: [
        '@unocss/nuxt',
        '@nuxtjs/color-mode',
        '@nuxt/icon',
        '@pinia/nuxt',
        '@vueuse/nuxt',
        '@nuxt/eslint',
        './modules/shadcn',
    ],

    shadcn: {
        prefix: '',
        componentDir: '@/components/ui',
    },

    pinia: {
        storesDirs: ['./stores/**'],
    },

    components: [
        { path: '~/components', priority: 10 }, // Default priority
        { path: '~/components/ui', priority: 20 }, // Higher priority to override
    ],

    icon: {
        provider: 'iconify', // Uses Iconify provider
        serverBundle: false,
    },

    colorMode: {
        classSuffix: '',
    },

    imports: {
        dirs: ['./lib'],
    },

    css: ['@unocss/reset/tailwind.css', '@/assets/styles/global.css'],

    features: {
        // For UnoCSS
        inlineStyles: false,
    },

    build: {
        transpile: [],
    },

    runtimeConfig: {
        public: {
            apiBase: process.env.API_BASE_URL || 'http://localhost:8000/api', // Laravel API
        },
    },

    eslint: {
        config: {
            stylistic: true,
        },
    },

    devtools: { enabled: true },

    compatibilityDate: '2024-11-01',
})
