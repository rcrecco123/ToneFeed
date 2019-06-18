import React from "react";

class TrackSplashItem extends React.Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {

        return (
            <div>
                {this.props.track.title}
            </div>
        )

    }

}

export default TrackSplashItem;