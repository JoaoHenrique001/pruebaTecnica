// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint'],
  pages: false,
  
  css: [
    '~/assets/css/reset.css',      // Archivo reset.css
    '~/assets/css/main.scss',      // Archivo SCSS principal
  ],
})
