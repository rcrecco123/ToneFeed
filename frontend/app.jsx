import React from 'react';
import SignUpContainer from './components/session/signup_container';
import login_container from './components/session/login_container';
import SplashContainer from './components/splash';
import { Route } from 'react-router-dom';
import { AuthRoute,
        ProtectedRoute } from './utils/route_utils';
import {
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

//my actual app

export default () => (
    //will have to eventually apply my protected routes to pages I dont
    //want users without account to see
    <div>
        <AuthRoute exact path='/signup' component={SignUpContainer} />
        <Route exact path='/login' component={login_container} />
        <Route path='/' component={SplashContainer} />
    </div>
)