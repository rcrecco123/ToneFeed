import React from 'react';

class UserShow extends React.Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    

    render() {

        if (this.props.currentUser === undefined) {
            return null
        }

        //BOOLEAN ARE VALID REACT CHILDREN
        //this.props.currentUser
        
        return (
            <div className="user-show-banner">
                <div className="user-profile-image">
                    <img className="user-avatar" src={this.props.currentUser.imageUrl}/>
                </div>

                <div className="info-box-feed">
                    <h2 className="username-feed">{this.props.currentUser.username}</h2>
                </div>
            </div>
        )


    }
}

export default UserShow;