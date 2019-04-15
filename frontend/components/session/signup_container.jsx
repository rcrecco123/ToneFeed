import { connect } from 'react-redux';
import { createNewUser} from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import Signup from './signup';
import React from 'react';
import { withRouter } from 'react-router-dom';

//container has MSP and MDP
//makes you be able to use these functions in your component ;)!

//BEFORE MODAL MDP *******!!!!!!!!!

// const mapDispatchToProps = dispatch => ({
//     createNewUser: formUser => dispatch(createNewUser(formUser)),
// })

// const mapStateToProps = (state) => {
//     return {
//         error: state.login.error,
//         errorMessage: state.login.errorMessage,
//     };
// };

const mapStateToProps = (state) => {
    return ({
        errors: state.errors.session,
    });
};

const mapDispatchToProps = dispatch => {
    return {
        createNewUser: formUser => dispatch(createNewUser(formUser)),
        processForm: (user) => dispatch(login(user)),
        otherForm: (
            <button onClick={() => dispatch(openModal('signup'))}>
                Signup
      </button>
        ),
        closeModal: () => dispatch(closeModal())
    };
};

//two invocations
//createNewUser in props in signup.jsx (can call this.props.createNewUser(JSON OBJECT))
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Signup));