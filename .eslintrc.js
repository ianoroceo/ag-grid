module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  globals: {
    $: true,
    $$: true,
    browser: true,
    expect: true,
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "arrow-parents": [0, "as-needed"],
    "require-jsdoc": "off",
    "brace-style": [0, "allman", { allowSingleLine: true }],
    "max-len": ["error", { code: 300 }],
    "object-curly-spacing": ["error", "always"],
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/explicit-module-boundary-types": "off",
  },
};
