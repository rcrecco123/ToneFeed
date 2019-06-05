import React from 'react';
import { withRouter } from 'react-router-dom';


class CommentForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            body: "",
            comments: this.props.comments
        }
        //debugger
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    };
  
   
    handleSubmit(e) {

        e.preventDefault();
        
        
        //debugger
        const comment = Object.assign({}, { comment: { author_id: this.props.currentUser, track_id: this.props.track.id, body: this.state.body.toString() } })

        this.props.createComment(comment);
        
        this.setState({ body: '' })
        
    }

    render() {
    
        return (
            <div className="comment-form-main">
                <div className="comment-user-avatar">
                    <img className="user-avatar" src="https://image.flaticon.com/icons/svg/149/149071.svg" />
                </div>
                <form className="form-comment" action="" onSubmit={this.handleSubmit.bind(this)}>
                    <input className="submit-input" placeholder="Write a comment" className="comment-input" onChange={this.handleInput('body')} type="text" value={this.state.body}/>
                    <input className="submit-button" type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default withRouter(CommentForm);