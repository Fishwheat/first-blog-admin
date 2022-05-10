<template>
  <div class="blog-container">
    <slot></slot>
  </div>
</template>

<script lang='ts'>
import {
  onMounted, defineExpose,
} from 'vue';

export default { name: 'BlogContainer' };
</script>

<script lang='ts' setup>

onMounted(() => {
  // console.log('3.-组件挂载到页面之后执行-------onMounted');
});
defineExpose({
});
</script>

<style lang='scss'>
.blog-container {
  padding: 20px;
  background-color: #ffffff;
  border-bottom: 1px solid rgba(0,0,0,.2);
  box-shadow: 1px 1px 2px 0 rgb(50 155 231 / 20%);
}
</style>
