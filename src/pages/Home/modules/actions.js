

import {
    HOME_SET_USER
} from './constants';

export const setUserName = (userName) => dispatch => {
    dispatch({
        type: HOME_SET_USER,
        userName,
    });
};
