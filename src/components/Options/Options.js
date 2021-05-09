import React from 'react'
import { Container, Button } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './Option.css'

const Options = (props) => {

    if (!props.auth.uid) return <Redirect to='/login' />

    return (
        <div className='options-wrap d-flex justify-content-center align-items-center'>
            <Container>
                <div className='options-main'>
                    <div>
                        <div>
                            <h2>Select the survey you would like to fill up</h2>
                            <p>We would like to assist you as soon as possible</p>
                        </div>
                        <div className='choice-wrap d-flex w-100 justify-content-around'>
                            <div className='option-choice lookup'>
                                <h4>Investor</h4>
                                <p>
                                    If you looking for opputunities to invest, and grow your assests please click on the button below and fill out the form
                                     we will get in touch with you shortly
                                </p>
                                <Button variant='outline-light' disabled>Coming Soon...</Button>
                            </div>
                            <div className='option-choice'>
                                <h4>Builder</h4>
                                <p>
                                    If you are a builder who wants to seek out locations, or projects to take part in, 
                                    please headout and fill the form by clinking on the button belwo
                                </p>
                                <Button variant='outline-primary' disabled>Coming Soon...</Button>
                            </div>
                            <div className='option-choice'>
                                <h4>Customer</h4>
                                <p>
                                    If you are a customer searching for a dream home,
                                    please click on the button below and fill out the survey.
                                </p>
                                <Link to='/customer'><Button variant='outline-primary'>Next</Button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}


export default connect(mapStateToProps)(Options)
