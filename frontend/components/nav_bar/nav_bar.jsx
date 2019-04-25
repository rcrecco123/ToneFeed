import React from 'react';
import { withRouter } from 'react-router-dom';



//component must be wrapped in HashRouter by wrapping connect in withRouter
//in order for this components props to have access to history

//the arguments being passed to NavBar are props of this component.

const NavBar = ({ currentUser, logout, openModal, history }) => {

    function handleLogoutClick() {
        logout();
        history.push('/')
    }

    function handleUploadClick() {
        history.push('/upload')
    }

    function handleUsernameButton() {
        history.push("/users/" + currentUser.id.toString())
    }

    const loggedInBar = () => (
        <nav className="topnav">
            <h2 className="tone-feed-header">ToneFeed</h2>
            <div className='buttons-two'>
                <button className="a" onClick={handleUsernameButton}>{currentUser.username}</button>
                <button className="logout-button-nav" onClick={handleLogoutClick}>Sign Out</ button>
                <button className="upload-button-nav" onClick={handleUploadClick}>Upload</button>
            </div>
        </nav>
    );

    return currentUser ? loggedInBar() : null;

};

export default withRouter(NavBar);