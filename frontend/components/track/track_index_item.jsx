import React from 'react';
import WaveSurfer from 'wavesurfer.js';

class TrackIndexItem extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            ws: null
        }

        this.playClick = this.playClick.bind(this);
        this.handlePlayToggle = this.handlePlayToggle.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.likeButtonClick = this.likeButtonClick.bind(this);
    }


    componentDidMount() {

        // let wavesurfer = WaveSurfer.create({
        //     container: `#wavesurfer${this.props.track.id}`,
        //     waveColor: 'violet',
        //     progressColor: 'purple'
        // })


        this.setState({
            ws: WaveSurfer.create({
                container: `#waveform${this.props.track.id}`,
                waveColor: 'rgb(146, 146, 146)',
                progressColor: '#f50',
                barGap: 0,
                barWidth: 2,
                hideScrollbar: true,
                cursorColor: 'transparent'
            })
        })

        // this.state.ws.load(this.props.track.fileUrl);
    }

    playClick() {
        this.state.ws.playPause();
        this.handlePlayToggle();
    }

    handlePlayToggle() {
        const oldStyle = document.getElementById(`index-play${this.props.track.id}`).className;
        const newClassName = oldStyle === "fas fa-play-circle" ? "fas fa-pause-circle" : "fas fa-play-circle"
        document.getElementById(`index-play${this.props.track.id}`).className = newClassName
    }

    handleDelete() {
        this.props.deleteTrack(this.props.track.id);
    }

    likeButtonClick() {

        const likeButton = document.getElementById(`likeButton${this.props.track.id}`);
        likeButton.setAttribute('color', "#f50");
    }

    render() {



        if (this.state.ws) {
            this.state.ws.load(this.props.track.fileUrl)
        };


        // <div><h3 className="link-to-show" onClick={() => { this.props.history.push(`/tracks/${this.props.track.id}`) }}>{track.title}</h3></div>
        return (
            <li className="single-track-index-box" key={this.props.track.title}>

                <div className="image-container">
                    <img className="single-track-image" src={this.props.track.imageUrl} />
                </div>


                <div className="track-index-show-item-pb">

                    <div className="track-info">
                        <div className="inner-info">
                            <div><h5 className="track-inner-info" onClick={
                                () => {
                                    this.props.url(`/tracks/${this.props.match.params.id}`)
                                }
                            }>{this.props.track.username}</h5></div>
                            <div><h6 className="link-to-show" onClick={() => { this.props.url(`/tracks/${this.props.track.id}`) }}>{this.props.track.title}</h6></div>
                        </div>
                    </div>

                    {/* <div className="play-button-outer2">
                        <i className="fas fa-pause"></i>
                    </div> */}

                    <div className="circle-play-index" >
                        <i id={`index-play${this.props.track.id}`} className="fas fa-play-circle" onClick={this.playClick}></i>
                        {/* <i className="fas fa-pause-circle"></i> */}

                    </div>

                </div>



                <div className="track-index-item-waveform" id={`waveform${this.props.track.id}`}></div>

                <div className="font-awesome-track-index">
                    {/* <button onClick={this.likeButtonClick} >
                        <i className="far fa-thumbs-up" id={`likeButton${this.props.track.id}`} ></i>
                    </button> */}
                    {/* <i className="fas fa-retweet"></i> */}
                    <i className="far fa-trash-alt" onClick={this.handleDelete.bind(this)}></i>
                </div>

            </li>
        );
    }

}

export default TrackIndexItem;