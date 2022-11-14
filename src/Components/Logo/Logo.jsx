import React from 'react';
import '../Header/header.scss';
import logo from '../../assets/images/logo.svg';

const Logo = () => {
    return (
        <a href="index.html" className="header__link">
            <img className='header__logo' src={logo} alt="Логотип компании Байкал" />
        </a>
    );
};

export default Logo;