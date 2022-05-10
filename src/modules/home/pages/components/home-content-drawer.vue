<template>
  <div class="home-content-drawer">
     <el-drawer
      custom-class="home-content-drawer_el-drawer"
      :modelValue="props.visible"
      @update:visible="$emit('update:visible', $event)"
      :title="title"
      size="80%"
      direction="rtl"
      :show-close="false"
      >
      <el-form ref="formRef" :model="form" class="form" label-position="top">
        <el-form-item label="时间" prop="time">
          <el-date-picker v-model="form.date" type="date" />
        </el-form-item>
        <el-form-item
          label="标题"
          prop="title"
          :rules="titleRules"
        >
          <el-input
            v-model="form.title" maxlength="50"
          />
        </el-form-item>
        <el-form-item
          label="简介"
          prop="introduction"
          :rules="[{ required: true, message: '不能为空', trigger: 'blur' }]"
        >
          <el-input v-model="form.introduction" type="textarea" class="introduction-textarea"/>
        </el-form-item>
        <el-form-item
          label="详细内容"
          prop="text"
          :rules="[{ required: true, message: '不能为空', trigger: 'blur' }]"
        >
          <div style="border: 1px solid #dcdfe6">
            <Toolbar
              style="border-bottom: 1px solid #dcdfe6"
              :editor="editorRef"
              :defaultConfig="toolbarConfig"
              mode="default"
            />
            <Editor
              style="height: 500px; overflow-y: hidden;"
              v-model="form.text"
              :defaultConfig="editorConfig"
              mode="default"
              @onCreated="handleCreated"
            />
          </div>
        </el-form-item>
        <el-form-item
          label="标签"
          prop="tag"
        >
          <div class="tag">
            <el-tag
              v-for="tag in form.tags"
              :key="tag"
              class="mx-1 tag-item"
              closable
              :disable-transitions="false"
              @close="handleClose(tag)"
            >
              {{ tag }}
            </el-tag>
          </div>
          <el-input
            v-if="inputVisible"
            ref="InputRef"
            v-model="inputValue"
            class="ml-1 w-20 tag-input"
            size="small"
            @keyup.enter="handleInputConfirmEnter"
            @blur="handleInputConfirmBlur"
          />
          <el-button v-else class="button-new-tag ml-1" size="small" @click="showInput">
            + 添加标签
          </el-button>
        </el-form-item>
      </el-form>
      <template #footer>
        <div style="flex: auto">
          <el-button @click="cancelClick">取消</el-button>
          <el-button type="primary" @click="confirmClick">确定</el-button>
        </div>
      </template>
    </el-drawer>
  </div>
</template>

<script lang='ts'>
import {
  onMounted, defineExpose, defineProps, defineEmits, computed, reactive, ref, nextTick, watch, shallowRef, onBeforeUnmount,
} from 'vue';
import type { FormInstance, ElInput } from 'element-plus';
import '@wangeditor/editor/dist/css/style.css'; // 引入 css
import {
  Editor, Toolbar,
} from '@wangeditor/editor-for-vue';
import {
  IEditorConfig,
} from '@wangeditor/editor';

export default { name: 'HomeConetntDrawer' };
</script>

<script lang='ts' setup>
const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
  isEdit: {
    type: Boolean,
    default: false,
  },
  propFrom: {
    type: Object,
    default: null,
  },
});

const emit = defineEmits<{(e: 'update:visible', value: boolean): void
}>();

watch(() => props.visible, (newVal, oldVal) => {
  if (newVal && props.propFrom) {
    Object.assign(form, props.propFrom);
  }
  if (!newVal) {
    Object.assign(form, {
      title: '',
      date: new Date(),
      introduction: '',
      text: '',
      tags: ['Tag 1', 'Tag 2', 'Tag 3'],
    });
    formRef.value?.clearValidate();
  }
});

// 标题
const title = computed(() => (props.isEdit ? '编辑' : '添加'));

// 拿到form表单
const formRef = ref<FormInstance>();

// 表单数据
const form = reactive({
  title: '',
  date: new Date(),
  introduction: '',
  text: '',
  tags: ['Tag 1', 'Tag 2', 'Tag 3'],
});

// title的限制条件start
const titleRules = computed(() => [
  { required: true, message: '不能为空', trigger: 'blur' },
  {
    trigger: 'blur',
    validator: async (rule:unknown, value = [], callback:((e?: Error) => void)) => {
      if (value?.length > 50) {
        callback(new Error('长度不能超过50位'));
      }
      callback();
    },
  },
]);
// title的限制条件end

// text模块start
// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef();
// 编辑器头部设定
const toolbarConfig = {};
// 编辑器设定
const editorConfig: Partial<IEditorConfig> = { MENU_CONF: {} };
if (editorConfig?.MENU_CONF) {
  editorConfig.MENU_CONF.uploadImage = {
    // 其他配置...
    // 小于该值就插入 base64 格式（而不上传），默认为 0
    server: '/api/upload',
    base64LimitSize: 1 * 1024 * 1024 * 10, // 10M
  };
  // editorConfig.MENU_CONF.bgColor = {
  //   colors: ['#000', '#333', '#666'],
  // };
  // editorConfig.MENU_CONF.fontSize = {
  //   fontSizeList: ['12px', '16px', '24px', '40px'],
  // };
}
// 创建完成时触发
const handleCreated = (editor:unknown) => {
  editorRef.value = editor; // 记录 editor 实例，重要！
};
// text模块end

// tag模块start
const inputValue = ref('');
const inputVisible = ref(false);
const InputRef = ref<InstanceType<typeof ElInput>>();

const handleClose = (tag: string) => {
  form.tags.splice(form.tags.indexOf(tag), 1);
};

const showInput = () => {
  inputVisible.value = true;
  nextTick(() => {
    if (InputRef.value?.input?.focus()) {
      InputRef.value.input.focus();
    }
  });
};

const handleInputConfirmEnter = () => {
  if (inputValue.value) {
    form.tags.push(inputValue.value);
  }
  inputValue.value = '';
};
const handleInputConfirmBlur = () => {
  if (inputValue.value) {
    form.tags.push(inputValue.value);
  }
  inputVisible.value = false;
  inputValue.value = '';
};
// tag模块end

// 右下角按钮模块start
const cancelClick = () => {
  emit('update:visible', false);
};
const confirmClick = () => {
  // console.log({ ...form });
  formRef.value?.validate((valid) => {
    if (valid) {
      console.log(123);
      emit('update:visible', false);
    }
  });
};
// 右下角按钮模块end

onMounted(() => {
  // console.log('3.-组件挂载到页面之后执行-------onMounted');
});
// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value;
  if (editor == null) return;
  editor.destroy();
});
defineExpose({
});
</script>

<style lang='scss'>
.home-content-drawer {
  .home-content-drawer_el-drawer {
    .el-drawer__header {
      color: #333;
      font-size: 24px;
    }
    .form {
      box-sizing: content-box;
      .introduction-textarea {
        .el-textarea__inner {
          min-height: 100px !important;
          resize: none;
        }
      }
      .tag {
        width: 100%;
        border: 1px solid #dcdfe6;
        padding: 5px 15px;
        border-radius: 4px;
        &:hover {
          border-color: #c0c4cc;
        }
        .tag-item {
          margin: 5px 5px;
        }
      }
      .tag-input {
        height: 32px;
        margin-top: 5px;
      }
      .button-new-tag {
        height: 32px;
        color: #409eff;
        border-color: #d9ecff;
        margin-top: 5px;
      }
    }
  }
}
</style>
