import { connect } from 'react-redux';
import CommentIndex from '../comment/comment_index';
import { fetchComments, createComment, destroyComment } from "../../actions/comments_actions";
import { fetchTrack } from '../../actions/tracks_actions';

const mapStateToProps = (state, ownProps) => {


    // const trackId = this.props.match.params.id;

    return {
        comments: state.entities.comments,
        user: state.entities.users[state.session.currentUser]
    }
}

const mapDispatchToProps = dispatch => {

    return {
        fetchTrack: (id) => dispatch(fetchTrack(id)),
        fetchComments: (trackId) => dispatch(fetchComments(trackId)),
        createComment: (comment) => dispatch(createComment(comment)),
        destroyComment: (comment) => dispatch(destroyComment(comment))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex);