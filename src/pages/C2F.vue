<template lang='pug'>
  .c2f
    h2 °C to °F
    p 華氏：{{ fahrenheit | toInt }} °F
    p 攝氏：
      input(type='number', v-model='celsius')
      |  °C
    h2 KG to Pounds
    p Pounds: {{ pounds | toFix2 }} pounds
    p KG：
      input(type='number', v-model='kgs')
      |  kgs
</template>

<script>
export default {
  // 資料儲存
  data () {
    return {
      celsius: 30,
      kgs: 10
    }
  },
  // 計算
  computed: {
    fahrenheit () {
      return this.celsius * 9/5 + 32;
    },
    pounds () {
      return this.kgs * 2.205;
    }
  },
  // 過濾器
  filters:{
    toInt(value){
      // 取整數
      return parseInt(value);
    },
    toFix2(value){
      // 小數點後兩位
      return value.toFixed(2);
    }
  }
}
</script>