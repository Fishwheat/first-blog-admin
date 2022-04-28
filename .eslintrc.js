module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    //"eslint:recommended",
    '@vue/airbnb',
    "@vue/typescript/recommended",
    //"@vue/prettier",
    //"@vue/prettier/@typescript-eslint",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    'max-len': ["error", { "code": 200 }],
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'import/prefer-default-export': 0,
    'no-param-reassign': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    'global-require':0, // 解决 'en-us': require('./en-us'), 的警告
  },
};
