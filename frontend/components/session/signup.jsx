import React from 'react';

//FORM COMPONENT

class Signup extends React.Component {
    
    //create a local state to keep track of all
    // of the fields for form were building

    constructor(props){
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
        return () => {
            //keys that match state get updated
            //square brackets makes it evaluated before assigned to key
            this.setState({ [type]: e.target.value })
        };
    };
    //takes in an event
    handleSubmit(e) {
        //prevents default 'POST'
        e.preventDefaultAction();
        this.props.createNewUser(this.state)
            .then( () => this.props.history.push(''))
    }

    render () {
        return (
            <div className="session-form">
            <h2>Sign Up</h2>
            <form>
                <label>Username:
                    <input 
                        type="text"
                        value={this.state.username}
                        onChanged={this.handleInput('username')}
                    />
                </label>
                <label>Email:
                    <input 
                        type="text"
                        value={this.state.email}
                        onChanged={this.handleInput('email')}
                    />
                </label>
                <label>Password:
                    <input 
                        type="text"
                        value={this.state.password}
                        onChanged={this.handleInput('password')}
                    />
                </label>
                <button onClick={this.handleSubmit}>Sign Up!</button>
            </form>
            </div>
        );
    }
};

export default Signup;