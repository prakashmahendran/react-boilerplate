import { combineReducers } from 'redux';
import { people } from './people';
import { person } from './person';
import { ui } from './ui';

export default combineReducers({
    people,
    person,
    ui
});