<template>
  <div class="chapter-list">
    <ul>
        <li @click="onCellClick" >
          <x-icon slot="icon" type="ios-ionic-outline" size="30"></x-icon>
          <span>第一节</span>
          <span>开始建立学习计划</span>
        </li>
    </ul>
  </div>
</template>

<script>
import { Cell, Group } from 'vux'
export default {
  name: 'ChapterList',
  components: {
    Group,
    Cell
  },
  data () {
    return {
      src: 'http://www.w3school.com.cn/i/movie.ogg'
    }
  },
  methods: {
    onCellClick () {
      this.$emit('coursesVideoClick', this.src)
    }
  }
}
</script>

<style lang="less">
.chapter-list {
    margin-top: 10px;
    
}
</style>

