import * as config from "@lvce-editor/eslint-config";
import * as actions from "@lvce-editor/eslint-plugin-github-actions";
import vue from "eslint-plugin-vue";
import nuxtPlugin from "@nuxt/eslint-plugin";
import vueParser from "vue-eslint-parser";

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
    files: ["**/nuxt.config.ts"],
    rules: {
      "perfectionist/sort-objects": "off",
    },
  },
  {
    files: ["**/*.vue"],
    plugins: {
      vue,
    },
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: "@typescript-eslint/parser",
        ecmaVersion: "latest",
        sourceType: "module",
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
      "nuxt/prefer-import-meta": "error",
      "nuxt/nuxt-config-keys-order": "warn",
      "nuxt/no-nuxt-config-test-key": "error",
    },
  },
  {
    ignores: ["**/.nuxt/**", "**/playwright.config.ts"],
  },
];
