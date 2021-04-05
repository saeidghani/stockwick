import actionWrapper from '../lib/actionWrapper';
import axios from '../lib/api';

export default {
  namespace: 'posts',
  state: {},
  reducers: {},
  effects: (dispatch) => ({
    async getPosts() {
      return actionWrapper(async () => {
        const res = await axios({
          url: '/posts',
        });
        return res;
      }, dispatch.util.errorHandler);
    },
    async addPost(data) {
      return actionWrapper(
        async () => {
          const res = await axios({
            method: 'post',
            url: '/posts',
            data,
          });
          return res;
        },
        dispatch.util.errorHandler,
        dispatch.util.alert,
        { message: 'new post added successfully' },
      );
    },
    async getPost({ postId }) {
      return actionWrapper(async () => {
        const res = await axios({
          url: `/posts/${postId}`,
        });
        return res;
      }, dispatch.util.errorHandler);
    },
    async deletePost({ postId }) {
      return actionWrapper(async () => {
        const res = await axios({
          method: 'delete',
          url: `/posts/${postId}`,
        });
        return res;
      }, dispatch.util.errorHandler);
    },
    async getMyPosts() {
      return actionWrapper(async () => {
        const res = await axios({
          url: '/posts/mine',
        });
        return res;
      }, dispatch.util.errorHandler);
    },
    async getFollowingPosts() {
      return actionWrapper(async () => {
        const res = await axios({
          url: '/posts/following',
        });
        return res;
      }, dispatch.util.errorHandler);
    },
    async likePost({ postId }) {
      return actionWrapper(async () => {
        const res = await axios({
          method: 'post',
          url: `/posts/${postId}/like`,
        });
        return res;
      }, dispatch.util.errorHandler);
    },
    async unLikePost({ postId }) {
      return actionWrapper(async () => {
        const res = await axios({
          method: 'post',
          url: `/posts/${postId}/remove-like`,
        });
        return res;
      }, dispatch.util.errorHandler);
    },
    async commentPost({ postId }) {
      return actionWrapper(async () => {
        const res = await axios({
          method: 'post',
          url: `/posts/${postId}/comment`,
        });
        return res;
      }, dispatch.util.errorHandler);
    },
  }),
};
