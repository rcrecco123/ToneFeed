import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Upload from './upload';

const mapStateToProps = (state) => {
    return {
        currentUser: state.session.currentUser
    };
};

export default withRouter(connect(mapStateToProps, null)(Upload));