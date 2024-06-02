// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/fonts'
  ],
  typescript: {
    shim: false
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: 'https://api.sampleapis.com'
    }
  }
})
