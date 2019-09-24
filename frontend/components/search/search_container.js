import React from "react";
import Search from "./search";
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { searchTracks } from "../../actions/tracks_actions";

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchTracks: searchString => dispatch(searchTracks(searchString))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search))