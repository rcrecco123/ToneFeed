import React from 'react';
import { withRouter } from 'react-router-dom';

//FORM COMPONENT

class Login extends React.Component {

    //create a local state to keep track of all
    // of the fields for form were building

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            email: '',
            password: '',
        }
        
        this.handle = this.handle.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }



    //takes input type
    handleInput(type) {
        //arrow function that sets state
        return (e) => {
            //keys that match state get updated
            //square brackets makes it evaluated before assigned to key
            this.setState({ [type]: e.target.value })
        };
    };

    handle() {
        this.props.closeModal();
        // this.props.history.push('/feed');
        this.props.closeModal;
    }

    //takes in an event
    handleSubmit(e) {
        //prevents default 'POST'
        e.preventDefault();
        this.props.processForm(this.state)
            .then(this.handle());

        //modal was not closing because I did not invoke the handle() function in the .then argument.

        //push NOT invoked becuase we want it as a callback (returned function)
        //anything passed to .then is not going to be invoked, meaning it is going to be a callback.
    }
    
    render() {

        
        return (
            <div className="session-form">
                <h2 className='form-head'>Sign in</h2>
                <div className="modal-form">
                    <form className="modal-form-two">
                    <label className='modal-label'>Email:
                    <input
                            className="modal-text-box" 
                            type="text"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.handleInput('email')}
                        />
                    </label>
                    <label className='modal-label'>Password:
                    <input
                            className="modal-text-box" 
                            type="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                        />
                    </label>
                        <div className="login-errors">
                            {this.props.errors}
                        </div>
                        <button className="signup-button" 
                        onClick={this.handleSubmit}>Sign in</button>
                        <p className='note'>
                            We may use your email and devices for updates and tips on ToneFeed's products and services, and for activities notifications. You can unsubscribe for free at any time in your notification settings.

We may use information you provide us in order to show you targeted ads as described in our Privacy Policy.
                        </p>
                </form>
                </div>
            </div>
        );
    }
};

export default withRouter(Login);