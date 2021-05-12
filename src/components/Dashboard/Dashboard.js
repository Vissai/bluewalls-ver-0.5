import React, { Component } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

import './Dashboard.css';
class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: 'dashboard'
        }
    }

    clickDashboardHandler = () => {
        this.setState({
            display: 'dashboard'
        })
    }

    clickProfileHandler = () => {
        this.setState({
            display: 'profile'
        })
    }

    render() {
        console.log(this.props)
        return (
            <div>
                { this.props.profile ? 
                <div className='d-flex flex-row'>
                    <div className='dashboard-nav-wrap d-flex flex-column'>
                        <div className='dash-pic'><img src={this.props.profile[0].photoURL} alt='/propfile.pic' />{this.props.profile[0].email}</div>
                        <div className='dash-options' onClick={this.clickDashboardHandler}>Dashboard</div>
                        <div className='dash-options' onClick={this.clickProfileHandler}>Profle</div>
                    </div> 
                    <div>
                        { 
                            this.state.display === 'dashboard' && 
                            <div>
                                <Container>
                                    <div className='dash-survey-wrap d-flex flex-row flex-wrap'>
                                        {this.props.survey ? 
                                            this.props.survey.map((obj, index) => (
                                                <Card key={index}>
                                                    <div className='dash-survey-location'>Location {obj.location}</div>
                                                    <div className='dash-survey-items'>City {obj.city}</div>
                                                    <div className='dash-survey-type'>Surbey Type {obj.surveyType}</div>
                                                    <span className='dash-survey-type-icon'><i class="far fa-address-card"></i></span>
                                                    {
                                                        !obj.paymentStatus ? <Button className='payment-btn' size='sm'>Pay</Button> : <Button size='sm' className='payment-btn' disabled>Payment Done</Button>
                                                    }
                                                </Card>    
                                            )) 
                                            : null}
                                                <div className='d-flex justify-content-center align-items-center redirect-options'>
                                                    <Link to='/options'>
                                                        <i className="fas fa-plus-circle"></i>
                                                    </Link>
                                                </div>
                                    </div>
                                </Container>
                            </div>
                        }
                        {
                            this.state.display === 'profile' &&
                            <div>
                                Profile
                            </div>
                        }
                    </div>
                </div> 
                : null }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    const id = state.firebase.auth.uid
    const surveyResponses = state.firestore.ordered.surveyResponses
    const profile = state.firestore.ordered.users
    const survey = surveyResponses ? surveyResponses.filter(o => o.submittedBy === id) : null
    return {
        auth: state.firebase.auth,
        survey: survey,
        profile: profile
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { 
            collection: 'surveyResponses',
        },
        {
            collection: 'users' 
        }
    ])
)(Dashboard)