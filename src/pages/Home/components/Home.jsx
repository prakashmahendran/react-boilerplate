
import React from 'react';

import reactLogo from '../../../assets/icons/avatar.jpg';
import '../modules/styles.scss';


const INITIAL_STATE = {
    uname: '',
};

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = INITIAL_STATE;
    }

    onNameChange = (e) => {
        this.setState({
            uname: e.target.value,
        });
    }
    render() {
        const {
            setUserName,
            userName
        } = this.props;

        return (
            <div className="login_div">
                <div className="imgcontainer">
                    <img className="avatar_img" src={reactLogo} alt="avatar" />
                </div>
                {
                    userName ?
                        <div className="welcome_container">
                            <span className="welcome_span">Welcome {userName}</span>
                        </div>
                        :
                        <div className="container">
                            <label for="uname"><b>Name</b></label>
                            <input
                                type="text"
                                placeholder="Enter Name"
                                onChange={this.onNameChange}
                                name="uname" />
                            <button
                                type="submit"
                                onClick={() => setUserName(this.state.uname)}
                            >
                                Submit</button>
                        </div>
                }
            </div >
        );
    }
}

export default Home;


