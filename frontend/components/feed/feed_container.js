import { withRouter } from 'react-router-dom';
import React from 'react';
import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';
import Feed from './feed';

const mapStateToProps = (state) => {
    return {
        tracks: [],
    };
};

const mapDispatchToProps = () => ({
    logout: () => dispatchEvent(logout()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Feed));