import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
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
                    <YoutubeModal 
                        show={this.state.modalShow}
                        onHide={this.modalHideHandler}
                    />
                </Container>
            </div>  
        )
    }
}
