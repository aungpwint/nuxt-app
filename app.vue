<script setup lang="ts">
import { Sonner } from '@/components/ui/sonner'
import { ConfigProvider } from 'radix-vue'

const colorMode = useColorMode()

const color = computed(() => colorMode.value === 'dark' ? '#09090b' : '#ffffff')

const { theme, radius } = useCustomize()

useHead({
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { key: 'theme-color', name: 'theme-color', content: color },
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' },
  ],
  htmlAttrs: {
    lang: 'en',
  },
  bodyAttrs: {
    class: computed(() => `theme-${theme.value}`),
    style: computed(() => `--radius: ${radius.value}rem;`),
  },
})

const title = 'Nuxt Shadcn UI - Dashboard Template'
const description = 'This dashboard, built with Nuxt, Shadcn UI, and UnoCSS. It includes a dark mode toggle and is optimized for performance and data efficiency.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogUrl: 'https://dashboard.dianprata.com',
  ogImage: 'https://nuxt-shadcn-dashboard.vercel.app/social-card.png',
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: 'https://nuxt-shadcn-dashboard.vercel.app/social-card.png',
  twitterCard: 'summary_large_image',
})

const router = useRouter()

const useIdFunction = () => useId()
</script>

<template>
  <ConfigProvider :use-id="useIdFunction">
<div>
<h1>Hello World</h1>
<Button size="xs" variant="outline">
              Button xs
            </Button>
            <Button size="sm" variant="outline">
              Button sm
            </Button>
            <Button variant="outline">
              Button Default
            </Button>
            <Button size="lg" variant="outline">
              Button lg
            </Button>
            <Button size="icon" variant="outline">
              <Icon name="i-lucide-chevron-right" />
            </Button>
</div>
  </ConfigProvider>
</template>
