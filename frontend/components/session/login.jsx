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
    //takes in an event
    handleSubmit(e) {
        //prevents default 'POST'
        e.preventDefault();
        this.props.login(this.state)
            .then(() => this.props.history.push(''))
    }

    render() {
        return (
            <div className="login-form">
                <h2>Log in!</h2>
                <form>
                    <label>Email:
                    <input
                            type="text"
                            value={this.state.email}
                            onChange={this.handleInput('email')}
                        />
                    </label>
                    <label>Password:
                    <input
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                        />
                    </label>
                    <button onClick={this.handleSubmit}>Log in!</button>
                </form>
            </div>
        );
    }
};

export default Login;