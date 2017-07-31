<template lang='pug'>
  .c2f
    h2 °C ↔ °F
    .switcherTemp
      input#switcherTemp.switcherTemp-input(type='checkbox', v-model='isC')
      | °C
      label.switcherTemp-label(for='switcherTemp')
      | °F
    p(v-if='isC') 華氏：{{ fahrenheit | toInt }} °F
    p(v-if='!isC') 攝氏：{{ celsius | toInt }} °C
    p
      span(v-show='isC') 攝氏：
      span(v-show='!isC') 華氏：
      input(type='number', v-model='inputTemp')

    h2 KG ↔ Pounds
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
      inputTemp: 0,
      isC: false,
      kgs: 10
    }
  },
  // 計算
  computed: {
    fahrenheit () {
      return this.inputTemp * 9/5 + 32;
    },
    celsius () {
      return (this.inputTemp - 32) * 5/9;
    },
    switcherTemp () {
      return this.isC ? "攝氏 轉換 華氏" : "華氏 轉換 攝氏";
    },
    pounds () {
      return this.kgs * 2.205;
    }
  },
  methods: {
    temperatureConversio ( val ) {
      if ( this.isC ) {
        alert('攝氏: ' + this.celsius );
      }
      else {
        alert('華氏: ' + this.fahrenheit );
      }
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
<style scoped lang='sass'>
  .switcherTemp
    font-size: 14px
  .switcherTemp-input
    display: none
  .switcherTemp-label
    margin: 0 6px
    vertical-align: middle
    width: 40px
    height: 20px
    background-color: #2196F3
    border-radius: 16px
    position: relative
    display: inline-block
    cursor: pointer
    &:hover
      background-color: #64B5F6
    &::before
      content: ''
      display: inline-block
      width: 14px
      height: 14px
      background-color: #E3F2FD
      border-radius: 50%
      position: absolute
      top: 3px
      left: 3px
    .switcherTemp-input:checked + &::before
      right: 3px
      left: inherit
</style>