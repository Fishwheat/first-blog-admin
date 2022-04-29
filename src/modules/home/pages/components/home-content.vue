<template>
  <div class="home-content">
    <el-table :data="filterTableData" style="width: 100%" header-row-class-name="aaa">
      <el-table-column label="时间" prop="date" />
      <el-table-column label="标题" prop="title" />
      <el-table-column label="内容" prop="text" />
      <el-table-column label="标签" prop="tag" />
      <el-table-column align="right">
        <template #header>
          <el-input v-model="search" size="small" placeholder="请输入标题关键字搜索" />
        </template>
        <template #default="scope">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="small"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang='ts'>
import {
  onMounted, defineExpose, computed, ref,
} from 'vue';

export default { name: 'HomeContent' };

</script>

<script lang='ts' setup>
interface User {
  date: string
  title: string
  text: string
  tag: string
}
const search = ref('');
const filterTableData = computed(() => tableData.filter((data) => !search.value || data.title.toLowerCase().includes(search.value.toLowerCase())));
const handleEdit = (index: number, row: User) => {
  console.log(index, row);
};
const handleDelete = (index: number, row: User) => {
  console.log(index, row);
};
const list = computed(() => (Array.from({ length: 20 }).map((_, i) => ({
  date: `2016-05-0${i}`,
  title: `Hide on bushD众${i}`,
  text: `Jessy1李相赫（游戏ID：Faker），绰号“大魔王”，1996年5月7日出生于韩国， 《英雄联盟》职业选手，${i}`,
  tag: `No. 189, Grove St, Los Angeles${i}`,
}))));
const tableData: User[] = [
  {
    date: '2016-05-03',
    title: 'Hide on bushA人',
    text: 'Tom1李相赫（游戏ID：Faker），绰号“大魔王”，1996年5月7日出生于韩国， 《英雄联盟》职业选手，',
    tag: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    title: 'Hide on bushB从',
    text: 'John1李相赫（游戏ID：Faker），绰号“大魔王”，1996年5月7日出生于韩国， 《英雄联盟》职业选手，',
    tag: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    title: 'Hide on bushC丛',
    text: 'Morgan1李相赫（游戏ID：Faker），绰号“大魔王”，1996年5月7日出生于韩国， 《英雄联盟》职业选手，',
    tag: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    title: 'Hide on bushD众',
    text: 'Jessy1李相赫（游戏ID：Faker），绰号“大魔王”，1996年5月7日出生于韩国， 《英雄联盟》职业选手，',
    tag: 'No. 189, Grove St, Los Angeles',
  },
  ...list.value,
];

onMounted(() => {
  // console.log('3.-组件挂载到页面之后执行-------onMounted');
});
defineExpose({
});
</script>

<style lang='scss'>
.home-content {
  height: 100%;
  // overflow: hidden;
}
</style>
