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
# install pug loader & filter
npm install pug pug-loader pug-filters -D
# install jage loader
npm install jade jade-loader -D
# install sass loader
npm install sass sass-loader node-sass -D
```

> Reference  
> [vue+webpack+scss+jade(pug)的环境搭建](https://segmentfault.com/a/1190000007556806)

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

#### 04 使用 vue-router 建構 Single Page Application

新增 vue-router 用於頁面切換

``` bash
# install vue-router
npm install vue-router --save-dev
```

> Reference  
> [Single Page Application (SPA)](http://blog.mokayo.com/single-page-application-spa/)  
> [前端小字典三十天【每日一字】– SPA](http://ithelp.ithome.com.tw/articles/10160709)