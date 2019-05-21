import { connect } from 'react-redux';
import CommentIndex from '../comment/comment_index';
import { fetchComments, createComment } from "../../actions/comments_actions";
import { fetchTrack } from '../../actions/tracks_actions';

const mapStateToProps = (state) => {
    return {
        comments: state.entities.comments 
    }
}

const mapDispatchToProps = dispatch => {

    return {
        fetchTrack: (id) => dispatch(fetchTrack(id)),
        fetchComments: (trackId) => dispatch(fetchComments(trackId)),
        createComment: (comment) => dispatch(createComment(comment))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex);