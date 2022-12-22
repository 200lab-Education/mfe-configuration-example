import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

axios.create({
  baseURL: process.env.BASE_URL,
});

axios.interceptors.request.use((config: AxiosRequestConfig) => {
  return config;
});

axios.interceptors.response.use((response: AxiosResponse) => {
  return response;
});

export default axios;
