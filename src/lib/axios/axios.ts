import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { CONFIG } from 'src/global-config';

// ----------------------------------------------------------------------

let currentBaseUrl = CONFIG.serverUrl;

const createAxiosInstance = (baseURL: string): AxiosInstance => {
  const instance = axios.create({ baseURL });

  instance.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject((error.response?.data || 'Something went wrong!'))
  );

  return instance;
};

// Start with default
let axiosInstance = createAxiosInstance(currentBaseUrl);

// Optionally update baseURL later
export const setBaseUrl = (url: string) => {
  currentBaseUrl = url;
  axiosInstance = createAxiosInstance(url);
};

export const getAxiosInstance = () => axiosInstance;

export default axiosInstance;
