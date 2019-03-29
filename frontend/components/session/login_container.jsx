import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import Login from './login';

//container has MSP and MDP
//makes you be able to use these functions in your component ;)!
const mapDispatchToProps = dispatch => ({
    login: formUser => dispatch(login(formUser)),
})


//two invocations
//createNewUser in props in signup.jsx (can call this.props.createNewUser(JSON OBJECT))
export default connect(null, mapDispatchToProps)(Login);