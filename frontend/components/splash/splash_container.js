import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout, login } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import splash from './splash';
import { getRandomTracks } from '../../utils/track_api_util';

const mapStateToProps = ({ session }) => ({
    currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    demo: demoUser => dispatch(login(demoUser)),
    getRandomTracks: () => dispatch(getRandomTracks())
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(splash));