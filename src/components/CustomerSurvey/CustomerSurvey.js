import React, { Component } from 'react';
import { Container, Row, Col, Form, Button, FormControl } from 'react-bootstrap';
import { Link, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { surveySubmit } from '../../store/Action/SurveyActions';

import './CustomerSurvey.css'

class CustomerSurvey extends Component {
    constructor(props){
        super(props);
        this.state = {
            location: '',
            city: '',
            circle: '',
            rooms: '',
            area: '',
            checked: [],
            preference: '',
            surveyType: 'customer'
        }
    }

    submitHandler = (e) => {
        e.preventDefault();
        this.props.customerSurveySubmit(this.state);
        this.props.history.push('/dashboard');
        console.log(this.state);
    }

    checkHandler = (e) => {
        if (e.target.checked) {
            this.setState({
                ...this.state,
                checked: [...this.state.checked, e.target.name]
            })
        } else {
            const checked = this.state.checked.filter(obj => obj !== e.target.name)
            this.setState({
                ...this.state,
                checked: checked
            })
        }
    
    }

    changeHandler = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    render() {

        const { auth } = this.props;

        if (!auth.uid) return <Redirect to='/signin' />

        return (
            <div className='customer-survey-wrap d-flex justify-content-center align-items-center'>
                <Container>
                    <div className='customer-main'>
                        <Row>
                            <Col className='form-one-wrap'>
                                <div className='back-link mb-5'><Link to='/options'><i className="fas fa-chevron-left"></i>Go Back</Link></div>
                                <Form onSubmit={this.submitHandler}>
                                    <Form.Group className='d-flex flex-row justify-content-between'>
                                        <div className='form-first-text'>
                                            <Form.Label>Enter the location</Form.Label>
                                            <Form.Control type='text' name='location' onChange={this.changeHandler}></Form.Control>
                                        </div>
                                        <div className='form-first-text'>
                                            <Form.Label>Enter the city</Form.Label>
                                            <Form.Control type='text' name='location' onChange={this.changeHandler}></Form.Control>
                                        </div>
                                    </Form.Group>
                                    <Form.Group className='d-flex flex-row justify-content-between align-items-center'> 
                                        <div className= 'form-number'>
                                            <Form.Label>Circle</Form.Label>
                                                <FormControl name='circle' size='sm' type='number' onChange={this.changeHandler}/>
                                        </div>
                                        <div className= 'form-number'>
                                            <Form.Label>Rooms</Form.Label>
                                                <FormControl name='circle' size='sm' type='number' onChange={this.changeHandler}/>
                                        </div>
                                        <div className= 'form-number'>
                                            <Form.Label>Area</Form.Label>
                                                <FormControl name='circle' size='sm' type='number' onChange={this.changeHandler}/>
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Aparment Type</Form.Label>
                                        <div className='d-flex flex-wrap justify-content-between mb-4'>
                                            <Form.Check type="checkbox" label="Basement" name="basement" value={this.basement} onChange={this.checkHandler} className='m-2 w-150px' />
                                            <Form.Check type="checkbox" label="Ground Floor" name="goundFloor" value={this.groundFloor} onChange={this.checkHandler} className='m-2 w-150px' />
                                            <Form.Check type="checkbox" label="Mezzanine Floor" name="mezzanineFloor" value={this.mezzanineFloor} onChange={this.checkHandler} className='m-2 w-150px' />
                                            <Form.Check type="checkbox" label="Flat" name="flat" value={this.flat} onChange={this.checkHandler} className='m-2 w-150px' />
                                            <Form.Check type="checkbox" label="Loft" name="loft" value={this.loft} onChange={this.checkHandler} className='m-2 w-150px' />
                                            <Form.Check type="checkbox" label="Maisonette" name="maisonette" value={this.maisonette} onChange={this.checkHandler} className='m-2 w-150px' />
                                            <Form.Check type="checkbox" label="Terrace Apartment" name='terraceAppartment' value={this.terraceApartment} onChange={this.checkHandler} className='m-2' />
                                            <Form.Check type="checkbox" label="Penthouse" name="penthouse" value={this.penthouse} onChange={this.checkHandler} className='m-2 w-150px' />
                                            <Form.Check type="checkbox" label="Attic" name="attic" value={this.attic} onChange={this.checkHandler} className='m-2 w-150px' />
                                            <Form.Check type="checkbox" label="Other" name="other" value={this.other} onChange={this.checkHandler} className='m-2 w-150px' />
                                        </div>
                                    </Form.Group>
                                    <Button type='submit'>Submit</Button>
                                </Form>
                            </Col>
                            <Col>
                                <Form.Group className='my-5'>
                                    <Form.Label>Any Other prefernces</Form.Label>
                                    <Form.Control as='textarea' name='preference' onChange={this.changeHandler} />
                                </Form.Group>
                                <Form.Group>
                                        <Form.Label>Additional Options</Form.Label>
                                        <Form.Group className='d-flex flex-wrap justify-content-between'>
                                            <Form.Check type="checkbox" label="Garage" name='garage' value={this.garage} onChange={this.checkHandler} className='m-2 w-150px' />
                                            <Form.Check type="checkbox" label="Equipped Kitchen" name='equipedKitchen' value={this.equipedKitchen} onChange={this.checkHandler} className='m-2 w-150px' />
                                            <Form.Check type="checkbox" label="Passenger Elevator" name='passengerElevator' value={this.passengerElevator} onChange={this.checkHandler} className='m-2 w-150px' />
                                            <Form.Check type="checkbox" label="Basement" name='cellar' value={this.cellar} onChange={this.checkHandler} className='m-2 w-150px' />
                                            <Form.Check type="checkbox" label="Basement" name='basement' value={this.cellar} onChange={this.checkHandler} className='m-2 w-150px' />
                                            <Form.Check type="checkbox" label="Guest Toilet" name='guestToilet' value={this.guestToilet} onChange={this.checkHandler} className='m-2 w-150px' />
                                        </Form.Group>
                                    </Form.Group>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        customerSurveySubmit: (survey) => dispatch(surveySubmit(survey))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CustomerSurvey))