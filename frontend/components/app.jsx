import React from 'react';
import SignUpContainer from './session/signup_container';
import login_container from './session/login_container';
import SplashContainer from './splash/splash_container';
import Modal from './modal/modal';
import NavBar from './nav_bar/nav_bar_container';
import Footer from './footer/footer';
import Feed from './feed/feed_container';
import TracksIndex from './track/track_index';
import TracksIndexFeed from './track/track_index_feed_container';
import TrackShow from './track/track_show_container';
import UploadContainer from './upload/upload_container';
import UserShowContainer from './user/user_show_container';
import Comments from './comment/comments_container.js';
import TrackUpdate from './track/track_update_container';
import { AuthRoute,
        ProtectedRoute } from '../utils/route_utils';
import {
    Route,
    Switch,
} from 'react-router-dom';


//my actual app


//anything routed through Route has access to URL props

export default () => (
    //will have to eventually apply my protected routes to pages I dont
    //want users without account to see
    <div className="app-reset">
        <script type="livereload.js"></script>
        <Route path='/' component={Modal}/>
        <Route path='/tracks/:id' component={Modal}/>
        <NavBar />
            <Switch className="switch-components">
                <AuthRoute exact path='/' component={props => <SplashContainer {...props}/>} />              
                <ProtectedRoute path='/feed' component={TracksIndex} />
                <Route exact path='/tracks/:id' component={TrackShow} />              
                <ProtectedRoute path='/upload' component={UploadContainer} />              
                <Route path="/users/:id/" component={TracksIndexFeed} />                
            </Switch>
                <Route exact path='/tracks/:id' component={Comments} />
        <Footer />
    </div>
)




{/* <ProtectedRoute exact path='/users/:userId' component={TracksIndex} />   */}
                {/* <ProtectedRoute path='/users/:userId' component={UserShowContainer} /> */}
                {/* <ProtectedRoute path='/users/:userId' component={UserShowContainer} /> */}