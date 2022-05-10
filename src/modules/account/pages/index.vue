<template>
  <div class="account">
    <div class="account-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang='ts'>
import {
  onMounted, defineExpose,
} from 'vue';

export default { name: 'Account' };
</script>

<script lang='ts' setup>

onMounted(() => {
  // console.log('3.-组件挂载到页面之后执行-------onMounted');
});
defineExpose({
});
</script>

<style lang='scss'>
.account {
  position: relative;
  width: 100vw;
  height: 100vh;
  background: #f9f9f9;
  // background: linear-gradient(to bottom,rgb(1, 25, 53),rgb(73, 81, 116));
  .account-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
