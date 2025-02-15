// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@unocss/nuxt',
        'shadcn-nuxt',
        '@nuxtjs/color-mode',
        '@nuxt/icon',
        '@pinia/nuxt',
        '@vueuse/nuxt',
        '@nuxt/eslint',
    ],

    components: [
        { path: '~/components', priority: 10 }, // Default priority
        { path: '~/components/ui', priority: 20 }, // Higher priority to override
    ],

    icon: {
        provider: 'server', // <-- this
        serverBundle: false,
    },

    ssr: false,

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

    eslint: {
        config: {
            stylistic: true,
        },
    },

    devtools: { enabled: true },

    compatibilityDate: '2024-11-01',
})
