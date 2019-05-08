import { fetchTrack } from '../../actions/tracks_actions';
import { connect } from 'react-redux';
import TrackShow from './track_show';

const mapStateToProps = (state, ownProps) => {
    let trackid = ownProps.match.params.id;
    debugger
    return {
        tracks: state.entities.tracks,
        track: state.entities.tracks[trackid],
        currentUser: state.session.currentUser,
    }
    debugger
}

const mapDispatchToProps = (dispatch) => {
    
    return {
        fetchTrack: (id) => dispatch(fetchTrack(id)),
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(TrackShow);