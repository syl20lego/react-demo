import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/ConfigureStore';

import HomePage from './home/HomePage';
import './App.css';

const store = configureStore();

export default (props) => {
  return (
        <Provider store={store}>
          <HomePage/>
        </Provider>
  );
};

