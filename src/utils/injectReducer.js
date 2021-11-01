/**
 *
 * AppWrapper
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. 
 *
 */

import React, { useEffect } from 'react';
import { useStore } from 'react-redux';

/**
 * Dynamically injects a reducer
 */

export default ({ key, reducer }) => WrappedComponent => props => {
    const store = useStore();
    useEffect(() => {
        store.injectReducer(key, reducer);
        // could clean things up here
    }, []); 

    return <WrappedComponent {...props} />;
};
