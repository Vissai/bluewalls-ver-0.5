import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './components/Header/Header';
import Landing from './components/Landing/Landing';
import Register from './components/Register/Register';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
            <Switch>
              <Route path="/" component={Landing} exact/>
              <Route path="/register" component={Register} />
            </Switch>
        </Router>
      </div>
    )
  }
}
