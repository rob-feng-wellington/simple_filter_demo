import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import App from './app';
import { Provider } from 'react-redux';
import initialStore from './store/initialStore';

const store = initialStore();

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);