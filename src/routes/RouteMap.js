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
};