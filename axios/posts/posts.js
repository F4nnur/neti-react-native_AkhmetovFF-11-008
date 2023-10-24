import axios from 'axios';
import { axiosClient } from '../axisos';

export const getPosts = (_limit, _page) => {
  return axiosClient.get('posts', {
    params: {
      _limit,
      _page,
    },
  });
};
