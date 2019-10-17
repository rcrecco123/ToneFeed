import { connect } from "react-redux";
import { logout } from '../../actions/session_actions';
import NavBar from './nav_bar';
import { openModal, closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';
import { searchTracks } from "../../actions/tracks_actions";

// const mapStateToProps = ({ session, entities: { users } }) => {

//     return {
//         currentUserId: session.currentUser,
//         currentUser: session.currentUserv
//     }
// };
const mapStateToProps = (state) => {

    return {
        // currentUserId: session.currentUser,
        currentUser: state.entities.users[state.session.currentUser],
        currentUserUpload: state.session.currentUser
    }
};

const mapDispatchToProps = dispatch => {

    return {
        closeModal: () => dispatch(closeModal()),
        logout: () => dispatch(logout()),
        openModal: (modal) => dispatch(openModal(modal)),
        search: (searchString) => dispatch(searchTracks(searchString))
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));