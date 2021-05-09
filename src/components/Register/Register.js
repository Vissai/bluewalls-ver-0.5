import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Container, Form, Button, Alert, Spinner } from 'react-bootstrap';
import { connect } from 'react-redux';
import { register } from '../../store/Action/AuthActions'

import './Register.css'

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            phone: '',
            password: '',
            confirmPassword: '',
            agree: false,
            loading: false,
            errors: [],
        }
    }

    isFormValid = () => {
        let errors = [];
        let error;

        if (this.state.agree === false){
            error = { message: 'Please aceept our Privacy Policy'}
            this.setState({ errors: errors.concat(error) });
            return false;
        } else if(this.isFormEmpty(this.state)) {
            error = { message: 'Please fill all mandatory fields'}
            this.setState({ errors: errors.concat(error)})
            return false;
        } else if(!this.isPasswordValid(this.state)) {
            error = { message: 'Password is invalid' }
            this.setState({ errors: errors.concat(error)})
            return false
        } else {
            return true;
        }
    }

    isFormEmpty = ({ email, password, confirmPassword}) => {
        return !email.length || !password.length || !confirmPassword.length;
    }

    isPasswordValid = ({ password, confirmPassword }) => {
        if (password.length < 6 || confirmPassword.length < 6) {
            return false;
        } else if ( password !== confirmPassword ){
            return false;
        } else {
            return true;
        }
    }

    checkHandler = (e) => {
        if (e.target.checked) {
            this.setState({
                ...this.state,
                agree: true
            })
        } else {
            this.setState({
                ...this.state,
                agree: false
            })
        }
    }

    changehandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault();
        if(this.isFormValid()) {
            // this.setState({ errors:[], loading: true});
            // firebase
            //     .auth()
            //     .createUserWithEmailAndPassword(this.state.email, this.state.password)
            //     .then(createdUser => {
            //         console.log(createdUser)
            //         createdUser.user.updateProfile({
            //             displayName: this.state.email,
            //             photoURL: `http://gravatar.com/avatar/${md5(createdUser.user.email)}?d=identicon`
            //         }).then(() => {
            //             this.setState({ loading: false });
            //         }).catch((error) => {
            //             console.log(error)
            //             this.setState({ errors: this.state.errors.concat(error), loading: false })
            //         })
            //     })
            //     .catch(error => {
            //         console.error(error);
            //         this.setState({ errors: this.state.errors.concat(error), loading: false })
            //     });
            this.props.register(this.state)
            }
    }

    dispalyErrors = (errors) => errors.map((error, i) => <p className='m-0' key={i}>{error.message}</p>)

    render() {

        const {email, phone, password, confirmPassword, errors, loading} = this.state

        if(this.props.auth.uid) return <Redirect to='/options' />

        return (
            <div className='register-main'>
                <Container>
                    <div className='register-wrap d-flex w-100'>
                        <div className='register-headsup col-sm-4'>
                            <h2>Just few steps more</h2>
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
                                        <Form.Check type='checkbox' name='agree' value={this.agree} onChange={this.checkHandler}/>
                                        <Form.Label>I agree to <Link to='/'>Terms & Services</Link> and <Link to='/'>Privacy Policy</Link></Form.Label>
                                    </Form.Group>
                                    <p>Already have an account? <Link to='/login'>Log in</Link></p>
                                    <Button variant='primary' type='submit' disabled={loading}>{loading ? <Spinner animation="border" size='sm' variant="light" /> : 'Register'}</Button>
                                    {
                                    errors.length > 0 && (
                                        <Alert className='mt-5' variant='danger'>
                                            {this.dispalyErrors(errors)}
                                        </Alert>
                                    )}
                                </Form>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        register: (credentials) => dispatch(register(credentials))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Register)