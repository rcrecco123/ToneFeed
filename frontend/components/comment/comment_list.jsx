import React from 'react';

class CommentList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    componentWillReceiveProps(props) {
        if (props != this.props) {
            this.setState({ flip: !this.flip })
        }
    }

    render() {

        const comments = Object.values(this.props.comments);
        debugger
        var results = comments.filter(comment => comment['track_id'] === this.props.track.id);
      

        const final = results.map(comment => {
            debugger
            return (
                <li className="comment-list-item-box">
                    <img src="https://image.flaticon.com/icons/svg/149/149071.svg" alt=""/>
                    <div className="comment-list-item-box-p">
                        <p>{comment.created_at}</p>
                        <p>{comment.author}</p>
                        <p>{comment.body}</p>
                    </div>
                </li>
            )
        })
        debugger


        return (
            <div className="comments-list-final">
                <div>
                    <div className="header-comment-list-avatar">
                        <img className="user-avatar-list" src="https://image.flaticon.com/icons/svg/149/149071.svg" alt=""/>
                        <p>{this.props.currentUser}</p>
                    </div>
                </div>
                <ul className="actual-comments-list">
                {final}
                </ul>
            </div>
        )
    }
}

export default CommentList;