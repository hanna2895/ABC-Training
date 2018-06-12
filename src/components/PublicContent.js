import React from 'react';
import LoginForm from './LoginForm';
import Background from '../background-2.jpg';
import Img2 from '../img2.jpg';
import ceo from '../Hanna/CEO.jpg';
import vpProduct from '../Hanna/vp-product.jpg';
import frontEnd from '../Hanna/front-end.jpg';
import backEnd from '../Hanna/back-end.jpg';


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
          <div className="team-holder">
            <div>
              <div style={CEO} className="team-image"></div>
              <h4>Hannah Werman <br/> CEO</h4>
            </div>
            <div>
              <div style={vp} className="team-image"></div>
              <h4>Hannah Werman <br/> VP of Product</h4>
            </div>
            <div>
              <div style={front} className="team-image"></div>
              <h4>Hannah Werman <br/> Front End Developer</h4>
            </div>
            <div>
              <div style={back} className="team-image"></div>
              <h4>Hannah Werman <br/> Back End Developer</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="holder">
        <div className="color-block-2">
          <h1> News </h1>
          <div style={placeholder} className="news"/>
          <h4> Generic headline: we did a thing.</h4>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse sed nisi lacus sed viverra. Pharetra massa massa ultricies mi quis hendrerit. Pulvinar etiam non quam lacus. <a>(More...)</a></p>
          <a href="#"> MORE ARTICLES </a>
        </div>
        <div className="color-block-2 purple">
          <h1> Contact Us </h1>
          <div style={placeholder2} className="news"/>
          <p className="emphasis"> ABC TRAINING HEADQUARTERS </p>
          <p> 16 School St. - Chicago, IL </p>

          <p className="emphasis"> GET IN TOUCH </p>
          <p> hi@abctraining.com </p>
        </div>
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

const CEO = {
  backgroundImage: `url(${ ceo })`
}

const vp = {
  backgroundImage: `url(${ vpProduct })`
}

const front = {
  backgroundImage: `url(${ frontEnd })`
}

const back = {
  backgroundImage: `url(${ backEnd })`
}

const placeholder = {
  backgroundImage: `url(https://picsum.photos/500/300/?image=1076)`
}

const placeholder2 = {
  backgroundImage: `url(https://picsum.photos/500/300/?image=1078)`
}
