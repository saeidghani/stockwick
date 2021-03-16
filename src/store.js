import { init } from '@rematch/core';
import loadingPlugin from '@rematch/loading';
import persistPlugin from '@rematch/persist';
import storage from 'redux-persist/lib/storage';
import * as models from './models';

const persistConfig = {
  key: 'root',
  storage,
};

const store = init({ models, plugins: [loadingPlugin(), persistPlugin(persistConfig)] });

export default store;
