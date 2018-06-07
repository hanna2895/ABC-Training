import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk'
import initialState from '../reducers/initialState';

// export default function configureStore() {
//   return createStore(
//     rootReducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//     applyMiddleware(thunk)
//   );
// }

const enhancers = []

const middleware = [
  thunk
];


if(process.env.NODE_ENV === 'development'){
    enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
};

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);


const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
)

export default store;
