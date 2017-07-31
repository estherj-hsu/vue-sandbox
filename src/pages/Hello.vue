<template lang='pug'>
.hello
  //- 新增動態資料
  h2 {{ hello }}
  p Esther says: {{ hello }}
  //- 將 hello 綁定 input 動態資料，讓資料可動態更動
  input(type='text', v-model='hello')
  p
  //- 將 toggle 綁定 checkbox 布林值
  input(type='checkbox', v-model='toggle')
  |  Checkbox:  {{ toggle }}
  p
  //- 進階：將 multi 綁定 radio
  input(type='radio', name='multi', value='male', checked='', v-model='multi')
  |  Male 
  input(type='radio', name='multi', value='female', v-model='multi')
  |  Female 
  input(type='radio', name='multi', value='other', v-model='multi')
  |  Other
  p Gender: {{ multi }}

</template>

<script>
export default {
  data () {
    return {
      // 新增數據
      hello: 'Hello!',
      // 新增 checkbox
      toggle: false,
      // 新增 radio
      multi: 'male',
    }
  }
}
</script>
<style scoped lang='sass'>
.hello
  text-align: center
</style>
