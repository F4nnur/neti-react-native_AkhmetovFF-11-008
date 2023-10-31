import PostsRepository from './PostsRepository';

export default class PostsService {
  postsRepository;

  constructor() {
    this.postsRepository = new PostsRepository();
  }

  getItems = async () => {
    const res = await this.postsRepository.getPosts(5, 10);
    return res.data;
  };
}
