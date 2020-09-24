import {
    VIEW_PERSON
} from '../constants/people';

const INITIAL_STATE = {};

export function person(state = INITIAL_STATE, action) {
    switch (action.type) {
        case VIEW_PERSON:
            return Object.assign({}, state, action.person);
        default:
            return state;
    }
}