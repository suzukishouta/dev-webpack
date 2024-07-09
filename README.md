# dev-webpack
Webpackでの環境構築です。
- node.jsのバージョンは20.13.1（voltaで管理してます）
- 画像圧縮に[sharp](https://sharp.pixelplumbing.com/)というモジュールを使用
- webpを自動で生成します
## インストール
```
npm install
```
## SassとJSのビルドのみを行う (画像圧縮を行わない)
### 開発中
```
npm run webpack:dev
```
### 本番ビルド
```
npm run webpack:build
```
## 画像圧縮のみを行う
### 画像の変更をwatchします
```
npm run sharp:watch
```
### 全ての画像を処理します。
```
npm run sharp:all
```
## ビルドと画像圧縮をどちらも行う
### 開発中
```
npm run dev
```
### 本番ビルド
```
npm run build
```
## VSCodeの設定
### プラグインのインストール
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
### setting.jsonの必須項目
```
"editor.defaultFormatter": "esbenp.prettier-vscode",
"editor.formatOnSave": true,
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": "explicit",
  "source.fixAll.stylelint": "explicit"
},
```
