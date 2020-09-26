import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import appReducer from './AppWrapper/modules/reducer';
import homeReducer from './pages/Home/modules/reducer';

export default function createReducer(injectedRouters = {}, history = null) {
    return combineReducers({
        router: connectRouter(history),
        app: appReducer,
        home: homeReducer,
        ...injectedRouters,
    });
}

