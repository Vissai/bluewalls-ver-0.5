import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
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

        const {email, password } = this.state

        return (
            <div className='register-main'>
                <Container>
                    <div className='register-wrap d-flex w-100'>
                        <div className='register-headsup col-sm-4'>
                            <h2>Your dashboard awaits</h2>
                            <p>Login with your cedentials</p>
                        </div>
                        <div className='register-form col-sm-8 d-flex flex-column justify-content-center align-items-center'>
                            <h4>Log In</h4>
                            <Form onSubmit={this.submitHandler}>
                                    <Form.Group>
                                        <Form.Label>Email Address</Form.Label>
                                        <Form.Control name='email' type='email' value={email} onChange={this.changehandler}/>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control name='password' type='password' value={password} onChange={this.changehandler}/>
                                    </Form.Group>
                                    <p>Do not have an account? <Link to='/register'>Register</Link></p>
                                    <Button variant='primary' type='submit'>Log In</Button>
                                </Form>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
}
