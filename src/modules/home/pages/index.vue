<template>
  <div class="home">
    <homeContent />
  </div>
</template>

<script lang='ts'>
import {
  onMounted, defineExpose,
} from 'vue';
import homeContent from './components/home-content.vue';

export default { name: 'Home' };
</script>

<script lang='ts' setup>

onMounted(() => {
  // console.log('3.-组件挂载到页面之后执行-------onMounted');
});
defineExpose({
});
</script>

<style lang='scss'>
.home {
  height: 100%;
}
</style>
