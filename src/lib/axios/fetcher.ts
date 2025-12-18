import type { AxiosRequestConfig } from 'axios';
import { getAxiosInstance } from './axios';

// ----------------------------------------------------------------------

export const fetcher = async (args: string | [string, AxiosRequestConfig]) => {
  try {
    const [url, config] = Array.isArray(args) ? args : [args];
    const instance = getAxiosInstance();
    const res = await instance.get(url, { ...config });

    return res.data;
  } catch (error) {
    console.error('Failed to fetch:', error);
    throw error;
  }
};


