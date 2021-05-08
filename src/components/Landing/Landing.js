import React, { Component } from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import YoutubeModal from '../YoutubeModal/YoutubeModal';

import './Landing.css';
export default class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false,
            modalShow: false
        }
    }

    hoverIn = () => {
        this.setState({ hover: true });
    }
    hoverOut = () => {
        this.setState({ hover: false });
    }

    modalShowHandler = () => {
        this.setState({ modalShow: true })
    }

    modalHideHandler = () => {
        this.setState({ modalShow: false })
    }

    render() {
        return (
            <div className='landing-wrap w-100'>
                <Container>
                    <div className='main-wrap'>
                        <div>
                            <h1>Welcome to Bluewalls, your dream home awaits you</h1>
                            <h2>Look what we have in store for you</h2>
                            <div className='play-wrap'>
                                <span 
                                    onMouseOver={this.hoverIn} 
                                    onMouseOut={this.hoverOut}
                                    onClick={this.modalShowHandler} 
                                    className={this.state.hover ? 'play hover' : 'play'}>
                                    <i className="fas fa-play"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </Container>
                <div className='text-wrap'>
                    <Container>
                        <div className='text-landing-wrap d-flex flex-row'>
                            <div className='hero-wrap'>
                                <div className='hero-text d-flex flex-column justify-content-around align-items-center'>
                                    <h2>Welcome to Bluewalls</h2>
                                    <img src='/assets/images/favicon.png' alt=' img_alt'/>
                                    <h5>Your dream home awaits</h5>
                                </div>
                            </div>
                            <div className='start-wrap'>
                                <div className='start-text d-flex flex-column justify-content-around text-center'>
                                    <h2>Get Started</h2>
                                    <p>Hurry up, your just steps away, from finding your perfect home</p>
                                    <Link to ='/register'><Button className='w-100' block>Sign Up</Button></Link>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
                <div className='achievements-wrap'>
                    <Container>
                        <div className='achievements-main'><h2>Our Achievements</h2></div>
                        <div className='d-flex justify-content-around number-text'>
                            <div><h2>40K+</h2><p>Members</p></div>
                            <div><h2>20k+</h2><p>Happy Clients</p></div>
                            <div><h2>13k+ </h2><p>Turn Arrounds</p></div>
                        </div>
                        <div className='filler-text'><h3>We plan on increasing this number gradually</h3></div>
                    </Container>
                </div>
                <Footer />
                <YoutubeModal 
                    show={this.state.modalShow}
                    onHide={this.modalHideHandler}
                />
            </div>  
        )
    }
}
