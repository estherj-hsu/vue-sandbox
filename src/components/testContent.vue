<template lang="pug">
  .container
    .row
      .col-md-4(v-for="card in cards")
        h2 {{ card.title }}
        p {{ card.info }}
        p
          a.btn.btn-default(:href="card.url" role="button") {{ card.btntext }}
    hr

    footer
      p Esther | Front-End Newbie
</template>

<script>
export default {
  // 新增 props 接收傳來的資料
  props: {
    cards: Array
  }
}
</script>

<style>

</style>