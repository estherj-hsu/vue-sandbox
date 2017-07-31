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


### 2017/07/31

#### 05 攝氏轉換華氏工具 - I (computed)

data 數值計算

``` js
export default {
  computed: {
    fahrenheit () {
      return this.celsius * 9/5 + 32;
    }
  }
}
```
過濾器

``` js
export default {
  filters:{
    toInt(value){
      // 取整數
      return parseInt(value);
    }
  }
}
```

> Reference
> [第四节：定义一个vue实例的4个常用选项](https://freewechat.com/a/MzA3MDg1NzQyNA==/2649654423/1)

#### 06 攝氏轉換華氏工具 - II (v-if, v-show, methods)

v-if （大範圍） / v-show（小範圍）

| DOM | v-if | v-show |
| :-: | :-: | :-: |
| true | Y | Y |
| false  | Y | N |
| CSS  | display | visibility |

``` js
  p(v-if='isC') 華氏：{{ fahrenheit | toInt }} °F
  p(v-if='!isC') 攝氏：{{ celsius | toInt }} °C
  span(v-show='isC') 攝氏：
  span(v-show='!isC') 華氏：
```

methods 函式庫

``` js
export default {
  methods: {
    temperatureConversio ( val ) {
      if ( this.isC ) {
        alert('攝氏: ' + this.celsius );
      }
      else {
        alert('華氏: ' + this.fahrenheit );
      }
    }
  }
}
```