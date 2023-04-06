import React from 'react';
import logo from '../../assets/images/Logo.svg'
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="shop">Shop</Link>
                <Link to="order">Order</Link>
                <Link to="inventory">Inventory</Link>
                <Link to="login">Log in</Link>
            </div>
        </nav>
    );
};

export default Header;