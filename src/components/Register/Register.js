import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';

import './Register.css'

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            phone: '',
            password: '',
            confirmPassword: ''
        }
    }

    changehandler = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault();
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
        console.log(this.state);
    }

    render() {
        return (
            <div className='register-main'>
                <Container>
                    <div className='register-wrap d-flex w-100'>
                        <div className='register-headsup col-sm-4'>
                            <h2>Just few a steps more</h2>
                            <p>You will have your own bluewalls account</p>
                        </div>
                        <div className='register-form col-sm-8 d-flex flex-column justify-content-center align-items-center'>
                            <h5>Register</h5>
                            <Form onSubmit={this.submitHandler}>
                                <div className='d-flex w-100'>
                                    <Form.Group>
                                        <Form.Label>Email Address</Form.Label>
                                        <Form.Control name='email' type='email'/>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Phone Number</Form.Label>
                                        <Form.Control name='phone' type='number'/>
                                    </Form.Group>
                                </div>
                                <div className='d-flex w-100'>
                                    <Form.Group>
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control name='password' type='password'/>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Confirm Password</Form.Label>
                                        <Form.Control name='confirmPassword' type='password'/>
                                    </Form.Group>
                                </div>
                                    <Form.Group className='d-flex flex-row'>
                                        <Form.Check aria-label="option 1" />
                                        <Form.Label>I agree to <Link to='/'>Terms & Services</Link> and <Link to='/'>Privacy Policy</Link></Form.Label>
                                    </Form.Group>
                                    <p>Already have an account? <Link to='/'>Log in</Link></p>
                                    <Button variant='primary' type='submit'>Register</Button>
                                </Form>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
}
