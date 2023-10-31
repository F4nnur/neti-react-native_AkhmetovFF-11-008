import axios from 'axios';
import { URLS } from '../constants/urls';

export default class AxiosClient {
  static SUCCESS_STATUSES = [200, 201];
  static SERVER_ERROR = 500;

  api;

  constructor(config) {
    this.api = axios.create(config);
    this.api.defaults.baseURL = URLS.BASE_URL;
    this.api.defaults.headers.common['Content-Type'] = 'application/json';
  }

  get = config => {
    return this.api.get(config.url, config.config);
  };

  post = config => {
    return this.api.post(config.url, config.data, config.config);
  };

  put = config => {
    return this.api.put(config.url, config.data, config.config);
  };

  delete = config => {
    return this.api.delete(config.url, config.config);
  };
}
