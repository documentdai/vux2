<template>
  <div class="home">
    <div class="search-wraper">
      <search :searchList="[]"></search>
    </div>
    <div class="swiper">
      <swiper auto>
        <swiper-item class="swiper-demo-img" v-for="(item, index) in baseList" :key="index">
          <img :src="item.img">
        </swiper-item>
      </swiper>
      <div class="horse-race-lamp">
        <icon type="info"></icon>
        <swiper auto height="30px" direction="vertical" :interval=2000 class="text-scroll" :show-dots="false">
          <swiper-item><p>义务爱了 完成传奇世界H5-王者归来任务 获得20金币</p></swiper-item>
          <swiper-item><p>基本世神 兑换《传奇世界H5》畅玩级礼包 消耗30金币</p></swiper-item>
          <swiper-item><p>零哥章魚 完成传奇世界H5-王者归来任务 获得30金币</p></swiper-item>
          <swiper-item><p>做迎而為 兑换【饿了么】畅享美食红包 消耗20金币</p></swiper-item>
          <swiper-item><p>只知道不知道 兑换【饿了么】畅享美食红包 消耗20金币</p></swiper-item>
          <swiper-item><p>基本世神 兑换《传奇世界H5》畅玩级礼包 消耗30金币</p></swiper-item>
        </swiper>
      </div>
      <div class="class-courses" v-for="({title, items}, key) in classSourses" :key="key">
        <h4>{{title}}</h4>
        <grid :show-lr-borders="false" :show-vertical-dividers="false">
          <grid-item 
            v-for="({label, icon}, i) in items" :key="i" 
            :link='`/courses-list?title=${title}&label=${label}`' 
            :label="label"
            >
            <img slot="icon" :src="icon"/>
          </grid-item>
        </grid>
      </div>
    </div>
    <!-- <img src="../../assets/logo.png" alt=""> -->
  </div>
</template>

<script>
import Search from '@/components/Search'
import { Swiper, SwiperItem, Icon, Grid, GridItem } from 'vux'
const baseList = [
  {
    url: 'javascript:',
    img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg',
    title: '送你一朵fua'
  },
  {
    url: 'javascript:',
    img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg',
    title: '送你一辆车'
  },
  {
    url: 'javascript:',
    img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg', // 404
    title: '送你一次旅行'
  }
]
const classSourses = [
  {
    title: '0-3岁',
    items: [
      {
        label: '成长规律',
        icon: require('@/assets/logo.png')
      },
      {
        label: '家长课堂',
        icon: require('@/assets/logo.png')
      },
      {
        label: '专家咨询',
        icon: require('@/assets/logo.png')
      }
    ]
  },
  {
    title: '4-6岁',
    items: [
      {
        label: '成长规律',
        icon: require('@/assets/logo.png')
      },
      {
        label: '家长课堂',
        icon: require('@/assets/logo.png')
      },
      {
        label: '专家咨询',
        icon: require('@/assets/logo.png')
      }
    ]
  }
]
export default {
  name: 'home',
  data () {
    return {
      baseList,
      classSourses
    }
  },
  created () {
    document.title = '首页'
  },
  components: {
    Search,
    Swiper,
    SwiperItem,
    Icon,
    Grid,
    GridItem
  }
}
</script>

<style lang="less" scoped>
.home {
    position: relative;
    .search-wraper{
      position: sticky;
      top: 0;
      z-index: 100;
    }
    .swiper {
        margin-top: 12px;
        .vux-swiper-item {
            border-radius: 8px;
            overflow: hidden;
        }
    }
    .horse-race-lamp{
      margin: 6px 0;
      display: flex;
      align-items: center;
      .text-scroll{
        flex: 1;
      }
    }
    .weui-grids, .weui-grid{
      padding: 0;
      &:after, &:before{
        border: none;
      }
    }
    .weui-grids{
      display: flex;
      justify-content: space-around;
    }
    .weui-grid{
      flex: 1 1 33%;
      margin: 10px;
      padding: 10px;
      background-color: #fff;
      border-radius: 6px;
      overflow: hidden;
    }
}
</style>
