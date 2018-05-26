import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AdminHolder from './components/AdminHolder';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>This is the app component being rendered</p>
        <AdminHolder />
      </div>
    );
  }
}

export default App;
