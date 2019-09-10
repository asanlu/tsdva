import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import qs from 'qs';
import WEBSITE_CONFIG from '../../config';
import { getAuthority } from './authority';
import { Toast } from 'antd-mobile';

interface RequestOption extends AxiosRequestConfig {
  method?: | 'get' | 'post';
  url: string;
  dataType?: 'form';    // 标志form表单传输方式
};

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  400: '发出的请求有错误。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '接口不存在或地址不存在',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
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

  // 参数添加 auth key验证(可自行修改、添加authorization逻辑, 此例是豆瓣api的)
  // （如果没有key，可暂时使用0b2bdeda43b5688921839c8ecb20399b）
  config.params = { ...config.params, apikey: getAuthority() }

  return config;
}, error => {
  // 错误
  return Promise.reject(error);
});


// 添加响应拦截器
axios.interceptors.response.use((response: AxiosResponse) => {
  // console.log('response', response);

  return response;
}, (error: AxiosError) => {

  Toast.fail(codeMessage[error.response!.status]);

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
