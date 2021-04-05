import actionWrapper from '../lib/actionWrapper';
import axios from '../lib/api';

export default {
  namespace: 'profile',
  state: {},
  reducers: {},
  effects: (dispatch) => ({
    async getProfile() {
      return actionWrapper(async () => {
        const res = await axios({
          url: '/users/profile',
        });
        return res;
      }, dispatch.util.errorHandler);
    },
    async editProfile() {
      return actionWrapper(async () => {
        const res = await axios({
          method: 'patch',
          url: '/users/profile',
        });
        return res;
      }, dispatch.util.errorHandler);
    },
    async changeProfileEmail() {
      return actionWrapper(async () => {
        const res = await axios({
          method: 'post',
          url: '/users/profile/change-email',
        });
        return res;
      }, dispatch.util.errorHandler);
    },
    async getProfileBlockList() {
      return actionWrapper(async () => {
        const res = await axios({
          url: '/users/profile/block-list',
        });
        return res;
      }, dispatch.util.errorHandler);
    },
    async getProfileFollowers() {
      return actionWrapper(async () => {
        const res = await axios({
          url: '/users/profile/followers',
        });
        return res;
      }, dispatch.util.errorHandler);
    },
    async getProfileFollowing() {
      return actionWrapper(async () => {
        const res = await axios({
          url: '/users/profile/following',
        });
        return res;
      }, dispatch.util.errorHandler);
    },
  }),
};
