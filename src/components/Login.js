import React, { useEffect, useState } from 'react'
import '../components/login.css'
import Authcontext from '../context/Authcontext';
import Homepage from './Homepage';

const Login = () => {
    const [loggedIn, setLoggedin] = useState(false);

    useEffect(() => {
        const storedvalue = localStorage.getItem('loggedin');
        if (storedvalue === '1') {
            setLoggedin(true);
        }
    }, []);

    const submitHandler = (event) => {
        event.preventDefault();
        setLoggedin(true);
        localStorage.setItem('loggedin', '1');
    };

    const logoutHandler = () => {
        localStorage.removeItem('loggedin');
        setLoggedin(false);
    };
    return (
        <Authcontext.Provider value={{
            loggedIn: loggedIn,
            logoutHandler: logoutHandler
        }}>
            {loggedIn === true ? <Homepage /> :
                <div>
                    <div className="container" id="container">
                        <div className="form-container sign-in-container">
                            <form onSubmit={submitHandler} className="form" id="login">
                                <h1 className="form__title">Login</h1>
                                <div className="form__input-group">
                                    <label htmlFor="username">Username: </label>
                                    <input type="text" className="form__input" name="username" id="username" maxLength="20" required />
                                </div>
                                <div className="form__input-group">
                                    <label htmlFor="pass">Password: </label>
                                    <input type="password" className="form__input" name="pass" id="pass" maxLength="20" required />
                                </div>
                                <div className="form__input-group">
                                    <button type="submit" className="form__button">Submit</button>
                                </div>
                            </form>
                        </div>
                        <div className="form-container sign-up-container">
                            <form className="form" id="register">
                                <h1 className="form__title">Register</h1>
                                <div className="form__input-group">
                                    <label htmlFor="username"> Username: </label>
                                    <input type="text" className="form__input" name="username" id="username" maxLength="20" required />
                                </div>
                                <div className="form__input-group">
                                    <label htmlFor="pass">Password: </label>
                                    <input type="password" className="form__input" name="pass" id="pass" maxLength="20" required />
                                </div>
                                <button className="form__button" type="submit">Submit</button>
                            </form>
                        </div>

                        <div className="overlay-container">
                            <div className="overlay">
                                <div className="overlay-panel overlay-left">
                                    <h1>Welcome Back!</h1>
                                    <p>Please login with your personal info</p>
                                    <button className="ghost" id="signIn">Sign In</button>
                                </div>
                                <div className="overlay-panel overlay-right">
                                    <h1>Hello, Friend!</h1>
                                    <p>Enter your personal details and start journey with us</p>
                                    <button className="ghost" id="signUp">Sign Up</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </Authcontext.Provider>
    )
}

export default Login
