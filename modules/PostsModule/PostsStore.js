import { makeAutoObservable } from 'mobx';
import PostsService from './PostsService';

export class PostsStore {
  posts = [];
  isLoading = false;
  postsService;

  constructor() {
    makeAutoObservable(this);
    this.postsService = new PostsService();
  }

  getItems = () => {
    this.setIsLoading(true);
    this.postsService
      .getItems()
      .then(result => {
        this.setItems(result);
      })
      .catch(error => console.log(error))
      .finally(() => this.setIsLoading(false));
  };
  setIsLoading = value => {
    this.isLoading = value;
  };

  setItems = items => {
    this.posts = items;
  };
}
