import AxiosClient from '../../axios/AxiosClient';
import { URLS } from '../../constants/urls';

export default class PostsRepository {
  apiClient = null;

  constructor() {
    this.apiClient = new AxiosClient();
  }

  getPosts = (_limit, _page) => {
    return this.apiClient.get({ url: URLS.postsUrl, config: { params: { _limit, _page } } });
  };
}
