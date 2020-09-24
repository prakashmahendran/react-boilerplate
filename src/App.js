import React from 'react';
import Navbar from './layouts/Navbar';
import Sidebar from './layouts/Sidebar';
import People from './containers/People';


const App = ({ children, params: {personid} }) => {
    return (
      <div className="App">
        <div className="App__header">
          <Navbar />
        </div>
        <div className="App__sidebar col-lg-4">
          <Sidebar/>
        </div>
        <div className="App-view col-lg-8">
          {children ? React.cloneElement(children, {personid} ) : <People />}
        </div>
      </div>
    );
};


export default App;