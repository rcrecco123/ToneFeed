import React from 'react';
import { fetchTracks } from "../../actions/tracks_actions";
import { connect } from 'react-redux';
import UserShow from '../user/user_show_container';
import WaveSurfer from 'wavesurfer.js';
import { withRouter } from 'react-router-dom';






class TracksIndex extends React.Component {

    constructor(props) {
        super(props);
//think of state as data that will change over time!
        
        this.state = {

        }
        this.handleWave = this.handleWave.bind(this);
    }

    //put data into state for component
    componentDidMount() {
        
        this.props.fetchTracks();
    }

    handleWave(track) {

        let wavesurfer = WaveSurfer.create({
            container: '#waveform',
            waveColor: 'violet',
            progressColor: 'purple'
        });

        wavesurfer.load(track.fileUrl);

    }

    // rerenders page is specific piecees of data come back
    // componentDidUpdate(prevProps)
    
    render() {
        
        let tracks = Object.values(this.props.tracks);
        
        let tracksResult = tracks.filter((track) => track['user_id'] === this.props.currentUser);
        
        let trackLis = tracksResult.map( track => {


            return (
                <li className="single-track-index-box"> 

                    <div className="image-container">
                        <img className="single-track-image" src={track.imageUrl} />
                    </div>



                    <div className="track-info">
                        <div className="inner-info">
                            <div><h2>{track.username}</h2></div>
                            <div><h3 className="link-to-show" onClick={() => { this.props.history.push(`/tracks/${track.id}`) }}>{track.title}</h3></div>
                        </div>
                        <audio controls src={track.fileUrl}></audio>
                    </div>
                    <div className="font-awesome-track-index">
                        <i className="far fa-thumbs-up"></i>
                        <i className="fas fa-retweet"></i>
                    </div>

                </li>
            );

            
            
        })

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
                fetchTracks: () => dispatch(fetchTracks())
            }
        };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TracksIndex));