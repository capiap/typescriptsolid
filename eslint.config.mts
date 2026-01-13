import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
import prettierPlugin from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";

export default defineConfig([
  {
    files: ["**/*.{js,ts}"],

    languageOptions: {
      parser: tseslint.parser,
      globals: globals.node,
      ecmaVersion: "latest",

      // 🔥 Correção obrigatória para ativar o autofix ao salvar
      sourceType: "module",
    },

    plugins: {
      prettier: prettierPlugin,
    },

    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      eslintConfigPrettier, // Sempre por último
    ],

    rules: {
      "prettier/prettier": "error",
    },
  },
]);
