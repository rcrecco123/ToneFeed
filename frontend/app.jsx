import React from 'react';
import SignUpContainer from './components/session/signup_container';
import login_container from './components/session/login_container';
import SplashContainer from './components/splash_container';
import Modal from './components/modal/modal';
import NavBar from './components/nav_bar/nav_bar_container';
import Footer from './components/footer/footer';
import { AuthRoute,
        ProtectedRoute } from './utils/route_utils';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';


//my actual app


//anything routed through Route has access to URL props

export default () => (
    //will have to eventually apply my protected routes to pages I dont
    //want users without account to see
    <div>
        <Modal />
        <NavBar />
       <Switch>
                  
            {/* <AuthRoute exact path='/signup' component={SignUpContainer} />
            <Route path='/login' component={login_container} /> */}
            
            <ProtectedRoute path='/feed' />
            <AuthRoute exact path='/' component={SplashContainer} />
        </Switch>
        <Footer />
    </div>
)