import axios from 'axios';
// import Cookies from 'js-cookie';
import Config from '../constants/config';

/**
 * Axios defaults
 */
axios.defaults.baseURL = Config.apiBaseUrl;
// axios.defaults.withCredentials = true;

// Headers
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common.Accept = 'application/json';

/**
 * Request Interceptor
 */
axios.interceptors.request.use(
  async (inputConfig) => {
    const config = inputConfig;

    try {
      // const token = Cookies.get('token');
      const token =
        // eslint-disable-next-line max-len
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDZiM2FkMTA0OTYzODI5MmRlYTRlNjAiLCJyb2xlcyI6WyJ1c2VyIl0sInBlcm1pc3Npb25zIjpbXSwic3VzcGVuZGVkIjpmYWxzZSwidGhpcmRQYXJ0eUF1dGgiOmZhbHNlLCJpYXQiOjE2MTc2OTM0OTZ9.Wl8x0Hxl0G-ZV_8FqEBiu57H73hneti9XMibvkU8dbs';
      if (token && token !== 'undefined') {
        config.headers.common.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      /* Nothing */
    }

    return config;
  },
  (error) => {
    throw error;
  },
);

/**
 * Response Interceptor
 */
axios.interceptors.response.use(
  (res) => {
    // Status code isn't a success code - throw error
    if (!`${res.status}`.startsWith('2')) {
      throw res.data;
    }

    // Otherwise just return the data
    if (res.data && typeof res.data === 'object') {
      res.data.timeStamp = Date.now();
    }

    return res;
  },
  (error) => {
    throw error;
  },
);

export default axios;
