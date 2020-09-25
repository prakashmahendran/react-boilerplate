import React from 'react';

const INITIAL_STATE = {
    studentNames: ['Ram', 'Prakash', 'Rohith'],
};

class ClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = INITIAL_STATE;
    }
    render() {
        return (
            <div>
                <h1>Student Name List</h1>
                <ul>
                    {this.state.studentNames.map((name) => <List name={name} />)}
                </ul>
            </div>
        );
    }
}

class List extends React.Component {
    render() {
        return (
            <li>{this.props.name}</li>
        );
    }
}
export default ClassComponent;
