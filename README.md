# ゼロから始めるサービス開発

## 概要

### 目的

### 前提

| ソフトウェア   | バージョン | 備考 |
| :------------- | :--------- | :--- |
| nodejs         | 8.10.0     |      |

## 構成

- [構築](#構築)
- [配置](#配置)
- [運用](#運用)
- [開発](#開発)

## 詳細

### 構築

#### 開発パッケージのセットアップ

```bash
npm init -y
npm install --save-dev npm-run-all watch foreman cpx rimraf markdown-to-html
npm install --save-dev prettier eslint babel-eslint
npm install --save-dev browser-sync connect-browser-sync nodemon
npx browser-sync init
npx eslint --init
touch Procfile
```

#### アプリケーションのセットアップ

Webpackセットアップ
```bash
mkdir src
touch src/index.js
touch src/index.html
npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/register @babel/polyfill babel-plugin-istanbul cross-env nyc webpack webpack-cli webpack-dev-server babel-loader css-loader html-webpack-plugin mini-css-extract-plugin copy-webpack-plugin clean-webpack-plugin @babel/polyfill                                                                                                                                                                                                                                                               
```

AWS Amplifyセットアップ
```bash
npm install --save-dev @aws-amplify/cli aws-amplify
npm install --save aws-appsync graphql-tag
npx amplify configure
npx amplify init
```

**[⬆ back to top](#構成)**

### 配置

Webサイトセットアップ
```bash
npx amplify add hosting
npx amplify push
npx amplify publish
```

認証セットアップ
```bash
npx amplify add auth
npx amplify push
```

分析セットアップ
```bash
npx amplify add analytics
npx amplify push
```

**[⬆ back to top](#構成)**

### 運用

Webサイト運用
```bash
npx amplify update hosting
npx amplify push
npx amplify publish
```

**[⬆ back to top](#構成)**

### 開発

**[⬆ back to top](#構成)**

## 参照