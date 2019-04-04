import React from 'react';
import { Link } from 'react-router-dom';

const loggedOutBar = ({ currentUser, logout }) => {

    const sessionLinks = () => (
        <nav>
            <Link to='/login'>Sign in</Link>
            <Link to='/signup'>Create account</Link>
        </nav>
    );

    const loggedInBar = () => (
        <hgroup>
            <h2>Hello, {currentUser.username}</h2>
            <button onClick={logout}>Sign out</button>
        </hgroup>
    );

    return curentUser ? loggedInBar() : loggedOutBar();

};

export default NavBar;