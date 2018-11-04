# nuxt-blog-service

> My first-rate Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static project
$ yarn run generate
```
For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

## NUXT2.0 ビギナーズガイド
### chap4
#### create-nuxt-appによるプロジェクト作成
```bash
npm install -g create-nuxt-app
# nuxt project 作成
create-nuxt-app PROJECT_NAME
# universal-cookie を追加
yarn add universal-cookie
```
cookieによる認証の仕組み  
pages/index.vueでログインまたは登録でIDをクッキーとstateに追加  
⬇︎page遷移  
nuxtServerInitによってstateは初期化される  
⬇︎  
middleware/auth-cookie.jsによってcookie参照でstateにIDが追加される  
⬇︎  
stateを参照してログイン状態のページを返す  


コードをappにまとめると書いてあるが色々と不都合が生じるのでそのままがいい。
ページで１つしか存在しないコンポーネントはTheなどの明確な名前をつける。ex)TheHeader.vue  
#### 投稿機能のロジック実装
```bash
yarn add moment lodash.clonedeep
```
momentは日付操作するライブラリ、ファイルサイズが大きいため初期化時にローケルの設定が必要。  

Object.entries(...)は実際の開発において配列が返ってくる場合使用しなくてもいいやつ。

#### いいね機能の実装
userとpostの両方にいいねを実装する。既存のuserやpostがあった場合、それをuploadするというかたちで実装している。
#### キャッシュを考慮した設計
<no-ssr></no-ssr>で囲むことでSSRをしなくなる。
