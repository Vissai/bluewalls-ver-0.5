import React from 'react'
import { Container } from 'react-bootstrap'

import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-wrap'>
            <Container>
                <div className='footer-sub d-flex justify-content-between'>
                    <div className='footer-main my-5'>
                        <h4>About Bluewalls</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <span><a href='/home'>Terms & Conditions</a></span><span><a href='/home'>Privacy Policy</a></span>
                    </div>
                    <div>
                        <div className='footer-icons my-5 d-flex'>
                            <div><a href='/home'>Facebook</a></div>
                            <div><a href='/home'>Instagram</a></div>
                            <div><a href='/home'>LinkendIn</a></div>
                            <div><a href='/home'>Twitter</a></div>
                        </div>
                    </div>
                </div>
            </Container>            
        </div>
    )
}

export default Footer
