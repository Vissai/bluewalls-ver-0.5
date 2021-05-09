import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './components/Header/Header';
import Landing from './components/Landing/Landing';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Options from './components/Options/Options';
import CustomerSurvey from './components/CustomerSurvey/CustomerSurvey';
import Dashboard from './components/Dashboard/Dashboard'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/options" component={Options} />
              <Route path="/customer" component={CustomerSurvey} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/" component={Landing} exact/>
            </Switch>
        </Router>
      </div>
    )
  }
}
