import { defineConfig } from "eslint/config";
import * as config from "@lvce-editor/eslint-config";
import vue from "eslint-plugin-vue";
import nuxtPlugin from "@nuxt/eslint-plugin";
import vueParser from "vue-eslint-parser";

export default defineConfig([
  ...config.default,

  ...config.recommendedActions,
  {
    rules: {
      "github-actions/action-versions": "off",
      "github-actions/needs": "off",
      "github-actions/no-e2e-in-release": "off",
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
    files: [".devcontainer/devcontainer.json"],
    rules: {
      "devcontainer/allowed-image": "off",
      "devcontainer/require-desktop-lite-feature": "off",
    },
  },
  {
    files: ["packages/e2e/test/**/*.ts"],
    rules: {
      "e2e/no-direct-click": "off",
      "e2e/no-imports": "off",
      "unicorn/isolated-functions": "off",
    },
  },
  {
    ignores: ["**/.nuxt/**", "**/.output/**", "**/playwright.config.ts"],
  },
]);
