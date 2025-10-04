// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  image: {
    domains: ["https://cdn.dummyjson.com/"],
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  css: ["@/assets/css/main.css"],
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxt/icon",
    "@nuxt/image",
  ],
  googleFonts: {
    families: {
      Montserrat: [400, 500, 700],
      "Playfair Display": [400, 600, 700],
    },
  },
});
