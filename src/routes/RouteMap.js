export default {
  home: '/home',
  profile: {
    index: '/profile',
    edit: '/profile/edit',
  },
  chart: '/chart',
  stock: {
    view: (stockId) => {
      return `/stock/${stockId}`;
    },
  },
  feed: {
    index: '/feed',
  },
  auth: {
    google: '/api/users/auth/google/callback',
  },
};
