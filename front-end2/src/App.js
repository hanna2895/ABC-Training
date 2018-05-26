import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AdminList from './components/AdminList';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AdminList />
      </div>
    );
  }
}

export default App;
