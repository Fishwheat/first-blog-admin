<template>
  <div class="view-main">
    <el-container>
      <el-aside class="view-main-aside" :style="sideStyles">
        <ViewSide />
      </el-aside>
      <el-container class="view-main-container">
        <el-header class="view-main-header">
          <ViewHeader />
        </el-header>
        <el-main class="view-main-main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang='ts'>
import { onMounted, defineExpose, computed } from 'vue';
import { useCounterStore } from '@/store';
import ViewHeader from '@/views/view-header/index.vue';
import ViewSide from '@/views/view-side/index.vue';

export default { name: 'ViewMain' };

</script>

<script lang='ts' setup>
const counter = useCounterStore();
const sideStyles = computed(() => ({ width: counter.menuType ? '64px' : '200px' }));

onMounted(() => {
  // console.log('3.-组件挂载到页面之后执行-------onMounted');
});
defineExpose({
});
</script>

<style lang='scss'>
.view-main {
  width: 100vw;
  height: 100vh;
  background-color: #dcdfe6;
  .view-main-aside {
    transition: width .3s;
    background: linear-gradient(135deg,rgb(1, 25, 53),rgb(60, 67, 100));
  }
  .view-main-container {
    height: 100vh;
    .view-main-header, .view-main-main {
      height: 60px;
      background-color: #ffffff;
      border-bottom: 1px solid rgba(0,0,0,.4);
    }
    .view-main-main {
      height: calc(100% - 60px);
      margin: 20px;
    }
  }
}
</style>
