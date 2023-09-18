import React, { useContext } from 'react';
import logo from '../../assets/images/Logo.svg';
import './Header.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div>
            <nav className='header'>
                <img src={logo} />
                <div>
                    <Link to="/">Shop</Link>
                    <Link to="/orders">Orders</Link>
                    <Link to="/inventory">Inventory</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">SignUp</Link>
                    {
                        user && <div className='text-white'><p>{user.email}</p><button onClick={handleSignOut}>Log out</button></div>
                    }
                </div>

            </nav>
        </div>
    );
};

export default Header;