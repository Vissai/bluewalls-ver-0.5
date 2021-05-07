import React, { Component } from 'react';
import Header from './components/Header/Header';
import Landing from './components/Landing/Landing';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Landing />
      </div>
    )
  }
}
