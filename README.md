# vue-sandbox

參考 [ironman2017vue](https://github.com/hungjie19/ironman2017vue) 實作

## 紀錄

### 2017/07/04

#### 02 主環境初始化

webpack + vue

``` bash
# install vue-cli global
npm install -g vue-cli
# vue + webpack
vue init webpack [project]
# install npm packages
npm i
```

Extra: pug + scss

``` bash
# pug loader & filter
npm install pug pug-loader pug-filters -D
# jage loader
npm install jade jade-loader -D
# sass loader
npm install sass sass-loader node-sass -D
```

#### 03 Hello World & 雙向綁定

`v-model` 綁定資料，做動態呈現，input / checkbox / radio 應用

``` js
export default {
  data () {
    return {
      // 新增 資料
      hello: 'Hello!',
      // 新增 checkbox
      toggle: false,
      // 新增 radio
      multi: 'male',
    }
  }
}
```