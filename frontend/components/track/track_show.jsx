import React from 'react';

class TrackShow extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            // id: this.props.track.id,
            // track: this.props.track,
            // tracks: this.props.tracks
        }
        
    }

    componentDidMount() {
        this.props.fetchTrack(this.props.match.params.id);
        
        // this.props.fetchRecording(this.props.match.params.recordingId);
    }
        

    render() {

        
        return (
            <div>
               Hello
            </div>
        )
    }

}

export default TrackShow;