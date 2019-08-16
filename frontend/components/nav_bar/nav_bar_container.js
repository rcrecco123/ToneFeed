import { connect } from "react-redux";
import { logout } from '../../actions/session_actions';
import NavBar from './nav_bar';
import { openModal, closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';

// const mapStateToProps = ({ session, entities: { users } }) => {
//     debugger
//     return {
//         currentUserId: session.currentUser,
//         currentUser: session.currentUserv
//     }
// };
const mapStateToProps = (state) => {
    debugger
    return {
        // currentUserId: session.currentUser,
        currentUser: state.entities.users[state.session.currentUser],
        currentUserUpload: state.session.currentUser
    }
};

const mapDispatchToProps = dispatch => {
    debugger
    return {
        closeModal: () => dispatch(closeModal()),
        logout: () => dispatch(logout()),
        openModal: (modal) => dispatch(openModal(modal))
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));