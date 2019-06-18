import { connect } from "react-redux";
import TrackSplash from "./track_splash";
import { getRandomTracks } from "../../actions/tracks_actions";

const mapStateToProps = state => {
    return {
        tracks: state.entities.tracks
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getRandomTracks: () => dispatch(getRandomTracks())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TrackSplash);