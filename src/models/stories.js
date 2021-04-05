import actionWrapper from '../lib/actionWrapper';
import axios from '../lib/api';

export default {
  namespace: 'stories',
  state: {},
  reducers: {},
  effects: (dispatch) => ({
    async getStories() {
      return actionWrapper(async () => {
        const res = await axios({
          url: '/stories',
        });
        return res;
      }, dispatch.util.errorHandler);
    },
    async addStory(data) {
      return actionWrapper(
        async () => {
          const res = await axios({
            method: 'post',
            url: '/stories',
            data,
          });
          return res;
        },
        dispatch.util.errorHandler,
        dispatch.util.alert,
        { message: 'new story added successfully' },
      );
    },
    async getStory({ storyId }) {
      return actionWrapper(async () => {
        const res = await axios({
          url: `/stories/${storyId}`,
        });
        return res;
      }, dispatch.util.errorHandler);
    },
    async deleteStory({ storyId }) {
      return actionWrapper(async () => {
        const res = await axios({
          method: 'delete',
          url: `/stories/${storyId}`,
        });
        return res;
      }, dispatch.util.errorHandler);
    },
    async getMyStories() {
      return actionWrapper(async () => {
        const res = await axios({
          url: '/stories/mine',
        });
        return res;
      }, dispatch.util.errorHandler);
    },
    async getFollowingStories() {
      return actionWrapper(async () => {
        const res = await axios({
          url: '/stories/following',
        });
        return res;
      }, dispatch.util.errorHandler);
    },
    async getStoryViewList({ storyId }) {
      return actionWrapper(async () => {
        const res = await axios({
          url: `/stories/viewList/${storyId}`,
        });
        return res;
      }, dispatch.util.errorHandler);
    },
  }),
};
