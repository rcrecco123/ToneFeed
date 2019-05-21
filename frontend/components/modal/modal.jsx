import React from 'react';
import SignupContainer from '../../components/session/signup_container';
import LoginContainer from '../../components/session/login_container.js';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';



function Modal({ modal, closeModal }) {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'login':
            component = <LoginContainer />;
            break;
        case 'signup':
            component = <SignupContainer />;
            break;
        default:
            return null;
    }
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
};
        const MapStateToProps = state => {
            return {
                modal: state.ui.modal
            };
        };
    
        const MapDispatchToProps = dispatch => {
            return {
                closeModal: () => dispatch(closeModal())
            };
        };

export default withRouter(connect(MapStateToProps, MapDispatchToProps)(Modal));


    