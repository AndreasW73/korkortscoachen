// utils/fetchers/farm-fetcher.ts
import type { AxiosRequestConfig } from 'axios';
import farmClient from '../clients/farm-client';

export const farmFetcher = async (
  args: string | [string, AxiosRequestConfig]
) => {
  const [url, config] = Array.isArray(args) ? args : [args];
  const res = await farmClient.get(url, config);
  return res.data;
};
