import React from 'react';
import reactLogo from '../../assets/icons/reactLogo.svg';
import './styles.css';

const Logo = (props) => {
    return (
        <a className="logo_link" href="/">
            <div className="logo_div">
                <img className="logo_img" src={reactLogo} alt="logo" height="40" />
                <span className="logo_text">{props.name}</span>
            </div>
        </a>
    )
};

export default Logo;