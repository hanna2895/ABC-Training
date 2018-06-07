import React, { Component } from 'react';
import { connect } from 'react-redux'
import Navbar from './components/Navbar';
import ContentHolder from './components/ContentHolder';
import PublicContent from './components/PublicContent';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';


// changed logged in to student view in this ternary
class App extends Component {
  constructor() {
    super();
    this.state = {
      showLoginForm: false
    }
  }

  toggleLoginForm = () => {
    this.setState({
      showLoginForm: !this.state.showLoginForm
    })
  }
  render() {
    const logged_in = this.props.logged_in.logged_in;

    return (
      <MuiThemeProvider>
      <div className="App">
        <Navbar toggleLoginForm={this.toggleLoginForm} />
          { logged_in ?
            <ContentHolder />
            : <PublicContent showLoginForm={this.state.showLoginForm}/>
          }

      </div>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    logged_in: state.logged_in
  }
}

export default connect(mapStateToProps)(App);
