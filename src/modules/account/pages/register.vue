<template>
  <div class="register">
    <blog-panel>
      <div class="register-title">注册</div>
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        status-icon
        :rules="rules"
        label-width="80px"
        class="register-form"
      >
        <el-form-item label="账号" prop="username">
          <el-input v-model.number="ruleForm.username" placeholder="请输入账号" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password" type="password" autocomplete="off" placeholder="请输入密码" />
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input
            v-model="ruleForm.checkPass"
            type="password"
            autocomplete="off"
            placeholder="请再次输入密码"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)"
            >注册</el-button
          >
          <el-button @click="resetForm(ruleFormRef)">重置</el-button>
        </el-form-item>
      </el-form>
      <div class="register-link">
        <el-link :icon="Back" type="primary" @click="toLogin">返回登录</el-link>
      </div>
    </blog-panel>
  </div>
</template>

<script lang='ts'>
import {
  onMounted, defineExpose, reactive, ref,
} from 'vue';
import BlogPanel from '@/components/blog-panel/index.vue';
import type { FormInstance } from 'element-plus';
import { ElMessage } from 'element-plus';
import { useRouter } from 'vue-router';
import RoutesEnum from '@/enums/routes.enums';
import { Back } from '@element-plus/icons-vue';

export default { name: 'Register' };
</script>

<script lang='ts' setup>
const router = useRouter();

const ruleFormRef = ref<FormInstance>();

const validateUsername = (rule: unknown, value: number, callback:((e?: Error) => void)) => {
  if (!value) {
    callback(new Error('请输入账号！'));
  } else {
    callback();
  }
};

const validatePass = (rule: unknown, value: string, callback: ((e?: Error) => void)) => {
  if (value === '') {
    callback(new Error('请输入密码！'));
  } else {
    if (ruleForm.checkPass !== '') {
      if (!ruleFormRef.value) return;
      ruleFormRef.value.validateField('checkPass', () => null);
    }
    callback();
  }
};
const validatePass2 = (rule: unknown, value: string, callback: ((e?: Error) => void)) => {
  if (value === '') {
    callback(new Error('请再次输入密码！'));
  } else if (value !== ruleForm.password) {
    callback(new Error('两次密码输入不一致！'));
  } else {
    callback();
  }
};

const ruleForm = reactive({
  username: '',
  password: '',
  checkPass: '',
});

const rules = reactive({
  username: [{ validator: validateUsername, trigger: 'blur' }],
  password: [{ validator: validatePass, trigger: 'blur' }],
  checkPass: [{ validator: validatePass2, trigger: 'blur' }],
});

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      ElMessage({
        message: '注册成功！',
        type: 'success',
        duration: 1500,
        offset: 100,
      });
      router.back();
    } else {
      console.log('error submit!');
      return false;
    }
    return undefined;
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};

const toLogin = () => {
  router.push({
    name: RoutesEnum.LOGIN,
  });
};

onMounted(() => {
  // console.log('3.-组件挂载到页面之后执行-------onMounted');
});
defineExpose({
});
</script>

<style lang='scss'>
.register {
  width: 400px;
  .register-title {
    font-size: 24px;
    color: #333;
    margin-bottom: 20px;
    user-select: none;
  }
  .register-form {
    padding-right: 20px;
  }
  .register-link {
    height: 24px;
    text-align: right;
    line-height: 24px;
    span {
      font-size: 14px;
    }
  }
}
</style>
