import React from 'react';

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
        
        this.push = this.push.bind(this);
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

    push() {
        // debugger
        this.props.history.push('/');
    }

    //takes in an event
    handleSubmit(e) {
        //prevents default 'POST'
        e.preventDefault();
        this.props.processForm(this.state)
            .then(this.push);
        //push NOT invoked becuase we want it as a callback (returned function)
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

export default Login;