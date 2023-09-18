import React, { useContext, useState } from 'react';
import './SignUp.css'
import AuthProvider, { AuthContext } from '../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const SignUp = () => {

    const {createUser} = useContext(AuthContext)
    const [error, setError] = useState('');

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        if(password.length < 6){
            setError('Warning: password should be 6 characters or longer');
            return;
        }
        else if(confirm !== password){
            setError('Warning: password did not match');
            return;
        }

        createUser(email, password)
        .then(result => {
            const loggedUser = result.user
            console.log(loggedUser)
            form.reset();
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required />
                </div>
                <div className="form-control">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name="confirm" required />
                </div>
                <p className='warning-text'><small>{error}</small></p>
                <input className='btn-submit' type="submit" value="Sign Up" />
                <p className='toggle-text'><small><Link to='/login'>Already have an account? <span className='toggle-text-orange'>Login</span></Link></small></p>
            </form>
        </div>
    );
};

export default SignUp;