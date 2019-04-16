import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout, login } from '../actions/session_actions';
import { openModal } from '../actions/modal_actions';
import splash from './splash';

const mapStateToProps = ({ session }) => ({
    currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    demo: demoUser => dispatch(login(demoUser))
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(splash));