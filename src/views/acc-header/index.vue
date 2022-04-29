<template>
  <div class="acc-header">
    <div class="acc-header-menuType" @click="menuTypeClick">
      <el-icon color="#555" :size="32">
        <component :is="counter.menuType ? Expand : Fold" />
      </el-icon>
    </div>
    <div class="acc-header-dropdown">
      <el-dropdown>
        <span class="el-dropdown-link">
          欢迎，Fishwheat
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="uploadPasswordClick">
              <el-icon><key /></el-icon>
              修改密码</el-dropdown-item>
            <el-dropdown-item @click="dropOutClick">
              <el-icon><circle-close /></el-icon>
              退出后台</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang='ts'>
import { onMounted, defineExpose } from 'vue';
import {
  Fold, Expand, ArrowDown, Key, CircleClose,
} from '@element-plus/icons-vue';
import { useCounterStore } from '@/store';

export default { name: 'AccHeader' };
</script>

<script lang='ts' setup>
const counter = useCounterStore();
const menuTypeClick = () => {
  counter.menuTypeHandle();
};
const uploadPasswordClick = () => {
  console.log('uploadPasswordClick');
};
const dropOutClick = () => {
  console.log('dropOutClick');
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
  justify-content: space-between;
  .acc-header-menuType {
    width: 32px;
    height: 32px;
    cursor: pointer;
  }
  .acc-header-dropdown {
    cursor: pointer;
    .example-showcase .el-dropdown-link {
      display: flex;
      align-items: center;
    }
    .el-dropdown-link {
      font-size: 16px;
      color: #333;
    }
  }
}
</style>
