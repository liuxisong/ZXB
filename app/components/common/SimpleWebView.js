'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  WebView,
  InteractionManager
} from 'react-native';


class SimpleWebView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Loading>
          <WebView
            style={styles.webview}
            source={{uri: this.props.uri}}
            automaticallyAdjustContentInsets
            // startInLoadingState
            scalesPageToFit={true}
          />
        </Loading>
      </View>
    );
  }
}

class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {loaded: false};
  }

  componentDidMount() {
    InteractionManager.runAfterInteractions(
      () => this.setState({
        loaded: true
      })
    );
  }

  render() {
    if (this.state.loaded) {
      return React.Children.only(this.props.children);
    }
    return null;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'rgba(255,255,255,0.8)'
    marginTop: 10
  },
  webview: {
    flex: 1,
  }
});


export default SimpleWebView;