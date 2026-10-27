import js from "@eslint/js";
import globals from "globals";
import eslintConfigPrettier from "eslint-config-prettier"; // Импортируем пакет заглушения конфликтов

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      "no-var": "error",
      "prefer-const": "error",
      "no-console": "warn",
    },
  },
  eslintConfigPrettier,
];
