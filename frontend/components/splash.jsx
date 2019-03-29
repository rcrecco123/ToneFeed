// SPLASH PAGE!
import React from 'react';


class Splash extends React.Component {

    constructor(props) {
        super(props)

        // this.handleSubmit = this.handleSubmit.bind(this)
    }


    render() {

        return (
            <div>
                <div className="main-slider">
                    <header>
                        <h1 className='header'>ToneFeed</h1>
                    </header>
                    <ul className="main-slider-content">
                        <li>
                            <div class="image-1-box">
                                <h3 className="image-1-text">Explore with ToneFeed</h3>
                                <span className="image-1-text-body"> Discover new music with ToneFeed</span>
                            </div>
                            <img src="https://a-v2.sndcdn.com/assets/images/home/hp_image_creator_slide-50cfacf.jpg" alt="image1"></img>
                        </li>
                        <li>
                            <div class="image-2-box">
                                <h3 className="image-2-text">Feed your ears</h3>
                                <span className="image-2-text-body">Upload your tracks and start sharing music</span>
                            </div>
                            <img src="https://a-v2.sndcdn.com/assets/images/home/hp_image-6155d6b.jpg" alt="image2"></img>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }

}

export default Splash;