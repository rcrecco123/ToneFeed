import { fetchTrack } from '../../actions/tracks_actions';
import {connect} from 'react-redux';
import Comments from './comments';

const mapStateToProps = (state, ownProps) => {
    let trackid = ownProps.match.params.id;
    debugger
    return {
        track: state.entities.tracks[trackid]
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchTrack: (id) => dispatch(fetchTrack(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments);