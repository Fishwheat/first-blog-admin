<template>
  <div class="acc-header">
    <div class="acc-header-menuType" @click="menuTypeClick">
      <el-icon color="#555" :size="32">
        <component :is="counter.menuType ? Expand : Fold" />
      </el-icon>
    </div>
  </div>
</template>

<script lang='ts'>
import { onMounted, defineExpose } from 'vue';
import { Fold, Expand } from '@element-plus/icons-vue';
import { useCounterStore } from '@/store';

export default { name: 'AccHeader' };
</script>

<script lang='ts' setup>
const counter = useCounterStore();
const menuTypeClick = () => {
  counter.menuTypeHandle();
};

onMounted(() => {
  // console.log('acc-header');
});
defineExpose({
});
</script>

<style lang='scss'>
.acc-header {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  .acc-header-menuType {
    width: 32px;
    height: 32px;
    cursor: pointer;
  }
}
</style>
