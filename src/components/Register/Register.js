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
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault();
        console.log(this.state)
    }

    render() {

        const {email, phone, password, confirmPassword} = this.state

        return (
            <div className='register-main'>
                <Container>
                    <div className='register-wrap d-flex w-100'>
                        <div className='register-headsup col-sm-4'>
                            <h2>Just few a steps more</h2>
                            <p>You will have your own bluewalls account</p>
                        </div>
                        <div className='register-form col-sm-8 d-flex flex-column justify-content-center align-items-center'>
                            <h4>Register</h4>
                            <Form onSubmit={this.submitHandler}>
                                <div className='d-flex w-100'>
                                    <Form.Group>
                                        <Form.Label>Email Address</Form.Label>
                                        <Form.Control name='email' type='email' value={email} onChange={this.changehandler}/>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Phone Number</Form.Label>
                                        <Form.Control name='phone' type='number' value={phone} onChange={this.changehandler}/>
                                    </Form.Group>
                                </div>
                                <div className='d-flex w-100'>
                                    <Form.Group>
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control name='password' type='password' value={password} onChange={this.changehandler}/>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Confirm Password</Form.Label>
                                        <Form.Control name='confirmPassword' type='password' value={confirmPassword} onChange={this.changehandler}/>
                                    </Form.Group>
                                </div>
                                    <Form.Group className='d-flex flex-row align-items-center'>
                                        <Form.Check aria-label="option 1" />
                                        <Form.Label>I agree to <Link to='/'>Terms & Services</Link> and <Link to='/'>Privacy Policy</Link></Form.Label>
                                    </Form.Group>
                                    <p>Already have an account? <Link to='/login'>Log in</Link></p>
                                    <Button variant='primary' type='submit'>Register</Button>
                                </Form>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
}
