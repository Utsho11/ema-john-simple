import React from 'react';
import logo from '../../assets/images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <a href="shop">Shop</a>
                <a href="order">Order</a>
                <a href="cart">Cart</a>
                <a href="login">Log in</a>
            </div>
        </nav>
    );
};

export default Header;