<template>
  <div class="personal">
    <group class="group cell-box" >
      <cell  title='微信昵称'  class="cell-tle">
        <span slot="icon" class="head-portrait">
          <img src="../../../build/logo.png">
          <input type="file">
        </span>
      </cell>
    </group>
    <group class="group">
      <cell link='/a' title='浏览记录' is-link>
        <x-icon slot="icon" type="heart"></x-icon>
      </cell>
      <cell link='/b' title='收藏的课程' is-link>
        <x-icon slot="icon" type="heart"></x-icon>
      </cell>
      <cell link='/c' title='教程关注'>
        <x-icon slot="icon" type="heart"></x-icon>
      </cell>
      <cell link='/d' title='设置'>
        <x-icon slot="icon" type="heart"></x-icon>
      </cell>
      <cell link='/e' title='客服'>
        <x-icon slot="icon" type="heart"></x-icon>
      </cell>
    </group>
  </div>
</template>

<script>
import { CellBox, Cell, Group } from 'vux'
export default {
  name: 'personal',
  components: {
    CellBox,
    Cell,
    Group
  },
  mounted () {
    console.log(this)
  },
  methods: {
    imgfileClick () {
      console.log(7777)
      this.$nextTick(() => {
        this.$refs.imgfile.click()
      })
    }
  }
}
</script>

<style lang="less" scoped>
.personal {
    .weui-cell {
        padding-left: 0;
        &:before {
            left: 0;
        }
    }
}
</style>
<style lang="less">
.personal {
    .group {
        .weui-cells {
            background-color: transparent;
        }
    }
    .vux-label {
        margin-left: 10px;
    }
    .cell-box{
      background:#fff;
      height: 80px;
      .weui-cells:before{
       border:none;
      }
      .weui-cells:after{
        border:none;
      }
      .cell-tle{
        line-height:60px;
        position: relative;
        img{
          width:30px;
          height: 30px;
          border-radius:50%;
        }
        input{
          width:50px;
          height: 50px;;
        }
        img{
          pointer-events: none;
        }
        .head-portrait{
          position: relative;
          display: flex;
          align-items: center;
          input{
            position: absolute;
            left: 0;
            top: 0;
            opacity: 0;
            overflow: hidden;
          }
        }
      }
    }
}
</style>

