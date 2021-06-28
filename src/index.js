import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';

import { store, history } from './Store/Store'
import { ConnectedRouter } from 'connected-react-router'
import { ConfigProvider } from 'antd'
import esEs from 'antd/es/locale/es_ES'

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ConfigProvider locale={esEs}>
        <App />
      </ConfigProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
