// import { fileURLToPath } from 'node:url'
// import { dirname, join } from 'node:path'

// const currentDir = dirname(fileURLToPath(import.meta.url))

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

    // components: [
    //     {
    //         path: join(currentDir, './components'),
    //         // this is required else Nuxt will autoImport `.ts` file
    //         extensions: ['.vue'],
    //     },
    // ],

    icon: {
        provider: 'server', // <-- this
        serverBundle: false,
    },

    ssr: false,

    components: {
        dirs: [
            '~/components', // Auto-import components in this directory
            // Add specific directories if needed
        ],
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

    eslint: {
        config: {
            stylistic: true,
        },
    },

    devtools: { enabled: true },

    compatibilityDate: '2024-11-01',
})
