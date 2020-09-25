import React from 'react';
import ClassComponent from './ClassComponent';

function FunctionalComponent(props) {
    return <h1>Welcome to {props.value}</h1>;
}
class ComponentsExample extends React.Component {
    render() {
        return (
            <div>
                <FunctionalComponent value='SRM VEC' />
                <ClassComponent />
            </div>
        );
    }
}
export default ComponentsExample;
