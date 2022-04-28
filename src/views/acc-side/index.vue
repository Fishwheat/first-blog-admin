<template>
  <div class="acc-side">
    <el-menu
      router
      :default-active="$route.meta.page"
      class="acc-side-el-menu"
      :collapse="counter.menuType"
      @open="handleOpen"
      @close="handleClose"
      text-color="#ffffff"
      active-text-color="#06c6bc"
    >
      <el-menu-item :index="RoutesEnum.HOME" :route="{name: RoutesEnum.HOME}">
        <el-icon><house /></el-icon>
        <template #title>首页</template>
      </el-menu-item>
      <el-menu-item :index="RoutesEnum.PERSONAL" :route="{name: RoutesEnum.PERSONAL}">
        <el-icon><user /></el-icon>
        <template #title>个人简历</template>
      </el-menu-item>
      <!-- 此处若使用el-sub-menu，需要给一个属性popper-class="acc-side-popper"，该类的样式在下面已写好 -->
      <!-- <el-sub-menu :index="RoutesEnum.HOME" popper-class="acc-side-popper">
        <template #title>
          <el-icon><Location /></el-icon>
          <span>Navigator One</span>
        </template>
        <el-menu-item-group title="Group One">
          <el-menu-item :index="RoutesEnum.HOME">item one</el-menu-item>
          <el-menu-item index="1-2">item one</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item :index="RoutesEnum.HOME">item three</el-menu-item>
        </el-menu-item-group>
        <el-sub-menu index="1-4">
          <template #title>item four</template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-sub-menu>
      </el-sub-menu> -->
    </el-menu>
  </div>
</template>

<script lang='ts'>
import { onMounted, defineExpose } from 'vue';
import { User, House } from '@element-plus/icons-vue';
import RoutesEnum from '@/enums/routes.enums';
import { useCounterStore } from '@/store';

export default { name: 'AccSide' };
</script>

<script lang='ts' setup>
const counter = useCounterStore();
const handleOpen = () => {
  // console.log('handleOpen');
};
const handleClose = () => {
  // console.log('handleClose');
};
onMounted(() => {
  console.log('acc-side');
});
defineExpose({
});
</script>

<style lang='scss'>
.acc-side {
  width: 100%;
  height: 100vh;
  user-select: none;
  .acc-side-el-menu {
    height: 100%;
    background: linear-gradient(135deg,rgb(1, 25, 53),rgb(60, 67, 100));
  }
  .el-menu {
    --el-menu-hover-bg-color:rgb(77, 84, 122);
    --el-menu-bg-color: transparent;
    background: linear-gradient(135deg,rgb(1, 25, 53),rgb(60, 67, 100));
    border: none;
  }
}
.el-popper.acc-side-popper {
  background: linear-gradient(135deg,rgb(1, 25, 53),rgb(60, 67, 100));
  .el-menu {
    --el-menu-hover-bg-color:rgb(77, 84, 122);
    --el-menu-bg-color: transparent;
  }
}

</style>
