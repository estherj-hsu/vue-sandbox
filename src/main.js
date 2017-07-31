import Vue from 'vue'
import VueRouter from 'vue-router'

// init
Vue.use(VueRouter)

// pages
import Hello from './pages/Hello.vue';
import CtoF from './pages/C2F.vue';
import App from './App.vue';

const router = new VueRouter({
  // HTML 5 模式（網址改變頁面不刷新）
  mode: 'history',
  base: __dirname,
  // routre 清單
  routes: [
    {
      path: '/hello',
      name: 'hello',
      component: Hello
    },
    {
      path: '/c2f',
      name: 'c2f',
      component: CtoF
    },
    // router 自動轉址
    { path: '/*', redirect: '/hello' }
  ]
});

new Vue({
  el: '#app',
  router,
  // app.vue 掛載並 replace index.html 原始掛載點： <div id="app"></div>
  render: h => h( App )
});
