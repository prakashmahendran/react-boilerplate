import {
    FETCH_PEOPLE,
    RECEIVE_PEOPLE
} from '../constants/people';

const INITIAL_STATE = {};

export function ui(state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_PEOPLE:

            return {
                ...state,
                loading: true
            };
        case RECEIVE_PEOPLE:
            return {
                ...state,
                loading: false
            };
        default:
            return state;
    }
}