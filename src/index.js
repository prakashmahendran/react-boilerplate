import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';

import { Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ConnectedRouter } from 'connected-react-router';

import configureStore from './configureStore';

import AppWrapper from './AppWrapper';
import Home from './pages/Home';

// Add promise support to the global window object if not found
if (!window.Promise) window.Promise = Promise;

// Create redux store with history
const initialState = {};
const history = createBrowserHistory();
const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <AppWrapper>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </AppWrapper>
    </ConnectedRouter>
  </Provider>,
  MOUNT_NODE
);
