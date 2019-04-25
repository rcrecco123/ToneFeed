import React from 'react';
import { withRouter } from 'react-router-dom';

class Upload extends React.Component {

    constructor(props) {
        super(props);
        debugger
        console.log(props.currentUser);
        this.state = {
            track: null,
            trackUrl: null,
            title: "",
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInput(type) {
        //arrow function that sets state
        return (e) => {
            //keys that match state get updated
            //square brackets makes it evaluated before assigned to key
            this.setState({ [type]: e.target.value })
        };
    };
    
    handleFile(e) {
        debugger
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ track: file, trackUrl: fileReader.result })
        }
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('track[title]', this.state.title);
        formData.append('track[file]', this.state.trackFile);
        debugger
        formData.append('track[user_id]', this.props.currentUser);
        $.ajax({
            url: "/api/tracks",
            method: "POST",
            data: formData,
            contentType: false,
            processData: false,
        }).then((response => console.log(response.message)),
                 response => console.log(response.JSON))
    }

    render() {
        console.log(this.state);
        return (
        <div className="upload-form-div">
            <div >
                    <h2 className="click-to-upload">Click to start uploading tones</h2>
            </div>

            <form className="upload-form" onSubmit={this.handleSubmit.bind(this)}>
                    <label className="custom-file-upload">
                        <input type="file" onChange={this.handleFile.bind(this)} />
                        <i className="fa fa-cloud-upload"></i> Choose a file to upload
                    </label>
                    <br/>
                    <br/>
                    <br/>
                    <label className="track-title">Track Title: &nbsp;
                        <input type="text" value={this.state.trackTitle} placeholder="Title" onChange={this.handleInput('title')} />
                    </label>
                    <br/>
                    <input className="sub-button" type="submit" value="SUBMIT" onChange={this.handleSubmit.bind(this)}/>
            </form>
        </div>
        )
    }

}

export default withRouter(Upload);