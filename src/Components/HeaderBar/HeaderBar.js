import React from 'react';
import leftArrow from '../../assets/images/arrow-left.png'
import rightArrow from '../../assets/images/arrow-right.png'

const HeaderBar = ({title}) => {
    return (
        <div className="header-bar">
            <img src={leftArrow} className="header-bar__arrow" alt="logo twojaimpreza.net"/>
                <div className="header-bar__title">{title}</div>
                <img src={rightArrow} className="header-bar__arrow" alt="logo twojaimpreza.net"/>
        </div>
    );
};

export default HeaderBar;