import { AxiosInstance } from 'axios';

export default abstract class AbstractApi {
  protected api: AxiosInstance;

  constructor(api: AxiosInstance) {
    // TODO: register your own api in this.myApi = new MyApi(this.api); // @see ./modules/abstract-api.ts
    this.api = api;
  }
}
