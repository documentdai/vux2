<template>
  <div>
    <tabbar>
      <tabbar-item>
        <span slot="label">
          <router-link to="/" id="icon-home">
            <x-icon type="ios-heart" size="30"></x-icon>
          </router-link>
        </span>
      </tabbar-item>
      <tabbar-item show-dot>
        <span slot="label">Message</span>
      </tabbar-item>
      <tabbar-item >
        <span slot="label"><router-link to="/personal">个人中心</router-link></span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'

export default {
  name: 'tabber',
  updated () {
    console.log(this)
  },
  components: {
    Tabbar,
    TabbarItem
  }
}
</script>
<style scoped>
 .weui-tabbar{
   position: fixed;
 }
</style>
