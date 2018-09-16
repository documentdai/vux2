<template>
  <div class="courses-detail">
    <div style="text-align:center;">
      <video  height="300" ref="myViedeo" controls="controls" >
        <source :src="viedeo1" type="video/mp4" />
     </video>
    </div>
    <div class="">
      <p>成长规律之英语习惯的培养</p>
      <p class="min-text">为0-3岁从小习惯的培养</p>
      <span>
        <icon type="success"></icon>
      </span>
    </div>
    <div class="lecturer-techer">
      <img :src="imgTeacher" slot="icon">
    </div>
    <div class="teacher-tab">
      <tab>
        <tab-item selected @on-item-click="onItemClick(1)">章节</tab-item>
        <tab-item @on-item-click="onItemClick(2)">详情</tab-item>
        <tab-item @on-item-click="onItemClick(3)">评论</tab-item>
      </tab>
      <chapter-list v-if="current === 1" @coursesVideoClick='onCoursesVideoClick'></chapter-list>
      <comment-list v-else-if="current === 2"></comment-list>
      <detail-list v-else></detail-list>
    </div>

  </div>
</template>

<script>
import { Icon, Tab, TabItem } from 'vux'
import ChapterList from '../courses-detail/chapter-list/index'
import CommentList from '../courses-detail/comment-list/index'
import DetailList from '../courses-detail/detail-list/index'
export default {
  name: 'coursesDetail',
  data () {
    return {
      viedeo1: 'http://www.w3school.com.cn/i/movie.ogg',
      current: 1
    }
  },
  components: {
    Icon,
    Tab,
    TabItem,
    ChapterList,
    CommentList,
    DetailList
  },
  created () {
        // this.$on('CoursesVideoClick', this.onCoursesVideoClick)
    document.title = ''
  },
  methods: {
    onItemClick (tab) {
      this.current = tab
    },
    onCoursesVideoClick (coursesVideoClick) {
      this.viedeo1 = coursesVideoClick
    }
  }
}
</script>

<style lang="less" scoped>
@import "~vux/src/styles/1px.less";
@import "~vux/src/styles/center.less";

.box {
    padding: 15px;
}
.active-6-1 {
    color: rgb(252, 55, 140) !important;
    border-color: rgb(252, 55, 140) !important;
}
.active-6-2 {
    color: orange !important;
    border-color: #04be02 !important;
}
.active-6-3 {
    color: rgb(55, 174, 252) !important;
    border-color: rgb(55, 174, 252) !important;
}
.tab-swiper {
    background-color: #fff;
    height: 100px;
}
</style>
<style lang="less">
.teacher-tab {
    position: relative;
    .vux-tab {
        .vux-tab-ink-bar {
            background: orange;
        }
    }
    .vux-tab {
        .vux-tab-item.vux-tab-selected {
            color: orange;
        }
    }
}
</style>

