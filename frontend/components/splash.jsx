// SPLASH PAGE!
import React from 'react';

class Splash extends React.Component {

    constructor(props) {
        super(props)

        this.handleDemo = this.handleDemo.bind(this)
    };

    handleDemo() {
        this.props.demo({email: 'docdoom815@gmail.com', password:'funfunfun1'})
            .then(data => {
                this.props.history.push("/feed")
            });
    };

    
    render() {

        return (
            <div>
                <div className="main-slider">
                    <header className="main-header">
                        <h1 className='header'>ToneFeed</h1>
                        <div className='buttons'>
                            <button className="signin-button" onClick={() => this.props.openModal('login')}>Sign in</button>
                            <button className="login-button" onClick={() => this.props.openModal('signup')}>Create account</button>
                            <button className="demo-button" onClick={this.handleDemo}>Demo Login</button>
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

                <div className='splash-banner'>
                    <img src='https://a-v2.sndcdn.com/assets/images/home/hp_creator_image-e08dee4.jpg'></img>
                    <div className='banner-text'>
                        <h2>Thanks for listening. Now join in.</h2>
                        <p>Listen, upload, and share music with the world.</p>
                        <button className="login-button" onClick={() => this.props.openModal('signup')}>Create account</button>
                        <br/>
                        <div className='inline-banner'>
                            <p className='inline-banner-text'>Already have an account?</p> <button className="signin-button" onClick={() => this.props.openModal('login')}>Sign in</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Splash;