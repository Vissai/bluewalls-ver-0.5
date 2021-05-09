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
                        <div className='footer-icons my-5 d-flex justify-content-center m-5'>
                            <div className='icons-wrap m-3'><a href='/home'><i class="fab fa-facebook-f"></i></a></div>
                            <div className='icons-wrap m-3'><a href='/home'><i class="fab fa-instagram"></i></a></div>
                            <div className='icons-wrap m-3'><a href='/home'><i class="fab fa-linkedin-in"></i></a></div>
                            <div className='icons-wrap m-3'><a href='/home'><i class="fab fa-twitter"></i></a></div>
                        </div>
                    </div>
                </div>
            </Container>            
        </div>
    )
}

export default Footer
