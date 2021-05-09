import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Button, Container, FormControl, InputGroup, Navbar} from 'react-bootstrap';

import { connect } from 'react-redux';
import { logout, emailAuth } from '../../store/Action/AuthActions';

import './Header.css';

const Header = (props) => {

    const { auth } = props;
    
    const [drop, setDrop] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const creds = { email: email, password: password}

    const clickHandler = () => {
        props.logout();
        setDrop(!drop);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        props.emailAuth(creds);
    }

    return (
        <Navbar>
            <Container>
                <div className='nav-wrap w-100 m-2'>
                    <div className='brand-wrap'><Link to='/'><img src='/assets/images/bluewallslogo_main.png' alt='mainlogo'/></Link></div>
                    <div className='navbar-group'>
                        {auth.uid ?

                        <div className='profile-pic' onClick={() => setDrop(!drop)}>
                            { auth.photoURL ? 
                                <img src={auth.photoURL} alt='photo_url'/>
                                :
                                <i className="fas fa-user-alt"></i>
                            }
                            
                            { drop ?
                            <div className='d-flex flex-column justify-content-center align-items-center mt-3 log-menu'>
                            <p onClick={clickHandler} className='mt-3'>Logout</p>
                            <Link to='/dashboard'><p>Dashboard</p></Link>
                            </div> : null
                            }
                        
                        </div> 
                        :
                        
                        <div className='d-flex'>
                            <div className='mx-1'><InputGroup size='sm'><FormControl name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' type='email' /></InputGroup></div>
                            <div className='mx-1'><InputGroup size='sm'><FormControl name='password' values={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' type='password' /></InputGroup></div>
                            <div className='mx-1'><Button onClick={submitHandler} variant='primary' size='sm'>Log In</Button></div>
                        </div>
                        }
                    </div>
                </div>
            </Container>
        </Navbar>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout()),
        emailAuth: (creds) => dispatch(emailAuth(creds))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header)
