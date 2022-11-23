import React from 'react';
import Button from '../UI/Button/Button';
import Logo from '../Logo/Logo';
import './header.scss';

const Header = () => {
    return (
        <header className='header'>
            <div className="container header__container">
                <Logo />
                <Button />
            </div>
        </header>
    );
};

export default Header;