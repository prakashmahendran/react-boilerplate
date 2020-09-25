
import React from 'react';
class Home extends React.Component {
    render() {
        var myStyle = {
            fontSize: 80,
            fontFamily: 'Courier',
            color: '#003300'
        }
        return (
            <div>
                <h1>SRM - VEC</h1>
                <h2>React JS Session</h2>
                <p className="hello">Hello World </p>
                <h1 style={myStyle}>Style Test</h1>
                {/* This is a comment in JSX */}
            </div>
        );
    }
}
export default Home;


