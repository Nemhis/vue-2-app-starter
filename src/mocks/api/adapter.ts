import {AxiosInstance} from "axios";
import MockAdapter from "axios-mock-adapter";

export default class ApiMockAdapter {
  static mock(api: AxiosInstance): void {
    const mock = new MockAdapter(api);

    // TODO: Register your mocks
  }
}
