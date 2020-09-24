/**
 *
 * AppWrapper
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. 
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import '../modules/styles.scss';

const INITIAL_STATE = {
};

class AppWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.name = "AppWrapper";
        this.state = INITIAL_STATE;
    }

    render() {
        const {
            children,
        } = this.props;

        return (
            <div>
                <Helmet
                    titleTemplate="%s - React CRA Boilerplate"
                    defaultTitle="React CRA Boilerplate"
                    meta={[
                        {
                            name: 'description',
                            content: 'React CRA Boilerplate application',
                        },
                    ]}
                />


                <div id="main_content" className="main_content">
                    {React.Children.toArray(children)}
                </div>

            </div>
        );
    }
}

AppWrapper.propTypes = {
    children: PropTypes.node,
};

export default AppWrapper;
