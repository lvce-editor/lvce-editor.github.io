import * as config from "@lvce-editor/eslint-config";
import * as actions from "@lvce-editor/eslint-plugin-github-actions";

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
    ignores: ["**/.nuxt/**", "**/playwright.config.ts"],
  },
];
