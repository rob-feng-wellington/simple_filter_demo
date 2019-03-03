import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from 'react-hot-loader';
import "./index.scss";
import App from './app';
import { Provider } from 'react-redux';
/* import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router'; */
import configureStore, { history } from './store/configureStore';

const store = configureStore();

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <App history={history} />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
};

render();

// Hot reloading
if (module.hot) {
  // Reload components
  module.hot.accept('./App', () => {
    render();
  });
}
