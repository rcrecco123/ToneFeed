import TracksIndexFeed from './track_index_feed';
import { connect } from 'react-redux';
import { fetchUserShow } from '../../actions/user_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {

    let userId = ownProps.match.params.id
    return {
        user: state.entities.users[userId]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUserShow: id => dispatch(fetchUserShow(id))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TracksIndexFeed));