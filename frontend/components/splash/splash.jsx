// SPLASH PAGE!
import React from 'react';
import TrackSplash from "../../components/track/track_splash_container";

class Splash extends React.Component {

    constructor(props) {
        super(props)

        this.handleDemo = this.handleDemo.bind(this)
    };

    handleDemo() {
        this.props.demo({ email: 'docdoom815@gmail.com', password: 'funfunfun1' })
            .then(() => {

                this.props.history.push("/feed")

            });
    };

    componentDidMount() {

    }

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
                            <img src="https://a-v2.sndcdn.com/assets/images/home/hp_image_creator_slide-50cfacf.jpg" className="image-1-box-image" alt="image1"></img>
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
                <div className="splash-thumbnails-one">



                    {/* <div className="pokemon-pic"></div> */}
                    <img className="pokemon-pic" src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5c19fa46045473.584638b38e808.jpg" alt="" />
                    <img className="pokemon-pic" src="https://images.squarespace-cdn.com/content/v1/5ae494aa45776e3997215535/1525183861821-KAHK2Z7F8NERYNY64S25/ke17ZwdGBToddI8pDm48kJK4Mm1kch8SFO9ZNkN1NT97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmFk_H6M1tkD9NpL7mXac0oVSXdFfjxR5AjcLwGSebOiGBsFzzcw3xKxvyC_6CFFG_/the+ride+11.jpg" alt="" />
                    <img className="pokemon-pic" src="https://art.ngfiles.com/images/640000/640689_thedefector_concept-album-art-muse.png?f1536667181" alt="" />
                    <img className="pokemon-pic" src="https://cdn.dribbble.com/users/3505439/screenshots/6656913/sedum_-_promo-afcomp211.jpg" alt="" />
                    <img className="pokemon-pic" src="http://johnniesvillapizza.com/wp-content/uploads/220px-Dark_Side_of_the_Moon.png" alt="" />
                    <img className="pokemon-pic" src="http://www.dopedavidphotos.com/uploads/8/0/0/3/80038364/more-life-dope-david-photos_orig.jpg" alt="" />
                    <img className="pokemon-pic" src="https://static.wixstatic.com/media/c3a84a_cd48a83f545344479a463c471ac59776~mv2_d_1338_1338_s_2.jpg/v1/fill/w_1338,h_1338,al_c,q_90/file.jpg" alt="" />
                    <img className="pokemon-pic" src="https://www.nuclearblast.de/static/articles/130/130921.jpg/1000x1000.jpg" alt="" />
                    <img className="pokemon-pic" src="http://www.brooklynvegan.com/files/img/music2/anaishades.jpg?zc=1&s=0&a=t&q=89&w=470" alt="" />
                    <img className="pokemon-pic" src="https://puregrainaudio.com/images/blogimages/26696.jpg" alt="" />

                </div>
                {/* <TrackSplash getRandomTracks={this.props.getRandomTracks} /> */}
                <div className='splash-banner'>
                    <img src='https://a-v2.sndcdn.com/assets/images/home/hp_creator_image-e08dee4.jpg'></img>
                    <div className='banner-text'>
                        <h2>Thanks for listening. Now join in.</h2>
                        <p>Listen, upload, and share music with the world.</p>
                        <button className="login-button bottom-button" onClick={() => this.props.openModal('signup')}>Create account</button>
                        <br />
                        <div className='inline-banner'>
                            <p className='inline-banner-text'>Already have an account?</p> <button className="signin-button bottom-button" onClick={() => this.props.openModal('login')}>Sign in</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Splash;