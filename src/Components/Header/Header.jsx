import React from 'react';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import './header.scss';

const Header = () => {
    return (
        <header className='header'>
            <div className="header__container container">
                <Logo />
                <Button />
            </div>
        </header>
    );
};

export default Header;