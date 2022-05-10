<template>
  <div class="blog-loading">
  </div>
</template>

<script lang='ts'>
import {
  onMounted, defineExpose, watch,
} from 'vue';
import { useCounterStore } from '@/store';
import { ElLoading } from 'element-plus';

export default { name: 'BlogLoading' };
</script>

<script lang='ts' setup>
const counter = useCounterStore();
watch(() => counter.isLoading, (newVal, oldVal) => {
  if (newVal) {
    ElLoading.service({
      fullscreen: true,
      lock: true,
      text: '加载中...',
      background: 'rgba(0, 0, 0, 0.7)',
    });
  } else {
    ElLoading.service({ fullscreen: true }).close();
  }
});

onMounted(() => {
  // console.log('3.-组件挂载到页面之后执行-------onMounted');
});
defineExpose({
});
</script>

<style lang='scss'>

</style>
