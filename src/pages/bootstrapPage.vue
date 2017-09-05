<template lang="pug">
  div
    anno(slot="namedSlot")
      p If there is content, then no slot.
    //- 帶入 cards 給 testContent
    testContent(:cards="cards")
</template>

<script>
// 導入元件
import anno from '../components/anno.vue';
import testContent from '../components/testContent.vue';
// 宣告元件
export default {
  components: {
    anno,
    testContent
  },
  // 新增資料
  data (){
    return {
      cards: [
        {
          title: 'Heading1',
          info: 'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. ',
          btntext: 'View details »',
          url: '#1'
        },
        {
          title: 'Heading2',
          info: 'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. ',
          btntext: 'View details »',
          url: '#2'
        },
        {
          title: 'Heading3',
          info: 'Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
          btntext: 'View details »',
          url: '#3'
        }
      ]
    }
  }
}
</script>