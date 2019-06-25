import React from 'react';
import { fetchTracks, deleteTrack } from "../../actions/tracks_actions";
import { fetchUsers } from "../../actions/user_actions";
import { connect } from 'react-redux';
import UserShow from '../user/user_show_container';
import WaveSurfer from 'wavesurfer.js';
import { withRouter } from 'react-router-dom';
import TrackIndexItem from './track_index_item';







class TracksIndex extends React.Component {

    constructor(props) {
        super(props);
//think of state as data that will change over time!
        //debugger
        this.state = {
            
        }
    }

    //put data into state for component
    componentDidMount() {
        this.props.fetchTracks();
        this.props.fetchUsers();
    }
    
    render() {
        
        let tracks = Object.values(this.props.tracks);
        
        let tracksResult = tracks.filter((track) => track['user_id'] === this.props.currentUser);
        
        let trackLis = tracksResult.map( track => {
            return (
                <TrackIndexItem url={this.props.history.push.bind(this)} id={track.id} deleteTrack={this.props.deleteTrack} track={track} key={track.id}/>
            )
        })

        //debugger

        return (
            <div>
                
                <UserShow />
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
                currentUser: state.session.currentUser,
            }
            
        };
        
// you cannot dispatch an AJAX request - only a thunk action that shoots off an AJAX request!

        const mapDispatchToProps = (dispatch) => {
            // 
            return {
                fetchTracks: () => dispatch(fetchTracks()),
                fetchUsers: (users) => dispatch(fetchUsers(users)),
                deleteTrack: id => dispatch(deleteTrack(id)),
            }
        };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TracksIndex));