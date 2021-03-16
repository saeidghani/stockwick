import config from '../constants/config';

const actionWrapper = (fn, errorHandler, notify, options) => {
    const { toast = false, message = 'Updated successfully' } = options || {};

    return fn()
        .then((res) => {
            if (res && config?.isDevEnv) {
                // console.log({ url: res?.config?.url, res });
            }
            if (notify && toast) {
                notify({ message: res?.data?.message || message, type: 'success' });
            }

            return res;
        })
        .catch((error) => {
            if (config?.isDevEnv) {
                console.log('error.config', error.config);
                console.log('error.response', error.response);
            }

            if (errorHandler) {
                errorHandler(error);
            }

            throw error;
        });
};

export default actionWrapper;
