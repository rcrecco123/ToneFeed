import React from 'react';
import TrackSplashItem from "./track_splash_item";

class TrackSplash extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }


    componentDidMount() {
        this.props.getRandomTracks();
    }

    render() {

        let trackItems = Object.values(this.props.tracks);

        let newTrackItems = trackItems.map( track => {
            return (
                <TrackSplashItem key={track.id} track={track} />
            )

        })



        return (
            <div className="track-splash-master">

                {newTrackItems}
            </div>
        )
    }

}



export default TrackSplash;