// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      script: [
        {
          src: "//js.hsforms.net/forms/embed/v2.js",
        },
      ],
    },
  },

  css: ["@/assets/scss/main.scss"],

  modules: [
    "@nuxtjs/device",
    "@nuxt/image-edge",
    "@pinia/nuxt",
    "@vueuse/nuxt",
  ],
  device: {
    refreshOnResize: true,
  },

  build: {
    transpile: ["@fawmi/vue-google-maps"],
  },

  runtimeConfig: {
    public: {
      baseWp: "https://vasa.ninjastagebox.com/wp-json/wp/v2",
      cusWp: "https://vasa.ninjastagebox.com/wp-json/api",
      // baseSiteUrl: "https://virginactive.co.za",
      baseSiteUrl: "https://vasa-fe.vercel.app",
      // GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
      GOOGLE_MAPS_API_KEY: "AIzaSyBaXnYjMr1QWhlfU4H2Q6vmPteXlKiHxF8",
    },
  },
});
