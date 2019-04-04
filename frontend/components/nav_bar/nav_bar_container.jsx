import { connect } from "react-redux";

import { logout } from '../../actions/session_actions';
import NavBar from '../../components/nav_bar/nav_bar';

const mapStateToProps = ({ session }) => {
    return {
        currentUser: currentUser.id
    };
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);