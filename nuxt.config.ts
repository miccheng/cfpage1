// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  modules: ["nitro-cloudflare-dev"],
  nitro: {
    preset: "cloudflare-pages",
  },
  devtools: { enabled: true },
});
