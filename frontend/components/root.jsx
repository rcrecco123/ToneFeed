//provider with app inside
import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import App from '../../frontend/app';

//Provider wraps whole app,
//access to store through provider

//Hashrouter gives components access URL PROPS

const Root = ({ store }) => (
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
);

export default Root;