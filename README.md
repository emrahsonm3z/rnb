# React Native Starter

## Setup project

```
npx react-native init rnb
```

create **src/** folder and **App.js** file move in **src/**

## Configure ESLint and Prettier

remove package in **package.json**:

```
@react-native-community/eslint-config
```

init eslint:

```
npx eslint --init
```

- How would you like to use ESLint? To check syntax, find problems, and enforce code style
- What type of modules does your project use? JavaScript modules (import/export)
- Which framework does your project use? React
- Does your project use TypeScript? No
- Where does your code run? Node
- How would you like to define a style for your project? Use a popular style guide
- Which style guide do you want to follow? Airbnb: https://github.com/airbnb/javascript
- What format do you want your config file to be in? JavaScript

**.eslintrc.js** change with:

```
module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    "react/state-in-constructor": "off",
    "react/jsx-filename-extension": ["warn", { "extensions": [".js", ".jsx"] }],
    "react/prop-types": 0,
    "react/jsx-props-no-spreading": "off",
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
```

add script in **package.json**:

```
"lint": "eslint . --ext .js,.jsx --quiet",
"lint:fix": "eslint . --ext .js,.jsx --quiet --fix"
```

## Add babel parser

```
yarn add -D babel-eslint@10.1.0
```

include in **.eslint.js** :

```
parser: "babel-eslint"
```

## Add prettier

```
yarn add -D prettier@2.2.1 eslint-plugin-prettier@3.3.1 eslint-config-prettier@7.2.0
```

include in **.prettier.js**

```
module.exports = {
  printWidth: 80,
  semi: false,
  tabWidth: 2,
  useTabs: false,
  singleQuote: true,
  trailingComma: 'none',
  jsxBracketSameLine: false,
  bracketSpacing: true,
};
```

add script in **package.json**:

```
"format": "prettier --write ./src/**/*.{js,jsx}",
"format:check": "prettier --check ./src/**/*.{js,jsx}",
```

config include in **.eslintrc.js**

```
{
  plugins: ["prettier"],
  extends: [
    "plugin:prettier/recommended",
    "prettier/flowtype",
    "prettier/react"
  ],
  rules: {
    'prettier/prettier': [
      'error',
      { endOfLine: 'auto' },
      { usePrettierrc: true }
    ]
  }
}
```

## Settings for VSCode

config include in **.vscode/settings.json**

```
{
  "files.autoSaveDelay": 500,
  "files.autoSave": "off",
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "prettier.disableLanguages": ["html"],
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  },
  "eslint.validate": [
    "javascriptreact",
    "javascript",
    "typescript",
    "typescriptreact"
  ],
  "eslint.alwaysShowStatus": true,
  "eslint.codeAction.showDocumentation": {
    "enable": true
  }
}
```

## ESLint plugin for React Native

```
yarn add -D eslint-plugin-react-native
```

config include in **.eslintrc.js**

```
{
  env: {
    "react-native/react-native": true,
  }
  plugins: ["react-native"],
  rules: {
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 0,
    'react-native/no-color-literals': 2,
    'react-native/no-raw-text': 2,
    'react-native/sort-styles': [
      'error',
      'asc',
      {
        ignoreClassNames: false,
        ignoreStyleProperties: false
      }
    ],
  }
}
```

``

## Autofixable import sorting.

```
yarn add -D eslint-plugin-simple-import-sort
```

config include in **.eslintrc.js**

```
{
    plugins: ["simple-import-sort"],
    rules: {
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",
        "sort-imports": "off",
        "import/first": "error",
        "import/newline-after-import": "error",
        "import/no-duplicates": "error",
        "import/prefer-default-export": "off",
    }
}
```

## ESLint plugin for Jest

```
yarn add -D eslint-plugin-jest
```

config include in **.eslintrc.js**

```
{
  env: {
    jest: true,
    "jest/globals": true
  }
  plugins: ["jest"],
  settings: {
    jest: {
      version: 26
    }
  },
  rules: {
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "error"
  }
}
```
