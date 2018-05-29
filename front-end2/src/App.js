import React, { Component } from 'react';
import { connect } from 'react-redux'
import Navbar from './components/Navbar';
import ContentHolder from './components/ContentHolder';
import StudentView from './components/StudentView.js';
import PublicContent from './components/PublicContent';
import logo from './logo.svg';
import './App.css';


// changed logged in to student view in this ternary
class App extends Component {
  render() {
    const logged_in = this.props.logged_in.logged_in;
    const is_admin = () => {
      if (this.props.logged_in.user_type === "admin") {
        console.log('admin logged')
        return true;
      } else {
        console.log('student logged')
        return false
      }
    }
    const user_type = this.props.logged_in.user_type;
    console.log(this.props, 'this is props in app component')
    console.log(this.props.logged_in.logged_in, 'this should be true')
    console.log(this.props.logged_in.user_type)
    return (
      <div className="App">
        <Navbar />
          { logged_in ?
            <div>{ is_admin() ? <ContentHolder /> : <StudentView />}</div>
            : <PublicContent />
          }

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    logged_in: state.logged_in,
    user_type: state.user_type
  }
}

export default connect(mapStateToProps)(App);
