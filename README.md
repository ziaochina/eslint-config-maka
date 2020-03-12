# eslint-config-maka

makajs ESLint 规则

## 安装

```bash
npm i eslint-config-maka --save-dev
```

## 用法

- `package.json`

```json
{
  "devDependencies": {
    "eslint-config-maka": "1",
    "eslint": "4"
  }
}
```

- `.eslintrc.js`

```js
module.exports = {
  extends: 'eslint-config-maka',
};
```

### typescript项目用法

- `package.json`

```json
{
  "devDependencies": {
    "eslint-config-maka": "1",
    "typescript": "^3.5.3"
  }
}
```

- `.eslintrc.js`

```js
module.exports = {
  extends: 'eslint-config-maka/typescript',
  parserOptions: {
    // 推荐使用另外名称例如 tsconfig.eslint.json，继承 tsconfig.json.
    // @see https://github.com/typescript-eslint/typescript-eslint/issues/890
    project: './tsconfig.json'
  }
};
```

- `scripts`

```json
{
  "lint": "eslint . --ext .ts"
}
```

- `settings.json` in vscode

```json
{
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    {
      "language": "typescript",
      "autoFix": true
    },
  ]
}
```

### 使用最新的ES特性

如果要使用最新的ES特性，使用babel-eslint语法解析器：

- `package.json`

```json
{
  "devDependencies": {
    "eslint-config-maka": "1",
    "eslint": "4",
    "babel-eslint": "8"
  }
}
```

- `.eslintrc.js`

```js
module.exports = {
  extends: 'eslint-config-maka',
  parser: 'babel-eslint',
  rules: {
    // see https://github.com/eslint/eslint/issues/6274
    'generator-star-spacing': 'off',
    'babel/generator-star-spacing': 'off',
  }
};
```

### 前端React用法

eslint-config-maka + react + jsx + es6 一起使用 :

- `package.json`

```json
{
  "devDependencies": {
    "eslint-config-maka": "1",
    "eslint": "4",
    "babel-eslint": "8",
    "eslint-plugin-react": "7"
  }
}
```

- `.eslintrc.js`

```js
module.exports = {
  extends: '@makajs/eslint-config',
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    // for variables in jsx
    'react/jsx-uses-vars': 'error',
    // see https://github.com/eslint/eslint/issues/6274
    'generator-star-spacing': 'off',
    'babel/generator-star-spacing': 'off',
  },
};
```

## License

[MIT](LICENSE)
