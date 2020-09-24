import {
    FETCH_PEOPLE,
    RECEIVE_PEOPLE
} from '../constants/people';

const INITIAL_STATE = {};

export function people(state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_PEOPLE:
            return {
                ...state
            };
        case RECEIVE_PEOPLE:
            return {
                ...state,
                data: action.people
            }
        default:
            return state;
    }
}