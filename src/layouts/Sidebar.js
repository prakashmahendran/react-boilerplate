import React, { Component } from 'react';
import { connect } from 'react-redux';
import { viewPerson, searchPeople } from '../actions/people';
import { browserHistory } from 'react-router';

class Sidebar extends Component {
    componentDidMount() {
        this.props.dispatch(searchPeople(''));
    }
    viewPerson (person) {
        this.props.dispatch(viewPerson(person));
        browserHistory.push(`/people/${person.id}`);
    }
    render() {
        const people = this.props.people.map((person, key) => {

            let classname = person.id === this.props.person.id
                ? 'active'
                : '';

            return (
                <li key={key} className={`list-group-item ${classname}`} onClick={() => this.viewPerson(person)}>{person.name}</li>
            );
        });

        return (
            <div>
                <ul className="list-group">
                    {people}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { people, person } = state;
    if (people.data) {
        return { people: people.data, person };
    }

    return {people: [], person};
}

export default connect(mapStateToProps)(Sidebar);