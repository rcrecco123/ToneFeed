import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root.jsx';
import configureStore from './store/store';


document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    let preloadedState = undefined;
    if (window.currentUser) {
        preloadedState = {
            session: {
                currentUser: window.currentUser.id
            },
            // entities: {
            //     users: {
            //         [window.currentUser.id]: window.currentUser
            //     }
            // }
        };

        delete window.currentUser;

    }
    
    const store = configureStore(preloadedState);
    window.store = store;
    window.getState = store.getState;
    ReactDOM.render(<Root store={store} />, root);
    
});