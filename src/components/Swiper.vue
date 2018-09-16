<template>
  <div>
    <router-link to="#">
      <swiper :list="demo03_list" auto style="width:80%;margin:0 auto;" height="180px" dots-class="custom-bottom" dots-position="center">
    </swiper>
    </router-link>

  </div>
</template>

<script>
import { Swiper } from 'vux'
const imgList = [
  'http://placeholder.qiniudn.com/800x300/FF3B3B/ffffff',
  'http://placeholder.qiniudn.com/800x300/FFEF7D/ffffff',
  'http://placeholder.qiniudn.com/800x300/8AEEB1/ffffff'
]
const demoList = imgList.map((one, index) => ({
  url: 'javascript:',
  img: one
}))
export default {
  name: 'swiperone',
  components: {Swiper},
  data () {
    return {
      demo03_list: demoList
    }
  }

}
</script>

<style>

</style>
