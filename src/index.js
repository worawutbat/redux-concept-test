import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { cal } from './Reducers'


ReactDOM.render(
    <Provider store = {createStore(cal)}>
      <App />
    </Provider>
  , document.getElementById('root'));

