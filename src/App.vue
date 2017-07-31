<template lang='pug'>
  #app
    //- router-link :to 與 href 相同，指定 main.js 中的 路徑(path)/名稱(name) 即可
    //- 指定路徑
    router-link(:to="{path: '/hello'}") Hello
    //- 指定名稱
    router-link(:to="{name: 'c2f'}") CtoF
    //- 顯示 router 內容
    router-view
</template>

<script>
export default {
  name: 'app'
}
</script>


<style lang='sass'>
body
  margin: 0
  font-size: 16px
  font-family: Arial
  width: 100%
  color: #424242
  height: 100%
#app
  text-align: center
  padding: 20px
a, a:hover, a:visited
  text-decoration: none
  color: #212121
  padding: 10px 20px
  
</style>
