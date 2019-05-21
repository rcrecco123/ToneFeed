import React from 'react';

class CommentIndex extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
        }
    }


    componentWillMount() {

    }

    render() {

        const comments = Object.values(this.props.comments);
        debugger
        var results = comments.filter(comment => comment['track_id'] === this.props.track.id);


        const final = results.map(comment => {
            debugger
            // return (
            //     <li className="comment-list-item-box">
            //         <img src="https://image.flaticon.com/icons/svg/149/149071.svg" alt="" />
            //         <div className="comment-list-item-box-p">
            //             <p>{comment.created_at}</p>
            //             <p>{comment.author}</p>
            //             <p>{comment.body}</p>
            //         </div>
            //     </li>
            // )


            return (
                <CommentIndexItem comment={comment} />
            )

        })
        debugger

        <div>
            Hey!
        </div>
    }
}

export default CommentIndex;