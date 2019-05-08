import React from 'react';
import NewCommentForm from './comment_form';
import CommentList from './comment_list';

class Comments extends React.Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }


    render() {
        return (
            <div>
                Hello!
                <NewCommentForm />
                <CommentList />
            </div>
        )
    }

}

export default Comments;