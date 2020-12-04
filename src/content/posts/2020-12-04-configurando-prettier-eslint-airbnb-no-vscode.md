---
template: blog-post
title: Configurando Prettier, ESLint, Airbnb no VSCode
slug: /configurando-vscode
date: 2020-12-03 23:27
description: Como configurar eslint, prettier no estilo Airbnb dentro do VSCode
---

```terminal
yarn create react-app hello-world

npm install eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react prettier eslint-config-prettier eslint-plugin-prettier husky lint-staged eslint-plugin-compat --save-dev

yarn add eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react prettier eslint-config-prettier eslint-plugin-prettier husky lint-staged eslint-plugin-compat --dev

touch .eslintrc

{
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "jest": true,
    "node": true
  },
  "extends": [
    "airbnb",
    "plugin:jsx-a11y/strict",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "prettier/react",
    "plugin:compat/recommended",
    "plugin:cypress/recommended"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "modules": true,
      "experimentalObjectRestSpread": true
    }
  },
  "plugins": ["react", "react-hooks", "jsx-a11y", "prettier", "compat"],
  "rules": {
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [".js", ".jsx"]
      }
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "no-console": "off",
    "react/prop-types": 0,
    "prettier/prettier": ["error"],
    "compat/compat": "off"
  }
}
```