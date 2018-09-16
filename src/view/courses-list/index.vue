<template>
  <view-box class="courses-list">
    <panel :list="list" @on-click-item="onClickItem"></panel>
  </view-box>
</template>

<script>
import { ViewBox, Panel } from 'vux'
export default {
  name: 'coursesList',
  created () {
    console.log(1111, this)
    const {title, label} = this.$route.query
    document.title = `${title}  ${label}`
  },
  methods: {
    onClickItem () {
      this.$router.push('/courses-detail')
    }
  },
  data () {
    return {
      list: [
        {
          title: 'xxxx',
          desc: '888888888<span>55555</span>88888888',
          src: require('@/assets/logo.png')
        },
        {
          title: 'xxxx',
          desc: '888888888<span>55555</span>88888888',
          src: require('@/assets/logo.png')
        },
        {
          title: 'xxxx',
          desc: '888888888<span>55555</span>88888888',
          src: require('@/assets/logo.png')
        },
        {
          title: 'xxxx',
          desc: '888888888<span>55555</span>88888888',
          src: require('@/assets/logo.png')
        }
      ]
    }
  },
  components: {
    ViewBox,
    Panel
  }
}
</script>

<style>

</style>
