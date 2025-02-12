<script setup lang="ts">
import { ConfigProvider } from "radix-vue";

const colorMode = useColorMode();

const color = computed(() =>
  colorMode.value === "dark" ? "#09090b" : "#ffffff",
);

const { theme, radius } = useCustomize();

useHead({
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { key: "theme-color", name: "theme-color", content: color },
  ],
  link: [{ rel: "icon", href: "/favicon.ico" }],
  htmlAttrs: {
    lang: "en",
  },
  bodyAttrs: {
    class: computed(() => `theme-${theme.value}`),
    style: computed(() => `--radius: ${radius.value}rem;`),
  },
});

const title = "Nuxt Shadcn UI - Dashboard Template";
const description =
  "This dashboard, built with Nuxt, Shadcn UI, and UnoCSS. It includes a dark mode toggle and is optimized for performance and data efficiency.";

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogUrl: "https://dashboard.dianprata.com",
  ogImage: "https://nuxt-shadcn-dashboard.vercel.app/social-card.png",
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: "https://nuxt-shadcn-dashboard.vercel.app/social-card.png",
  twitterCard: "summary_large_image",
});

const useIdFunction = () => useId();
</script>

<template>
  <ConfigProvider :use-id="useIdFunction">
    <div>
      <h1>Welocme</h1>
    </div>
  </ConfigProvider>
</template>
