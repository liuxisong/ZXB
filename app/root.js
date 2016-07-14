'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers';

import App from './containers/App';

const store = createStore(reducers);

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default Root;