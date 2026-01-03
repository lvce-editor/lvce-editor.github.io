// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  app: {
    head: {
      link: [{ href: "/favicon.ico", rel: "icon", type: "image/x-icon" }],
      meta: [
        { charset: "utf-8" },
        { content: "width=device-width, initial-scale=1", name: "viewport" },
        {
          content: "Lvce Editor - A modern code editor for developers",
          name: "description",
        },
      ],
      title: "Lvce Editor",
    },
  },
  devtools: { enabled: true },
  modules: ["@nuxtjs/seo", "@nuxt/fonts"],
  ssr: true,

  nitro: {
    prerender: {
      routes: ["/"],
    },
  },

  runtimeConfig: {
    public: {
      releaseUrlBase:
        process.env.RELEASE_URL_BASE ||
        "https://github.com/lvce-editor/lvce-editor/releases/download",
      version: process.env.APP_VERSION || "0.70.0",
    },
  },
});
