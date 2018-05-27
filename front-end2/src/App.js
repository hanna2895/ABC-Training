import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Navbar from './components/Navbar';
import ContentHolder from './components/ContentHolder';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <ContentHolder />
      </div>
    );
  }
}

export default App;
