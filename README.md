# dev-webpack
Webpackでの環境構築です。
- node.jsのバージョンは18.17.0
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
