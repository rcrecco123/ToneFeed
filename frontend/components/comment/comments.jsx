import React from 'react';
import NewCommentForm from './comment_form';
import CommentList from './comment_list';

class Comments extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            flip: true
        }
    }


    componentDidMount() {
        this.props.fetchComments(this.props.match.params.id);
    }

    

    render() {

        debugger
        return (
            <div className="comment-main">
                Hello!
                <NewCommentForm track={this.props.track} currentUser={this.props.currentUser}/>
                <CommentList comments={this.props.comments} track={this.props.track} />
            </div>
        )
    }

}

export default Comments;