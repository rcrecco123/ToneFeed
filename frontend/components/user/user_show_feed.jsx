import React from 'react';


class UserShowFeed extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            user: this.props.user
        }
    }

    componentDidMount() {
        
    }

    componentWillUpdate(prev) {
  
    }

    //look in to did mount and update 
    //component did update (prev state and prev props)
    // can compare prev props with new props

    render() {
        debugger
        if (this.props.user === undefined) {
            return null
        }
        return (

            <div className="user-show-banner">

                <div className="user-profile-image">
                    <img className="user-avatar" src={this.props.user.imageUrl} />
                </div>

                <div className="info-box-feed">
                    <h2 className="username-feed">{this.props.user.username}</h2>
                </div>

            </div>
            
        )
    }
}

export default UserShowFeed;