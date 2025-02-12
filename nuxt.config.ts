import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const currentDir = dirname(fileURLToPath(import.meta.url))

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@unocss/nuxt',
    'shadcn-nuxt',
    '@nuxtjs/color-mode',
  ],

  css: [
    '@unocss/reset/tailwind.css',
  ],

  colorMode: {
    classSuffix: '',
  },

  components: [
    {
      path: join(currentDir, './components'),
      // this is required else Nuxt will autoImport `.ts` file
      extensions: ['.vue'],
    },
  ],

  features: {
    // For UnoCSS
    inlineStyles: false,
  },

  imports: {
    dirs: [
      './lib',
    ],
  },
})
