import {
    FETCH_PEOPLE,
    RECEIVE_PEOPLE,
    VIEW_PERSON
} from '../constants/people';
import data from '../mock/people';

export function viewPerson(person) {
    return {
        type: VIEW_PERSON,
        person
    }
}

export function searchPeople(query) {
    return (dispatch) => {
        dispatch({
            type: FETCH_PEOPLE,
            query
        });

        let people = data.People;
        if (query) {
            people = people.filter(person => {
                return person.name.toLowerCase().includes(query.toLowerCase());
            });
        }

        dispatch({
            type: RECEIVE_PEOPLE,
            people
        });
    }
}

export function getPerson (id) {
    return (dispatch, getState) => {
        let filtered = data.People.filter(person => {
            return person.id === +id;
        }).pop();


        return filtered;
    }
}