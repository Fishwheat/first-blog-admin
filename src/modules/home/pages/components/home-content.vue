<template>
  <div class="home-content">
    <el-table :data="filterTableData" style="width: 100%" header-row-class-name="aaa">
      <el-table-column label="时间" prop="date">
        <template #default="scope">
          {{ scope.row.date.toLocaleString() }}
        </template>
      </el-table-column>
      <el-table-column label="标题" prop="title" />
      <el-table-column label="简介" prop="introduction" />
        <!-- <template #default="scope">
          <div v-html="scope.row.introduction"></div>
        </template> -->
      <!-- </el-table-column> -->
      <el-table-column label="标签" prop="tags">
        <template #default="scope">
          <el-tag v-for="(item, index) in scope.row.tags" :key="index" class="table-tag">
            {{ item }}
          </el-tag>
        </template>
      </el-table-column>
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
  onMounted, defineExpose, computed, ref, defineEmits,
} from 'vue';

export default { name: 'HomeContent' };

</script>

<script lang='ts' setup>
const emit = defineEmits<{(e: 'handleEdit', value: unknown): void
}>();

interface table {
  date: Date
  title: string
  introduction: string
  text: string
  tags: string[]
}
const search = ref('');
const filterTableData = computed(() => tableData.filter((data) => !search.value || data.title.toLowerCase().includes(search.value.toLowerCase())));
const handleEdit = (index: number, row: table) => {
  emit('handleEdit', row);
  // console.log(index, row);
};
const handleDelete = (index: number, row: table) => {
  // console.log(index, row);
};
const list = computed(() => (Array.from({ length: 20 }).map((_, i) => ({
  date: new Date(),
  title: `Hide on bushD众${i}`,
  introduction: `Tom1李相赫（游戏ID：Faker），绰号“大魔王”，1996年5月7日出生于韩国， 《英雄联盟》职业选手，${i}`,
  text: `<p>Jessy1李相赫（游戏ID：Faker），绰号“大魔王”，1996年5月7日出生于韩国， 《英雄联盟》职业选手，${i}</p>`,
  tags: [`Tag ${i}`, 'Tag 2', 'Tag 3'],
}))));
const tableData: table[] = [
  {
    date: new Date(),
    title: 'Hide on bushA人',
    introduction: 'Tom1李相赫（游戏ID：Faker），绰号“大魔王”，1996年5月7日出生于韩国， 《英雄联盟》职业选手，',
    text: '<h1>Tom1李相赫（游戏ID：Faker），绰号“大魔王”，1996年5月7日出生于韩国， 《英雄联盟》职业选手，</h1>',
    tags: ['Tag 1', 'Tag 2', 'Tag 3'],
  },
  {
    date: new Date(),
    title: 'Hide on bushB从',
    introduction: 'Tom1李相赫（游戏ID：Faker），绰号“大魔王”，1996年5月7日出生于韩国， 《英雄联盟》职业选手，',
    text: '<h2>John1李相赫（游戏ID：Faker），绰号“大魔王”，1996年5月7日出生于韩国， 《英雄联盟》职业选手，</h2>',
    tags: ['Tag 1', 'Tag 2', 'Tag 3'],
  },
  {
    date: new Date(),
    title: 'Hide on bushC丛',
    introduction: 'Tom1李相赫（游戏ID：Faker），绰号“大魔王”，1996年5月7日出生于韩国， 《英雄联盟》职业选手，',
    text: '<h3>Morgan1李相赫（游戏ID：Faker），绰号“大魔王”，1996年5月7日出生于韩国， 《英雄联盟》职业选手，</h3>',
    tags: ['Tag 1', 'Tag 2', 'Tag 3'],
  },
  {
    date: new Date(),
    title: 'Hide on bushD众',
    introduction: 'Tom1李相赫（游戏ID：Faker），绰号“大魔王”，1996年5月7日出生于韩国， 《英雄联盟》职业选手，',
    text: '<h4>Jessy1李相赫（游戏ID：Faker），绰号“大魔王”，1996年5月7日出生于韩国， 《英雄联盟》职业选手，</h4>',
    tags: ['Tag 1', 'Tag 2', 'Tag 3'],
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
  overflow: auto;
  // overflow: hidden;
  .table-tag {
    margin-right: 5px;
    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
