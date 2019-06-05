import { connect } from 'react-redux';
import UserShow from './user_show'

const mapStateToProps = (state) => {
    //debugger
    return {
        currentUser: state.entities.users[state.session.currentUser],
        
        // currentUserAvatar: eventually need this
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);