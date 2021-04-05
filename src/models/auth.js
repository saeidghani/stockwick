import Cookie from 'js-cookie';
import actionWrapper from '../lib/actionWrapper';
import axios from '../lib/api';

export default {
  namespace: 'auth',
  state: {},
  reducers: {
    setToken(state, { token, rememberMe }) {
      const options = { expires: rememberMe ? 7 : null };
      Cookie.set('token', token, options);
      return null;
    },
  },
  effects: (dispatch) => ({
    async getGoogleAuth() {
      return actionWrapper(async () => {
        const res = await axios({
          url: '/users/auth/google',
        });
        return res;
      }, dispatch.util.errorHandler);
    },
    async getFacebookAuth() {
      return actionWrapper(async () => {
        const res = await axios({
          url: '/users/auth/facebook',
        });
        return res;
      }, dispatch.util.errorHandler);
    },
    async getTwitterAuth() {
      return actionWrapper(async () => {
        const res = await axios({
          url: '/users/auth/twitter',
        });
        return res;
      }, dispatch.util.errorHandler);
    },
    async getLinkedinAuth() {
      return actionWrapper(async () => {
        const res = await axios({
          url: '/users/auth/linkedin',
        });
        return res;
      }, dispatch.util.errorHandler);
    },
    async setRequiredFields(data) {
      return actionWrapper(async () => {
        const res = await axios({
          method: 'post',
          url: '/users/auth/set-required-fields',
          data,
        });
        return res;
      }, dispatch.util.errorHandler);
    },
  }),
};
