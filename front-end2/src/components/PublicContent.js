import React from 'react';
import LoginForm from './LoginForm';
import Background from '../background.jpg';


const PublicContent = ({ showLoginForm }) => {
  return (
    <div>
      <div style={style} className="image"/>
      { showLoginForm ? <LoginForm /> : null}
    </div>
  )
}

export default PublicContent;

const style = {
  backgroundImage: `url(${ Background } )`
}
