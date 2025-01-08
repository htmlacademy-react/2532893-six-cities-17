import axios, {AxiosInstance} from 'axios';
import {BASE_URL, REQUEST_TIMEOUT} from '../data/server-data.ts';

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
  });

  return api;
};
