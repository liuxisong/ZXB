'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import SwiperView from '../SwiperView';

class AdCardView extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      show: true
    };
  }

  componentDidMount() {
    /*setTimeout(
      () => this.setState({show: false,}),
      2000
    );*/
  }

  render() {
    if (this.state.show) {
      return (
        <SwiperView />
      );
    }
    return <Text style={{color:'green'}}>Replace Text</Text>;
  }
}

const styles = StyleSheet.create({

});


export default AdCardView;