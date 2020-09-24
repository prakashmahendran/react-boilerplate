

import {
} from './constants';

export const clearJobData = () => dispatch => {
    dispatch({
        type: '',
        records: [],
        parserDetails: {}
    });
};
