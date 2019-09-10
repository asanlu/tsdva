import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import qs from 'qs';
import WEBSITE_CONFIG from '../../config';

interface RequestOption extends AxiosRequestConfig {
  method?: | 'get' | 'post';
  url: string;
  dataType?: 'form';    // 标志form表单传输方式
};

// 添加请求拦截器
axios.interceptors.request.use((config: AxiosRequestConfig) => {
  console.log('request....', config)

  // post form表单提交形式
  if (config.headers.dataType === 'form') {
    config.headers = {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
    config.data = qs.stringify(config.data);
  }

  // 开发环境添加 '/api' 前缀做跨域
  config.url = WEBSITE_CONFIG.apiPrefix + config.url!;

  return config;
}, error => {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use((response: AxiosResponse) => {
  // 对响应数据做点什么
  return response;
}, (error: AxiosError) => {
  return Promise.reject(error);
});

const request = ({ method, url, data, params, dataType }: RequestOption) => {
  const requestConfig: AxiosRequestConfig = {
    method,
    url,
    data,
    params,
    headers: {
      dataType: dataType ? dataType : 'json'
    },
    timeout: 5 * 1000,
  };
  return axios(requestConfig);
};

export default request;
