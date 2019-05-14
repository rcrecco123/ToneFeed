import React from 'react';
import { withRouter } from 'react-router-dom';

class CommentForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            body: "",
            currentUser: this.props.currentUser
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    };

   
    handleSubmit(e) {

        e.preventDefault();
        const formData = new FormData();

        formData.append('comment[author_id]', this.props.currentUser);
        formData.append('comment[track_id]', this.props.track.id);
        formData.append('comment[body]', this.state.body);

        $.ajax({
            url: '/api/comments',
            method: 'POST',
            data: formData,
            contentType: false,
            processData: false,
        }).then((response => console.log(response.message)),
            response => console.log(response,JSON))
            .then((console.log("sick!")))

        this.setState({ body: ''})
    }

    render() {
        debugger
        return (
            <div className="comment-form-main">
                <div className="comment-user-avatar">
                    <img className="user-avatar" src="https://image.flaticon.com/icons/svg/149/149071.svg" />
                </div>
                <form className="form-comment" action="" onSubmit={this.handleSubmit.bind(this)}>
                    <input className="submit-input" placeholder="Write a comment" className="comment-input" onChange={this.handleInput("body")} type="text" value={this.state.body}/>
                    <input className="submit-button" type="submit" value="Submit" onChange={this.handleSubmit.bind(this)} />
                </form>
            </div>
        )
    }
}

export default withRouter(CommentForm);