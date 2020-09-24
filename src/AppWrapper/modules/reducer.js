

import {
} from './constants';

const initialState = {
    appName: 'CRA Boilerplate',
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'Test':
            return {
                ...state,
                appName: action.appName,
            };
        default:
            return {
                ...state,
            };
    }
};
export default appReducer;
