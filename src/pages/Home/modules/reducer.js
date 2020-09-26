

import {
    HOME_SET_USER
} from './constants';

const initialState = {
    userName: '',
};

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case HOME_SET_USER:
            return {
                ...state,
                userName: action.userName,
            };
        default:
            return {
                ...state,
            };
    }
};
export default homeReducer;
