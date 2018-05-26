import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import adminList from "./components/AdminList"

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
