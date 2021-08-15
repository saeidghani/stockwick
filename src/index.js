import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { getPersistor } from '@rematch/persist';
import { PersistGate } from 'redux-persist/lib/integration/react';
import reportWebVitals from './reportWebVitals';

import store from './store';
import Routes from './routes/index';
import NotificationProvider from './NotificationProvider';
import 'antd/dist/antd.css';
import './assets/styles/customAntd.css';
import './assets/styles/utilityStyles.css';
import './assets/styles/tailwind.css';

const persistor = getPersistor();
// persistor.purge(); // Debug to clear persist

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <NotificationProvider>
        <Router store={store}>
          <Routes />
        </Router>
      </NotificationProvider>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
