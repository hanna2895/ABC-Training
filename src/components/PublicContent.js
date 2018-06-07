import React from 'react';
import LoginForm from './LoginForm';
import Background from '../background-2.jpg';
import Img2 from '../img2.jpg';


const PublicContent = ({ showLoginForm }) => {
  return (
    <div className="home-holder">
      <div className="homepage">
        <div style={style} className="image"/>
        <div className="home-text"> Connecting you with the people who matter. </div>
        { showLoginForm ? <LoginForm /> : null}
      </div>
      <div className="holder">
        <div className="color-block">
          <h1> Core </h1>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt, orci sed faucibus congue, lectus massa consequat lacus, suscipit consectetur ligula risus nec ipsum. Proin ac accumsan turpis, eu aliquet urna. Mauris ut auctor diam.</p>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt, orci sed faucibus congue, lectus massa consequat lacus, suscipit consectetur ligula risus nec ipsum. Proin ac accumsan turpis, eu aliquet urna. Mauris ut auctor diam.</p>
        </div>
        <div style={imgStyle} className="small-image"/>
      </div>
      <div className="holder">
        <div className="color-block wide">
          <h1> Our Team </h1>
        </div>
      </div>
      <div>
        <h1> News </h1>
      </div>
      <div>
        <h1> Contact Us </h1>
      </div>
    </div>
  )
}

export default PublicContent;

const style = {
  backgroundImage: `url(${ Background } )`
}

const imgStyle = {
  backgroundImage: `url(${ Img2 })`
}
