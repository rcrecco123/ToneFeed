import { fetchTrack, updateTrack } from '../../actions/tracks_actions';
import { connect } from 'react-redux';
import TrackUpdate from './track_update';
import { withRouter }from "react-router-dom";
import { closeModal } from '../../actions/modal_actions';

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
        updateTrack: (track) => dispatch(updateTrack(track)),
        closeModal: () => dispatch(closeModal())
    }

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TrackUpdate));