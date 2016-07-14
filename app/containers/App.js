'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {connect} from 'react-redux';

import Navigation from './Navigation';
import UserSharedArticleList from '../components/UserSharedArticleList';

class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          translucent={true}
          backgroundColor="rgba(0, 0, 0, 0)"
          barStyle="light-content"
        />
        <Navigation />
      </View>
    );
  }
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
  },
})

export default App;