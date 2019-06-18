import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Upload from './upload';
import { uploadTrack } from '../../actions/tracks_actions';

const mapStateToProps = (state) => {
    return {
        currentUser: state.session.currentUser
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        uploadTrack: track => dispatch(uploadTrack(track))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Upload));