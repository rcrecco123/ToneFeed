import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom'

const mapStateToProps = state => ({
    loggedIn: Boolean(state.session.currentUser)
});

//<AuthRoute path="somepath" component={somecomponent} />

const Auth = ({ loggedIn, path, component: Component }) => (
    <Route
        path={path}
        render={ props => (
            loggedIn ? <Redirect to="/feed" /> :
            <Component {...props} />
        )}
    />
);

// const loggedInRoute = ({ loggedIn, path, component }) => (
//     <Route
//         path={path}
//         render={ props => (
//             loggedIn ? <Redirect to="/feed" /> :
//             <Component {...props} />
//         )}
//     />
// );

const Protected = ({ loggedIn, path, component: Component}) => (
    <Route
        path={path}
        render={ props => (
            loggedIn ? <Component {...props} /> :
            <Redirect to="/" />
        )}
    />
);

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
// export const loggedInRoute = withRouter(connect(mapStateToProps)(loggedInRoute));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));