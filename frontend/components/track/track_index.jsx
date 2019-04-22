import React from 'react';
import { fetchTracks } from "../../actions/tracks_actions";
import { connect } from 'react-redux';




class TracksIndex extends React.Component {

    constructor(props) {
        super(props);
//think of state as data that will change over time!
        this.state = {
        }
    }

    componentDidMount() {
        this.props.fetchTracks();
    }

    handleTracks() {
        
    }

    render() {
        
        let tracks = Object.values(this.props.tracks);
        tracks = tracks.filter(track => track["user_id"] == this.props.currentUser)
        let trackLis = tracks.map( track => {
            return (
                <div>
                    <li>{track.id}</li>
                    <li>{track.title}</li>
                </div>
            );
        })
        
        // console.log(tracks);
        debugger
        return (

                <div>
                    TRAX INDEX
                    <ul>
                        {trackLis}
                    </ul>
                </div>

        )
    }
}

//gives the props any state information I want it to.

        const mapStateToProps = (state) => {
            return {
                tracks: state.entities.tracks,
                // currentUser: state.entities.users[state.session.id]
            }
        };
        
// you cannot dispatch an AJAX request - only a thunk action that shoots off an AJAX request!

        const mapDispatchToProps = (dispatch) => {
            // debugger
            return {
                fetchTracks: () => dispatch(fetchTracks())
            }
        };

export default connect(mapStateToProps, mapDispatchToProps)(TracksIndex);