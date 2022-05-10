// 引入vueuse上的本地存储
import { useStorage } from '@vueuse/core';

export const storage = useStorage('useStorageCommon', {
  token: '', // 定义token
});
