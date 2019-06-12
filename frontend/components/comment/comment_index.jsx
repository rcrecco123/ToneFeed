import React from 'react';
import CommentIndexItem from './comment_index_item';

class CommentIndex extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
        }
    }


    componentWillMount() {
        this.props.fetchComments();
    }

    render() {
        
        const comments = Object.values(this.props.comments);
        const results = comments.filter(comment => comment['track_id'] === this.props.track.id);
        
        

        const final = results.map(comment => {
            
            //debugger

            return (

                <CommentIndexItem destroyComment={this.props.destroyComment} comment={comment} key={comment.id} />

            )

        })
            return (
                <div className="two-boxes-comment-list">

                    <div className="users-track-window">
                        <img src="https://image.flaticon.com/icons/svg/149/149071.svg" alt="" />
                        {/* <p>{this.props.user.username}</p> */}
                        <button>Follow</button>
                    </div>
                    <div className="right-side-main-comments">

                        <div className="all-comments-container">
                            <div className="comment-count-part">
                                <i className="fas fa-comment-alt"> {results.length} comments</i>
                            </div>
                        </div>
                        <ul className="ul-comments">
                            {final}
                        </ul>
                    </div>
                </div>
               
            )
    }
}

export default CommentIndex;