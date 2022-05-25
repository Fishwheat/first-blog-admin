/**
 * Author: keli.yu@accentrix.com
 * Date: 2020/4/22 14:04
 */
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import qs from 'qs';
import { ElMessage } from 'element-plus';
import { storage } from './storage';

// 请求拦截
axios.interceptors.request.use((config) => {
  const { token } = storage.value;
  if (token) {
    if (config.headers) {
      config.headers.Authorization = token;
    }
  }
  return config;
}, (error) => Promise.reject(error));

// 返回响应数据拦截
axios.interceptors.response.use((res) => {
  console.log(res);
  // 状态码为 2xx 范围时都会调用该函数，处理响应数据
  if (res.status === 200) {
    console.log(res.status);
    return res;
  }
  return undefined;
}, (error) => {
  if (error.response.status) {
    // 状态码超过 2xx 范围时都会调用该函数，处理错误响应
    switch (error.response.status) {
      case 404:
        ElMessage({
          type: 'error',
          message: '请求路径找不到！',
          showClose: true,
        });
        break;
      case 502:
        ElMessage({
          type: 'error',
          message: '服务器内部报错！',
          showClose: true,
        });
        break;
      default:
        break;
    }
  }
  return Promise.reject(error);
});

class HttpUtil {
  static get<T = unknown, R = AxiosResponse<T>, D = unknown>(url: string, data?: [], config?: AxiosRequestConfig<D>) {
    if (data) {
      config = config || {};
      config.params = data;
    }
    return axios.get<T, R, D>(url, config);
  }

  static post(url: string, data?: [], config?: AxiosRequestConfig<unknown>) {
    return axios.post(url, qs.stringify(data, { arrayFormat: 'repeat' }), config);
  }

  static patch(url: string, data?: [], config?: AxiosRequestConfig<unknown>) {
    return axios.patch(url, qs.stringify(data, { arrayFormat: 'repeat' }), config);
  }

  static patchJSON(url: string, data?: [], config?: AxiosRequestConfig<unknown>) {
    config = config || { headers: {} };
    config.headers = config.headers || {};
    config.headers['content-type'] = 'application/json';
    return axios.patch(url, data, config);
  }

  static postJSON(url: string, data?: [], config?: AxiosRequestConfig<unknown>) {
    config = config || { headers: {} };
    config.headers = config.headers || {};
    config.headers['content-type'] = 'application/json';
    return axios.post(url, data, config);
  }

  static delete(url: string, data?: [], config?: AxiosRequestConfig<unknown>) {
    if (data) {
      config = config || {};
      config.params = data;
    }
    return axios.delete(url, config);
  }

  static putJSON(url: string, data?: [], config?: AxiosRequestConfig<unknown>) {
    config = config || { headers: {} };
    if (config.headers) {
      config.headers['content-type'] = 'application/json';
    }
    return axios.put(url, data, config);
  }
}

export default HttpUtil;
// 用法
// HttpUtil.get<{id: string}>('').then((res) => {
//   console.log(res.data.id);
// });
