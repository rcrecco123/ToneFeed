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
                    <header className="main-header">
                        <h1 className='header'>ToneFeed</h1>
                        <div className='buttons'>
                            <button className="signin-button">Sign in</button>
                            <button className="login-button">Create account</button>
                        </div>
                    </header>
                    <ul className="main-slider-content">
                        <li>
                            <div className="image-1-box">
                                <h2 className="image-1-text">Explore with ToneFeed</h2>
                                <span className="image-1-text-body"> Discover new music with ToneFeed</span>
                            </div>
                            <img src="https://a-v2.sndcdn.com/assets/images/home/hp_image_creator_slide-50cfacf.jpg" alt="image1"></img>
                        </li>
                        <li>
                            <div className="image-2-box">
                                <h2 className="image-2-text">Feed your ears</h2>
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