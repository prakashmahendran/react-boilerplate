import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers/index';
import App from './App';
import Person from './components/Person';

import { Router, Route, browserHistory } from 'react-router';

// Add redux dev tools unless we have a production build
const enhance = process.env.NODE_ENV !== 'production' && window.devToolsExtension ? compose(
    applyMiddleware(thunkMiddleware),
    window.devToolsExtension && window.devToolsExtension()
) : applyMiddleware(thunkMiddleware);

const store = createStore(
    rootReducer,
    enhance
);
ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>=
              <Route path="people/:personid" component={Person}>
              </Route>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
