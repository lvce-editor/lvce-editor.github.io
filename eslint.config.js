import * as config from "@lvce-editor/eslint-config";
import * as actions from "@lvce-editor/eslint-plugin-github-actions";
import vue from "eslint-plugin-vue";
import nuxtPlugin from "@nuxt/eslint-plugin";

export default [
  ...config.default,

  ...actions.default,
  {
    rules: {
      "github-actions/needs": "off",
      "github-actions/permissions": "off",
      "unicorn/text-encoding-identifier-case": "off",
      "@typescript-eslint/prefer-readonly-parameter-types": "off",
    },
  },
  {
    files: ["**/*.vue"],
    plugins: {
      vue,
    },
    languageOptions: {
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
    },
    rules: {
      ...vue.configs["flat/essential"].rules,
      ...vue.configs["flat/strongly-recommended"].rules,
      ...vue.configs["flat/recommended"].rules,
    },
  },
  {
    files: ["packages/website/**/*.{js,ts,vue}"],
    plugins: {
      nuxt: nuxtPlugin,
    },
    rules: {
      ...nuxtPlugin.rules,
    },
  },
  {
    ignores: ["**/.nuxt/**", "**/playwright.config.ts"],
  },
];
