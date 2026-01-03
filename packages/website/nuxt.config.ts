// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";
import config from "./config.json" with { type: "json" };

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
  nitro: {
    prerender: {
      routes: ["/"],
    },
  },
  runtimeConfig: {
    public: {
      releaseUrlBase: process.env.RELEASE_URL_BASE || config.releaseUrlBase,
      version: process.env.APP_VERSION || config.version,
      currentYear: config.currentYear,
    },
  },
  ssr: true,
});
