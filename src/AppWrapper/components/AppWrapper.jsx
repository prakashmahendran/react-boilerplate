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
import Logo from '../../components/Logo';
import NavMenu from '../../components/NavMenu';
import '../modules/styles.css';
import { NAV_MENU_ITEMS } from '../modules/constants';

const INITIAL_STATE = {
};

class AppWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.name = "AppWrapper";
        this.state = INITIAL_STATE;
    }

    onMenuItemSelect = ({ key }) => {
        this.props.push(key);
    }

    render() {
        const {
            children,
            userName,
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

                <header className="header">
                    <div style={{ display: "flex" }}>
                        <NavMenu
                            name="Menu"
                            onMenuItemSelect={this.onMenuItemSelect}
                            menuItems={NAV_MENU_ITEMS}
                        />
                        <Logo name="React" />
                        <div className="uname_div">
                            <span >{userName}</span>
                        </div>
                    </div>
                </header>

                <div id="main_content" className="main_content">
                    {React.Children.toArray(children)}
                </div>

                <footer className="footer">
                    <span>Footer</span>
                </footer>

            </div>
        );
    }
}

AppWrapper.propTypes = {
    children: PropTypes.node,
};

export default AppWrapper;
