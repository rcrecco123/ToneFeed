import React from "react";

class TrackSplashItem extends React.Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {

        return (
            <div className="track-splash-item-master">
                <div className="track-splash-image">
                    {/* <img className="track-splash-image" src="https://static.giantbomb.com/uploads/original/9/99864/2389467-mm10_megaman.png" alt="track-splash-img" /> */}
                    {/* <div className="play-circle-splash">
                        <i className="fas fa-play-circle play-circle-splash"></i>
                    </div> */}
                </div>

                <div className="track-splash-title">{this.props.track.title}</div>
                <div className="track-splash-title">{this.props.track.username}</div>
            </div>
        )

    }

}

export default TrackSplashItem;