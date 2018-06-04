import React from 'react';
import LoginForm from './LoginForm';
import Background from '../background-2.jpg';


const PublicContent = ({ showLoginForm }) => {
  return (
    <div className="homepage">
      <div style={style} className="image"/>
      <div className="home-text"> Connecting you with the people who matter. </div>
      { showLoginForm ? <LoginForm /> : null}
    </div>
  )
}

export default PublicContent;

const style = {
  backgroundImage: `url(${ Background } )`
}
