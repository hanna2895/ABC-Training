import React, { Component } from 'react';
import { connect } from 'react-redux'
import Navbar from './components/Navbar';
import ContentHolder from './components/ContentHolder';
import PublicContent from './components/PublicContent';
import logo from './logo.svg';
import './App.css';


// changed logged in to student view in this ternary
class App extends Component {
  render() {
    const logged_in = this.props.logged_in.logged_in;
    const is_admin = () => {
      if (this.props.logged_in.user_type === "admin") {
        return true;
      } else {
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
            <ContentHolder />
            : <PublicContent />
          }

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    logged_in: state.logged_in
  }
}

export default connect(mapStateToProps)(App);
