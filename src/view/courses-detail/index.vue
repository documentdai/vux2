<template>
  <div class="courses-detail">
    <div style="text-align:center;">
      <video height="300" controls="controls" :src='viedeoLink'>
      </video>
    </div>
    <div class="title-description">
      <p class="headlines">成长规律之英语习惯的培养</p>
      <p class="subtitle">为0-3岁从小习惯的培养</p>
      <span class="icon-title">
        <icon type="success"></icon>
      </span>
    </div>
    <div class="lecturer-techer">
      <view-box class="courses-list">
        <panel :list="list" @on-click-item="onClickTeacher"></panel>
      </view-box>
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

import {Icon, Tab, TabItem, ViewBox, Panel} from 'vux'
import ChapterList from '../courses-detail/chapter-list/index'
import CommentList from '../courses-detail/comment-list/index'
import DetailList from '../courses-detail/detail-list/index'
export default {
  name: 'coursesDetail',
  data () {
    return {
      viedeoLink: '',
      current: 1,
      list: [{
        title: 'xxxx',
        desc: '888888888<span>55555</span>88888888',
        src: require('@/assets/logo.png')
      }]
    }
  },
  components: {
    Icon,
    Tab,
    TabItem,
    ViewBox,
    Panel,
    ChapterList,
    CommentList,
    DetailList
  },
  created () {
    console.log(111, this)
    this.$on('CoursesVideoClick', this.onCoursesVideoClick)
        // document.title = ''
  },
  methods: {
    onItemClick (tab) {
      this.current = tab
    },
    onCoursesVideoClick (coursesVideoClick) {
      this.viedeoLink = coursesVideoClick
    },
    onClickTeacher () {
      this.$router.push('/teacher-abstract')
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
.title-description{
     position: relative;
     margin-left:9px;
       .headlines{
         font-size:14px;
         font-weight:bold;
       }
       .subtitle{
         color:#ccc;
         font-size:12px;
         margin-top:6px;
       }
       .icon-title{
         position: absolute;
         right: 5%;
         top:0;
       }
   } 
</style>

