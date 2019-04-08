import React from 'react';
import { Link } from 'react-router-dom';


//component must be wrapped in HashRouter by wrapping connect in withRouter
//in order for this components props to have access to history

//the arguments being passed to NavBar are props of this component.

const NavBar = ({ currentUser, logout, openModal, history }) => {

    function handleLogoutClick() {
        {logout};
        history.push('/')
    }

    debugger
    const loggedOutBar = () => (
        <div className="main-div-splash">
            <h2 className="tone-feed-header">ToneFeed</h2>
            <nav className="bar">
                <div className='buttons'>
                    <button className="signin-button" onClick={() => openModal('login')}>
                        Sign in
                    </button>
                    <button className="login-button" onClick={() => openModal('signup')}>
                        Create account
                    </button>
                </div>
            </nav>
        </div>
    );

    const loggedInBar = () => (
        <hgroup className="bar">
            <h2 className="tone-feed-header">ToneFeed</h2>
            <div className='buttons-two'>
                <button className="logout-button" onClick={handleLogoutClick}>Sign out</button>
                <h2 className="greeting-header">Hello, {currentUser.username}</h2>
            </div>
        </hgroup>
    );

    return currentUser ? loggedInBar() : null;

};

export default NavBar;