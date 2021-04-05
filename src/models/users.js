import actionWrapper from '../lib/actionWrapper';
import axios from '../lib/api';

export default {
  namespace: 'users',
  state: {},
  reducers: {},
  effects: (dispatch) => ({
    async getUsers() {
      return actionWrapper(async () => {
        const res = await axios({
          url: '/users',
        });
        return res;
      }, dispatch.util.errorHandler);
    },
    async addUser() {
      return actionWrapper(async () => {
        const res = await axios({
          method: 'post',
          url: '/users',
        });
        return res;
      }, dispatch.util.errorHandler);
    },
    async getUser({ userId }) {
      return actionWrapper(async () => {
        const res = await axios({
          url: `/users/${userId}`,
        });
        return res;
      }, dispatch.util.errorHandler);
    },
    async patchUser({ userId }) {
      return actionWrapper(async () => {
        const res = await axios({
          method: 'patch',
          url: `/users/${userId}`,
        });
        return res;
      }, dispatch.util.errorHandler);
    },
    async blockUser({ userId }) {
      return actionWrapper(async () => {
        const res = await axios({
          method: 'post',
          url: `/users/${userId}/block`,
        });
        return res;
      }, dispatch.util.errorHandler);
    },
    async unBlockUser({ userId }) {
      return actionWrapper(async () => {
        const res = await axios({
          method: 'post',
          url: `/users/${userId}/unblock`,
        });
        return res;
      }, dispatch.util.errorHandler);
    },
    async followUser({ userId }) {
      return actionWrapper(async () => {
        const res = await axios({
          method: 'post',
          url: `/users/${userId}/follow`,
        });
        return res;
      }, dispatch.util.errorHandler);
    },
    async unFollowUser({ userId }) {
      return actionWrapper(async () => {
        const res = await axios({
          method: 'post',
          url: `/users/${userId}/unFollow`,
        });
        return res;
      }, dispatch.util.errorHandler);
    },
    async removeFollower({ userId }) {
      return actionWrapper(async () => {
        const res = await axios({
          method: 'post',
          url: `/users/${userId}/removeFollower`,
        });
        return res;
      }, dispatch.util.errorHandler);
    },
    async suspendUser({ userId }) {
      return actionWrapper(async () => {
        const res = await axios({
          method: 'post',
          url: `/users/${userId}/suspend`,
        });
        return res;
      }, dispatch.util.errorHandler);
    },
  }),
};
