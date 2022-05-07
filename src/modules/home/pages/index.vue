<template>
  <div class="home">
    <homeContent @handleEdit="homeContentEditClick" />
    <home-content-drawer v-model:visible="DrawerVisible" :is-edit="isTypeEdit" :prop-from="propForm" />
    <div class="home-add-list-item">
      <el-button color="#032a57" type="primary" :icon="Plus" round @click="addListItemClick">添加</el-button>
    </div>
  </div>
</template>

<script lang='ts'>
import {
  onMounted, defineExpose, ref,
} from 'vue';
import {
  Plus,
} from '@element-plus/icons-vue';
import homeContent from './components/home-content.vue';
import homeContentDrawer from './components/home-content-drawer.vue';

export default { name: 'Home' };
</script>

<script lang='ts' setup>
const DrawerVisible = ref(false);
const isTypeEdit = ref(false);
const propForm = ref();

const homeContentEditClick = (val: unknown) => {
  DrawerVisible.value = true;
  isTypeEdit.value = true;
  propForm.value = val;
  // console.log(val);
};
const addListItemClick = () => {
  DrawerVisible.value = true;
  isTypeEdit.value = false;
  propForm.value = null;
};

onMounted(() => {
  // console.log('3.-组件挂载到页面之后执行-------onMounted');
});
defineExpose({
});
</script>

<style lang='scss'>
.home {
  position: relative;
  height: 100%;
  .home-add-list-item {
    position: absolute;
    bottom: 0;
    right: 0;
    opacity: .9;
    z-index: 1;
    .el-button {
      width: 100px;
      height: 38px;
      font-size: 16px;
    }
  }
}
</style>
