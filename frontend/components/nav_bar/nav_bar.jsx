import React from 'react';
import { withRouter } from 'react-router-dom';
import Search from "../search/search_container";





//component must be wrapped in HashRouter by wrapping connect in withRouter
//in order for this components props to have access to history

//the arguments being passed to NavBar are props of this component.

//WRITE THE "CONDITIONAL" UPLOAD PARTS IN A SEPERATE CONTAINER

const NavBar = ({ currentUser, logout, openModal, history, search }) => {



    function handleLogoutClick() {
        logout();
        history.push('/')
    }

    function handleUploadClick() {
        history.push('/upload')
    }

    function handleUsernameButton() {
        // history.push("/users/" + currentUser.id.toString());
        history.push("/feed");
    }

    const loggedInBar = () => (

        <nav className="topnav">

            <h2 className="tone-feed-header">
                ToneFeed
                </h2>

            <div>
                {/* <i className="fas fa-search"></i>
                <input className="nav-bar-search-bar" type="text" value="Enter artist, song, album, or genre!" /> */}
                <Search search={search} />
            </div>

            <div className='buttons-two'>
                <button className="logout-button-nav" onClick={handleLogoutClick}>Sign Out</ button>
                <button className="a" onClick={handleUsernameButton}>{currentUser.username}</button>
                <button className="upload-button-nav" onClick={handleUploadClick}>Upload</button>
            </div>

        </nav>

    );



    return currentUser ? loggedInBar() : null;

};

export default withRouter(NavBar);