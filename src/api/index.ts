import {AxiosInstance} from 'axios';

export default class Api {
  private readonly apiInstance: AxiosInstance;

  constructor(api: AxiosInstance) {
    this.apiInstance = api;
  }
}
