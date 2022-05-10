<template>
  <div class="blog-panel">
    <div class="background-shadow"></div>
    <slot></slot>
  </div>
</template>

<script lang='ts'>
import { onMounted, defineExpose } from 'vue';

export default { name: 'BlogPanel' };
</script>

<script lang='ts' setup>

onMounted(() => {
  // console.log('3.-组件挂载到页面之后执行-------onMounted');
});
defineExpose({
});
</script>

<style lang='scss'>
.blog-panel {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: #fff;
  border-radius: 6px;
  // overflow: hidden;
  &:hover .background-shadow {
    width: calc(100% + 2px);
    // top: 53%;
    transform: translate(-50%, 6px);
    background: rgba($color: #555, $alpha: .2 );
  }
  .background-shadow {
    position: absolute;
    top: 0;
    // left: 0;
    // top: 52%;
    left: 50%;
    transform: translate(-50%, 3px);
    content: '';
    width: 100%;
    height: 100%;
    border-radius: 8px;
    background: rgba($color: #333, $alpha: .1);
    filter: blur(3px);
    transition: all .2s linear;
    z-index: -1;
  }
}

</style>
