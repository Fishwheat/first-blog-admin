<template>
  <div class="acc-main">
    <el-container>
      <el-aside class="acc-main-aside" :style="sideStyles">
        <AccSide />
      </el-aside>
      <el-container class="acc-main-container">
        <el-header class="acc-main-header">
          <AccHeader />
        </el-header>
        <el-main class="acc-main-main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang='ts'>
import { onMounted, defineExpose, computed } from 'vue';
import AccHeader from '@/views/acc-header/index.vue';
import AccSide from '@/views/acc-side/index.vue';
import { useCounterStore } from '@/store';

export default { name: 'AccMain' };

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
.acc-main {
  width: 100vw;
  height: 100vh;
  background-color: #dcdfe6;
  .acc-main-aside {
    transition: width .3s;
    background: linear-gradient(135deg,rgb(1, 25, 53),rgb(60, 67, 100));
  }
  .acc-main-container {
    .acc-main-main {
      margin: 20px;
    }
    .acc-main-header, .acc-main-main {
      background-color: #ffffff;
    }
  }
}
</style>
