import React from "react";

class CommentIndexItem extends React.Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    handleDelete() {
        this.props.destroyComment(this.props.comment);
    }

    render() {

        return (
            <li className="comment-list-item-box">

                <div className="comment-flex-box-1">
                    <img src="https://image.flaticon.com/icons/svg/149/149071.svg" alt="" />
                    <div className="comment-list-item-box-p">
                        {/* <p>{this.props.comment.created_at}</p> */}
                        {/* getting this info from jbuilder (i had trouble figuring out where
            to get comment.author from, then realized, since these are active record commands
            (Comment.author.username), through association,
            I can get it from jbuilder) */ }
                        <p>{this.props.comment.author.username}</p>
                        <p>{this.props.comment.body}</p>
                    </div>
                </div>
                <i className="far fa-trash-alt" onClick={this.handleDelete.bind(this)}></i>



                {/* <button className="handle-delete-button" onClick={this.handleDelete.bind(this)}></button> */}
            </li>
        )

    }

};

export default CommentIndexItem;