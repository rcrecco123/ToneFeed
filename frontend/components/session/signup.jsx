import React from 'react';
import { withRouter } from 'react-router-dom';

//FORM COMPONENT

class Signup extends React.Component {

    //create a local state to keep track of all
    // of the fields for form were building


    constructor(props) {
        super(props);

        this.state = {
            username: '',
            email: '',
            password: '',
        }

        debugger

        this.handleSubmit = this.handleSubmit.bind(this);
        this.push = this.push.bind(this);

    }

    renderErrors(type) {

        let styles = {
            listStyleType: 'none',
        }

        if (this.props.errors[type] !== undefined) {
            let arr = type.split('_').join(' ');
            return (
                <ul style={styles}>
                    <li className='signup-errors'>
                        <i className="err"></i>
                        {this.props.errors[type]}
                    </li>
                </ul>
            )
        }
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
    //takes in an event



    handle() {

        // this.props.history.push('/feed');
    }


    handleSubmit(e) {

        //prevents default 'POST'
        e.preventDefault();
        this.props.createNewUser()
    }

    render() {

        return (
            <div className="session-form">
                <h2 className='form-head'>Sign Up</h2>
                <div className="modal-form">
                    <form className="modal-form-two">
                        <label className='modal-label'>Username:
                            <input
                                className="modal-text-box"
                                type="text"
                                placeholder="Username"
                                value={this.state.username}
                                onChange={this.handleInput('username')}
                            />
                            <div className='errors-ul'>
                                {this.renderErrors('username')}
                            </div>
                        </label >
                        <label className='modal-label'>Email:
                            <input
                                className="modal-text-box"
                                type="text"
                                placeholder="Email"
                                value={this.state.email}
                                onChange={this.handleInput('email')}
                            />
                            <div className='errors-ul'>
                                {this.renderErrors('email')}
                            </div>
                        </label>
                        <label className='modal-label'>Password:
                            <input
                                className="modal-text-box"
                                type="password"
                                placeholder="Password"
                                value={this.state.password}
                                onChange={this.handleInput('password')}
                            />
                            <div className='errors-ul'>
                                {this.renderErrors('password')}
                            </div>
                        </label>

                        <button
                            className="signup-button"
                            onClick={this.handleSubmit}>Sign Up</button>
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

export default withRouter(Signup);