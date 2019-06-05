import React from 'react';
import CommentForm from './comment_form_container';
import CommentIndex from './comment_index_container';

class Comments extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
        }
    }

    componentWillMount() {

    }

    changeButtonState() {
        
    }

    render() {
        
        
        return (
            <div className="comment-main">
                <CommentForm track={this.props.track} />
                <CommentIndex track={this.props.track} />
            </div>
        )
    }
}

export default Comments;