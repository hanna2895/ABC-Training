// STUFF PRELOADED BY NPM
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
//
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

// STUFF FROM TUTORIAL
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux/src';
import configureStore from './store/configureStore';
// import components
// import './styles/index.css';

const store = configureStore();

render (
  <Provider store={store}>
    <h1>Hi this is connected</h1>
  </Provider>,
  document.getElementById('app')
);
