import { fetchTrack, updateTrack } from '../../actions/tracks_actions';
import { connect } from 'react-redux';
import TrackUpdate from './track_update';

const mapStateToProps = (state) => {

    return {
        tracks: state.entities.tracks,
        currentUser: state.session.currentUser,
        username: state.entities.users[state.session.currentUser]
    }

}

const mapDispatchToProps = (dispatch) => {

    return {
        fetchTrack: (id) => dispatch(fetchTrack(id)),
        updateTrack: (track) => dispatch(updateTrack(track))
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(TrackUpdate);