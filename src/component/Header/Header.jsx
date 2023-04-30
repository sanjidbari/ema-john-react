import React from 'react';
import logo from '../../assets/images/Logo.svg';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='header'>
                <img src={logo}/>
                <div>
                    <a href="/Shop">Shop</a>
                    <a href="/order">Order</a>
                    <a href="/inventory">Inventory</a>
                    <a href="/login">Login</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;