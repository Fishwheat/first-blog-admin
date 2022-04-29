<template>
  <div class="acc-side">
    <div class="acc-side-header" :class="{'acc-side-header-alter': counter.menuType}">
      <div class="header-logo">
        <img src="@/assets/img/common/logo.png" alt="">
      </div>
      <div class="header-title" v-show="!counter.menuType">Fishwheat</div>
    </div>
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
        <template #title>home</template>
      </el-menu-item>
      <el-menu-item :index="RoutesEnum.PERSONAL" :route="{name: RoutesEnum.PERSONAL}">
        <el-icon><user /></el-icon>
        <template #title>personal</template>
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
    <div class="footer-icon">
      <div class="first">
        <el-icon color="#B0C4DE" :size="50"><tools /></el-icon>
      </div>
      <div class="second">
        <el-icon color="#B0C4DE" :size="20"><tools /></el-icon>
      </div>
      <div class="third">
        <el-icon color="#B0C4DE" :size="35"><tools /></el-icon>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { onMounted, defineExpose } from 'vue';
import { User, House, Tools } from '@element-plus/icons-vue';
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
@keyframes iconRotate{
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes iconRotateReverse{
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
}
.acc-side {
  position: relative;
  width: 100%;
  height: 100vh;
  user-select: none;
  overflow: hidden;
  .acc-side-header {
    height: 60px;
    width: 100%;
    display: flex;
    align-items: center;
    padding-left: 20px;
    .header-logo {
      position: relative;
      width: 44px;
      height: 44px;
      border-radius: 22px;
      overflow: hidden;
      margin-right: 10px;
      background: #fff;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .header-title {
      font-weight: bolder;
      font-size: 20px;
      font-family: Cambria,Cochin,Georgia,Times,Times New Roman,serif;
      color: #fff;
    }
  }
  .acc-side-header-alter {
    justify-content: center;
    padding-left: 0;
    .header-logo {
      margin-right: 0;
    }
  }
  .footer-icon {
    position: absolute;
    bottom: 0;
    display: flex;
    .first {
      width: 50px;
      height: 50px;
      animation: iconRotate 4s linear infinite;
    }
    .second {
      width: 20px;
      height: 20px;
      animation: iconRotateReverse 2s linear infinite;
    }
    .third {
      width: 35px;
      height: 35px;
      margin-top: 6px;
      animation: iconRotate 3s linear infinite;
    }
  }
  .acc-side-el-menu {
    height: calc(100% - 60px);
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
