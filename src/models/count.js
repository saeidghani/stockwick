import actionWrapper from '../lib/actionWrapper';

export default {
  state: 0,
  reducers: {
    increment(state, payload) {
      return state + payload;
    },
  },
  effects: (dispatch) => ({
    async incrementAsync(payload) {
      return actionWrapper(
        async () => {
          await new Promise((resolve) => setTimeout(resolve, 1000));
          dispatch.count.increment(payload);
        },
        dispatch.util.errorHandler,
        dispatch.util.alert,
        { toast: true, message: 'added 1' },
      );
    },
  }),
};
