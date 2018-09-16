<template>
  <div class="teacher-abstract">
    <group class="group cell-box" >
      <cell  title='微信昵称'  class="cell-tle">
        <span slot="icon" class="head-portrait">
          <img src="../../../build/logo.png">
        </span>
      </cell>
    </group>
  </div>
</template>

<script>
import { CellBox, Cell, Group } from 'vux'
export default {
  name: 'teacherAbstract',
  components: {
    CellBox,
    Cell,
    Group
  }
}
</script>

<style lang="less">
</style>

