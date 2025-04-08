export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint'],
  css: [
    '~/assets/css/reset.css',
    '~/assets/css/main.scss',
  ],
});
