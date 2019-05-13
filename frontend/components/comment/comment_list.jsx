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
        const results = comments.filter(comment => comment['track_id'] === this.props.track.id);

        const final = results.map(comment => {
            debugger
            return (
                <div>
                    {comment.body}
                </div>
            )
        })
        debugger
        return (
            <div>
                comment list
                {final}
            </div>
        )
    }
}

export default CommentList;