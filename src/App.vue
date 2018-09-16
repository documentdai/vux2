<template>
  <div id="app">
    <div class="container">
      <router-view></router-view>
    </div>
    <tabber></tabber>
  </div>
</template>

<script>
import Tabber from '@/components/Tabber'
export default {
  name: 'app',
  components: {
    Tabber
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.container{
  padding: 6px;
}
body {
  margin: 0;
  background-color: #fbf9fe;
}
</style>
