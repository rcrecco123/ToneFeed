import React from 'react';
import SignUpContainer from './components/session/signup_container';
import { Route } from 'react-router-dom';

export default () => (
    <div>
        <Route path='/signup' component={SignUpContainer} />
    </div>
);