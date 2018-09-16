<template>
  <div class="search">
    <div class="search-input">
      <input type="text" @focus="showSearchList" @blur="hideSearchList">
      <icon type="search"></icon>
    </div>
    <ul v-show="isShowList" class="search-list">
      <li class="search-list-item" v-for="(item, index) in searchList" :key="index">
        xxxx
      </li>
    </ul>
  </div>
</template>

<script>
import { Icon } from 'vux'
export default {
  name: 'search',
  data () {
    return {
      isShowList: false
    }
  },
  methods: {
    showSearchList () {
      this.isShowList = true
    },
    hideSearchList () {
      this.isShowList = false
    }
  },
  props: {
    searchList: {
      type: Array,
      default: [],
      required: false
    },
    onValueChange: {
      type: Function,
      default: () => {},
      required: false
    }
  },
  components: {
    Icon
  }
}
</script>

<style lang="less">
.search {
    height: 40px;
    position: relative;
    &-input {
        position: relative;
        font-size: 18px;
        height: 100%;
        input {
            width: 100%;
            height: 100%;
            border: none;
            outline: none;
        }
        .weui_icon_search {
            position: absolute;
            right: 10px;
            top: 0;
            bottom: 0;
            margin: auto;
            height: 18px;
        }
    }
    &-list{
      position: absolute;
      max-height: 300px;
      top: 100%;
      left: 0;
      width: 100%;
    }
}
</style>
