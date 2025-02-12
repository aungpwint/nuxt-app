import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const currentDir = dirname(fileURLToPath(import.meta.url))

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    '@unocss/nuxt',
    'shadcn-nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/eslint',
  ],

  components: [
    {
      path: join(currentDir, './components'),
      // this is required else Nuxt will autoImport `.ts` file
      extensions: ['.vue'],
    },
  ],

  imports: {
    dirs: [
      './lib',
    ],
  },
  devtools: { enabled: true },

  css: [
    '@unocss/reset/tailwind.css',
  ],

  colorMode: {
    classSuffix: '',
  },

  features: {
    // For UnoCSS
    inlineStyles: false,
  }, compatibilityDate: '2024-11-01',

  eslint: {
    config: {
      stylistic: true,
    },
  },
})
