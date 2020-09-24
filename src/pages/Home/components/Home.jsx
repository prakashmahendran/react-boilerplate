/**
 *
 * AppWrapper
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. 
 *
 */

import React from 'react';
import '../modules/styles.scss';

const INITIAL_STATE = {
};

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = INITIAL_STATE;
    }

    render() {

        return (
            <div>
                <h1>Hello World</h1>
            </div>
        );
    }
}


export default Home;
