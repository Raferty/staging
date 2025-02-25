// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  app: {
    baseURL: "/staging/",
    buildAssetsDir: "assets",
  },

  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
        },
      },
    },
  },

  css: ["@/assets/styles/index.scss"],

  components: {
    global: true,
    dirs: ["~/components/_icons", "~/components/_ui", "~/components"],
  },

  modules: ["@pinia/nuxt"],

  plugins: ["~/plugins/countdown"],
});
