// change require to es6 import style
// import $ from 'jquery';
// import './style.scss';

// let num = 0;

// setInterval(() => { $('#main').html(`Youve been on this page for ${num} seconds.`); num += 1; }, 1000);
// // const $ = require('jquery');

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { ActionTypes } from './actions/index';
import reducers from './reducers';
import App from './components/app';

// this creates the store with the reducers, and does some other stuff to initialize devtools
// boilerplate to copy, don't have to know
const store = createStore(reducers, {}, compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
));
const token = localStorage.getItem('token');
const userID = localStorage.getItem('userId');

// localStorage.removeItem('token');
if (token && userID) {
  store.dispatch({ type: ActionTypes.AUTH_USER, payload: userID });
}
// we now wrap App in a Provider
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('main'),
);
