import React from 'react'
import { Button, Container, FormControl, InputGroup, Navbar} from 'react-bootstrap'

import './Header.css';

const Header = () => {
    /* 
    * Responsiveness Ok till Tab
    */
    return (
        <Navbar>
            <Container>
                <div className='nav-wrap w-100 m-2'>
                    <div className='brand-wrap'><img src='/assets/images/bluewallslogo_main.png' alt='mainlogo'/></div>
                    <div className='navbar-group'>
                        <div className='mx-1'><InputGroup size='sm'><FormControl placeholder='Username' /></InputGroup></div>
                        <div className='mx-1'><InputGroup size='sm'><FormControl placeholder='Password' /></InputGroup></div>
                        <div className='mx-1'><Button variant='primary' size='sm'>Log In</Button></div>
                    </div>
                </div>
            </Container>
        </Navbar>
    )
}

export default Header
