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
          titleTemplate="%s - Communications and Tracking"
          defaultTitle="Communications and Tracking"
          meta={[
            {
              name: 'description',
              content: 'A Communications and Tracking application',
            },
          ]}
        />

          <div className="App__header">
          <Navbar />
        </div>
        <div className="App__sidebar col-lg-4">
          <Sidebar/>
        </div>
        <div id="main_content" className="App-view col-lg-8">
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
