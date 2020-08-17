
/**
 * 接口
 */
import axios from "axios";

// 创建axios实例
let service = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  baseURL: process.env.VUE_APP_BASE_URL,
  // 超时
  timeout: 20000
});

// 添加请求拦截器
service.interceptors.request.use( config => {

  return config

}, error => {
  return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use( res => {
  
  return res

}, error => {

  return Promise.reject(error);

});

export default service