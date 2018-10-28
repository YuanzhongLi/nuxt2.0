## NUXT2.0 ビギナーズガイド
### chap2
#### 雛形作成
```bash
#yarn をインストール
brew install yarn
# or
npm i -g yarn
# Vue CLI をインストール
npm i -g @vue/cli @vue/cli-init
# template作成 vue init TEMPLATE_NAME APP_NAME
vue init nuxt-community/starter-template my-first-nuxt-app
# パッケージのインストール
yarn
# server 立ち上げ
yarn dev
# 構造確認
tree -L 1 # treeが無い場合brew install tree
```
#### axios-moduleによる外部ソースの導入
```bash
# axios-module の導入
yarn add @nuxtjs/axios
```
nuxt.config.jsは自動反映されないので書き換えたらもう一度ビルドする必要あり  

asyncDataはthisが使用できないので
```
async asyncData({ app, route }) {
  ...
}
```
のようにcontextを渡して使う  

qiitaのtokenはうまく使えなかった401が帰ってきてしまう...

storeは自動反映されないので書き換えたらもう一度ビルドする必要あり  

storeはredirectされた時に毎回新しく取得される,cacheされているときは変わらない  
そのため以下のようになる

```Javascript
// pages/index.vue
async asyncData({ store }) {
  // store.getters.items.lengthは0となる
  if (store.getters.items.length) {
    return ;
  }
  ..
},
// pages/users/_id.vue
async asyncData({ route, store, redirect }) {
  // store.getters['users'][route.params.id]はundefinedとなる
  if (store.getters['users'][route.params.id]) {
    return ;
  ..
},
```
