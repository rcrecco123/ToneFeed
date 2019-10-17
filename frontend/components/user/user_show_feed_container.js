import { connect } from 'react-redux';
import UserShowFeed from './user_show_feed';
import { fetchUserShow } from '../../actions/user_actions';
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => {

    return {
        user: state.entities.users[ownProps.match.params.id],
        userId: ownProps.match.params.id
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUserShow: id => dispatch(fetchUserShow(id))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserShowFeed));