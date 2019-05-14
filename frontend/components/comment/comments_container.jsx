import { fetchTrack } from '../../actions/tracks_actions';
import { fetchComments } from '../../actions/comments_actions';
// import { postTrack } from '../../actions/comments_actions';
import { connect } from 'react-redux';
import Comments from './comments';
import { withRouter } from "react-router-dom";

const mapStateToProps = (state, ownProps) => {
    let trackid = parseInt(ownProps.match.params.id);
    
    debugger
    return {
        track: state.entities.tracks[trackid],
        currentUser: state.session.currentUser,
        user: state.entities.users[state.session.currentUser],
        comments: state.entities.comments
        // comments: state.entities.tracks[trackid].comments
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchTrack: (id) => dispatch(fetchTrack(id)),
        fetchComments: (trackId) => dispatch(fetchComments(trackId)),
        postTrack: (formData) => dispatch(postTrack(formData))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Comments));