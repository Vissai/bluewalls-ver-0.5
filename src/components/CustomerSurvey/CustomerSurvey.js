import React, { Component } from 'react';
import { Container, Row, Col, Form, InputGroup, Button, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
        console.log(this.state)
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
        return (
            <div className='customer-survey-wrap d-flex justify-content-center align-items-center'>
                <Container>
                    <div className='customer-main'>
                        <Row>
                            <Col className='form-one-wrap'>
                                <div className='back-link'><Link to='/options'><i className="fas fa-chevron-left"></i>Go Back</Link></div>
                                <Form onSubmit={this.submitHandler}>
                                    <Form.Group className='d-flex flex-row justify-content-between'>
                                        <div>
                                            <Form.Label>Enter the location</Form.Label>
                                            <Form.Control type='text' name='location' onChange={this.changeHandler}></Form.Control>
                                        </div>
                                        <div>
                                            <Form.Label>Enter the city</Form.Label>
                                            <Form.Control type='text' name='location' onChange={this.changeHandler}></Form.Control>
                                        </div>
                                    </Form.Group>
                                    <Form.Group className='d-flex flex-row justify-content-around align-items-center'> 
                                        <div>
                                            <Form.Label>Circle</Form.Label>
                                            <InputGroup>
                                                <InputGroup.Prepend><Button variant="outline-secondary" size='sm'>-</Button></InputGroup.Prepend>
                                                <FormControl name='circle' size='sm' type='number' onChange={this.changeHandler}/>
                                                <InputGroup.Append><Button variant="outline-secondary" size='sm'>+</Button></InputGroup.Append>
                                            </InputGroup>
                                        </div>
                                        <div>
                                            <Form.Label>Rooms</Form.Label>
                                            <InputGroup>
                                                <InputGroup.Prepend><Button variant="outline-secondary" size='sm'>-</Button></InputGroup.Prepend>
                                                <FormControl name='circle' size='sm' type='number' onChange={this.changeHandler}/>
                                                <InputGroup.Append><Button variant="outline-secondary" size='sm'>+</Button></InputGroup.Append>
                                            </InputGroup>
                                        </div>
                                        <div>
                                            <Form.Label>Area</Form.Label>
                                            <InputGroup>
                                                <InputGroup.Prepend><Button variant="outline-secondary" size='sm'>-</Button></InputGroup.Prepend>
                                                <FormControl name='circle' size='sm' type='number' onChange={this.changeHandler}/>
                                                <InputGroup.Append><Button variant="outline-secondary" size='sm'>+</Button></InputGroup.Append>
                                            </InputGroup>
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Aparment Type</Form.Label>
                                        <div className='d-flex flex-wrap justify-content-between'>
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
                                <div>Would you provide us more information, this will help us immensely</div>
                                <Form.Group>
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

export default CustomerSurvey;