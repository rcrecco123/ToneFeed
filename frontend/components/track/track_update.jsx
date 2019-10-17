import React from 'react';
import { withRouter } from 'react-router-dom';

class TrackUpdate extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: null
        }
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value })
        };
    };

    handleSubmit(e) {

        e.preventDefault();
        const formData = new FormData();

        formData.append('track[title]', this.state.title);
        // formData.append('track[image]', this.state.image);

        $.ajax({
            url: `/api/tracks/${this.props.match.params.id}`,
            method: "PATCH",
            data: formData,
            contentType: false,
            processData: false,
        }).then((response => console.log(response.message)),
            response => console.log(response.JSON))
            .then((console.log())).then(this.props.closeModal());

        this.props.closeModal();

        if (formData) this.props.history.push(`/feed`);
    }

    handleFileImg(e) {

        const fileTwo = e.currentTarget.files[0];
        const fileReaderTwo = new FileReader();
        fileReaderTwo.onloadend = () => {
            this.setState({ image: fileTwo, imageUrl: fileReaderTwo.result })
        }
        if (fileTwo) {
            fileReaderTwo.readAsDataURL(fileTwo);
        }
    }

    render() {



        return (
            <div className="modal-form">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <br />
                    <label className="modal-label">Title
                         <input className="modal-text-box" type="text" onChange={this.handleInput('title')} />
                    </label>
                    <br />
                    <br />
                    <label className="modal-label">Image
                         <input type="file" onChange={this.handleFileImg.bind(this)} />
                    </label>
                    <br />
                    <br />
                    <input className="" type="submit" value="SUBMIT!" />

                </form>
            </div>
        )

    }



}

export default withRouter(TrackUpdate);