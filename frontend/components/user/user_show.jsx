import React from 'react';

class UserShow extends React.Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }


    render() {

        const currentUserId = this.props.currentUser

        debugger
        return (
            <div className="user-show-banner">

                <h2>{this.props.userModel[currentUserId].username}</h2>

            </div>
        )


    }
}

export default UserShow;