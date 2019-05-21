import React from 'react';

class UserShow extends React.Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }


    render() {

        const currentUserId = this.props.currentUser

        
        return (
            <div className="user-show-banner">
                
                <div className="user-profile-image">
                    <img className="user-avatar" src="https://image.flaticon.com/icons/svg/149/149071.svg"/>
                </div>

                <div className="info-box-feed">
                    <h2 className="username-feed">{this.props.userModel[currentUserId].username}</h2>
                </div>

            </div>
        )


    }
}

export default UserShow;