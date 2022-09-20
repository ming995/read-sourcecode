import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import { BaseConfig } from './IBaseNetworkAdapter'
/**
 * 基础网络适配器
 * 主要功能：
 *  1. 拦截器
 *  2. 错误码
 *  3. 参数序列化
 *  4. 取消请求
 *  5. 进度返回
 *  6. 上传
 *  7. 请求自动携带token
 */
export class BaseNetworkAdapter {
  // axios 接口
  axiosInterface: AxiosInstance;
  baseConfig: BaseConfig = {
    baseURL: 'http://xxx.com',
    timeout: 5000,
    requestPrefix: '/api'
  }
  constructor(axiosConfig: AxiosRequestConfig) {
    this.axiosInterface = axios.create(Object.assign(this.baseConfig, axiosConfig))
  }
}