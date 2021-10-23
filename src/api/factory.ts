import axios, {AxiosInstance} from 'axios';
import {API_URL} from '@/config';

export default function createApiInstance(): AxiosInstance {
  return axios.create({
    baseURL: API_URL,
    timeout: 10000,
    withCredentials: true
  });
}
