module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: [
    "dist",
    ".eslintrc.cjs",
    "node_modules/",
    "dist/",
    "env.d.ts",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "react", "react-hooks"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "react/react-in-jsx-scope": "off",
    "prefer-const": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
