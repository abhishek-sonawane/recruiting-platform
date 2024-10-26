import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: globals.browser,
    },
    ignores: [
      "**/node_modules/**", // Ignore node_modules directory
      "**/dist/**",         // Ignore dist directory
      "**/*.test.js",       // Ignore test files
      "**/*.spec.js",       // Ignore spec files
      "eslint.config.mjs",
    ]
  },
  pluginJs.configs.recommended,
];



