import React from 'react';
import './Logo.scss'
import logo from '../../assets/images/header-logo.png'

const Logo = () => {
    return (
        <div className="header">
        <div className="logo">
            <img src={logo} className="logo__img" alt="logo twoja impreza.net"/>
        </div>
        </div>
    );
};

export default Logo;