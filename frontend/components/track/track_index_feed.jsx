import React from 'react';
import { fetchTracks } from "../../actions/tracks_actions";
import { connect } from 'react-redux';
import UserShowFeed from '../user/user_show_feed_container';
import WaveSurfer from 'wavesurfer.js';
import { withRouter } from 'react-router-dom';
import TrackIndexItem from './track_index_item';
import { fetchUserShow } from '../../actions/user_actions';
import { throws } from 'assert';




class TracksIndexFeed extends React.Component {

    constructor(props) {
        super(props);
        //think of state as data that will change over time!
        //debugger
        this.state = {
            user: null,
            tracker: true,
            result: null
        }
        
    }

    //put data into state for component

    componentDidMount() {
        this.props.fetchUserShow(this.props.match.params.id);
        this.props.fetchTracks();
    }

    //component did update LOOK INTO THIS//



    render() {
       
        

        // if (typeof this.props.user === "object") {
        //         let tracks = Object.values(this.props.user.tracks);

        //     //debugger
        //     let tracksResult = tracks.filter((track) => track.id === this.props.match.params.id);

        //     this.setState({
        //         results: tracksResult.map(track => {
        //             return (
        //                 <TrackIndexItem url={this.props.history.push.bind(this)} track={track} key={track.id} />
        //             )
        //         })
        //     })

        // } 
        
        // let tracks = Object.values(this.props.tracks);
        // debugger
        // let tracksResult = tracks.filter((track) => track['user_id'] === this.props.currentUser);

        // let trackLis = tracksResult.map(track => {
        //     return (
        //         <TrackIndexItem url={this.props.history.push.bind(this)} track={track} key={track.id} />
        //     )
        // })
            
        //we have all the users tracks in state, now we need to run through each track
        //and pass props to each "track index item"


        
       


        // debugger

        return (
            <div>

                <UserShowFeed />
                <ul>
                    {/* {trackLis} */}
                </ul>

            </div>
        )

    }

}

//gives the props any state information I want it to.

const mapStateToProps = (state, ownProps) => {

    //debugger
    return {
        user: state.entities.users[ownProps.match.params.id],
        currentUser: state.session.currentUser,
    }

};

// you cannot dispatch an AJAX request - only a thunk action that shoots off an AJAX request!

const mapDispatchToProps = (dispatch) => {

    //debugger

    return {
        fetchTracks: () => dispatch(fetchTracks()),
        fetchUserShow: id => dispatch(fetchUserShow(id))
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TracksIndexFeed));