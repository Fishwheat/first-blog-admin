<template>
  <div class="login">
    <blog-panel>
      <div class="login-title">登录</div>
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        status-icon
        :rules="rules"
        label-width="60px"
        class="login-form"
      >
        <el-form-item label="账号" prop="username">
          <el-input v-model.number="ruleForm.username" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password" type="password" autocomplete="off" />
        </el-form-item>
        <el-form-item class="login-form-footer">
          <el-button type="primary" @click="submitForm(ruleFormRef)"
            >登录</el-button
          >
          <el-button @click="resetForm(ruleFormRef)">重置</el-button>
        </el-form-item>
      </el-form>
    </blog-panel>
  </div>
</template>

<script lang='ts'>
import {
  onMounted, defineExpose, reactive, ref,
} from 'vue';
import type { FormInstance } from 'element-plus';
import BlogPanel from '@/components/blog-panel/index.vue';
import { useRouter } from 'vue-router';
import RoutesEnum from '@/enums/routes.enums';
import { storage } from '@/helpers/storage';

export default { name: 'Login' };
</script>

<script lang='ts' setup>
const router = useRouter();

const ruleFormRef = ref<FormInstance>();

const validateUsername = (rule: unknown, value: number, callback:((e?: Error) => void)) => {
  if (!value) {
    callback(new Error('请输入账号'));
  } else {
    callback();
  }
};

const validatePassword = (rule: unknown, value: string, callback: ((e?: Error) => void)) => {
  if (value === '') {
    callback(new Error('请输入密码'));
  } else {
    callback();
  }
};

const ruleForm = reactive({
  password: '',
  username: '',
});

const rules = reactive({
  username: [{ validator: validateUsername, trigger: 'blur' }],
  password: [{ validator: validatePassword, trigger: 'blur' }],
});

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!');
      storage.value.token = 'fefegfesifkiaodkopwakdopwad';
      router.replace({ name: RoutesEnum.HOME });
    } else {
      console.log('error submit!');
      return false;
    }
    return true;
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};

onMounted(() => {
  // console.log('3.-组件挂载到页面之后执行-------onMounted');
});
defineExpose({
});
</script>

<style lang='scss'>
.login {
  width: 400px;
  background: #fff;
  .login-title {
    font-size: 24px;
    color: #555;
    margin-bottom: 20px;
  }
  .login-form {
    padding-right: 20px;
  }
}
</style>
