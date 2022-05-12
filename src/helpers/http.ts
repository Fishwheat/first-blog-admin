/**
 * Author: keli.yu@accentrix.com
 * Date: 2020/4/22 14:04
 */
import axios from 'axios';
import qs from 'qs';
import { storage } from './storage';

axios.interceptors.request.use((config) => {
  const { token } = storage.value;
  if (token) {
    if (config.headers) {
      config.headers.Authorization = token;
    }
  }
  return config;
}, (error) => Promise.reject(error));

class HttpUtil {
  static get(url: string, data: [], config: {params: []}) {
    if (data) {
      config = config || {};
      config.params = data;
    }
    return axios.get(url, config);
  }

  static post(url: string, data: [], config: {params: []}) {
    return axios.post(url, qs.stringify(data, { arrayFormat: 'repeat' }), config);
  }

  static patch(url: string, data: [], config: {params: []}) {
    return axios.patch(url, qs.stringify(data, { arrayFormat: 'repeat' }), config);
  }

  static patchJSON(url: string, data: [], config: any) {
    config = config || { headers: {} };
    config.headers = config.headers || {};
    config.headers['content-type'] = 'application/json';
    return axios.patch(url, data, config);
  }

  static postJSON(url: string, data: [], config: any) {
    config = config || { headers: {} };
    config.headers = config.headers || {};
    config.headers['content-type'] = 'application/json';
    return axios.post(url, data, config);
  }

  static delete(url: string, data: [], config: {params: []}) {
    if (data) {
      config = config || {};
      config.params = data;
    }
    return axios.delete(url, config);
  }

  static putJSON(url: string, data: [], config: {headers: any}) {
    config = config || { headers: {} };
    config.headers['content-type'] = 'application/json';
    return axios.put(url, data, config);
  }
}

export default HttpUtil;
