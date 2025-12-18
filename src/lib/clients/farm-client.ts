// utils/clients/farm-client.ts
import axios from 'axios';
import { CONFIG } from 'src/global-config';

const farmClient = axios.create({
  baseURL: CONFIG.farmApiUrl,
});

// Request logging
farmClient.interceptors.request.use(
  (config) => {
    // console.log(
    //   `[FARM CLIENT] → ${config.method?.toUpperCase()} ${config.baseURL}${config.url}`,
    //   {
    //     params: config.params,
    //     data: config.data,
    //     headers: config.headers,
    //   }
    // );
    (config as any).metadata = { startTime: new Date() };
    return config;
  },
  (error) => {
    console.error('[FARM CLIENT] ❌ Request error:', error);
    return Promise.reject(error);
  }
);

// Response logging
farmClient.interceptors.response.use(
  (response) => {
    const { config } = response;
    const duration =
      new Date().getTime() - new Date((config as any).metadata?.startTime).getTime();

    // console.log(
    //   `[FARM CLIENT] ← ${config.method?.toUpperCase()} ${config.baseURL}${config.url} [${response.status}] (${duration}ms)`,
    //   {
    //     data: response.data,
    //   }
    // );
    return response;
  },
  (error) => {
    const config = error.config || {};
    const duration =
      new Date().getTime() - new Date((config as any).metadata?.startTime || Date.now()).getTime();

    console.error(
      `[FARM CLIENT] ❌ ${config.method?.toUpperCase()} ${config.baseURL}${config.url} [FAILED] (${duration}ms)`,
      {
        error: error.response?.data || error.message,
        status: error.response?.status,
      }
    );

    return Promise.reject(error.response?.data || 'Farm API error');
  }
);

export default farmClient;
