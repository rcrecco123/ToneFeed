import React from 'react';

class Upload extends React.Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit() {
        e.preventDefault();
    }

    render() {
        
        return (
        <form>
            <input type="file"></input>
        </form>
        )
    }

}

export default Upload;