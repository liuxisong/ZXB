'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  WebView,
} from 'react-native';

import SwiperCard from '../components/ad/SwiperCard';

class BasicAdSwiperCard extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      updating: props.data
    }
  }

  forward(item) {
    this.props.router.toWebView(item);
  }

  render() {
    // console.log(`BasicAdSwiperCard: ${JSON.stringify(this.props)}`);
    return (
      <SwiperCard 
        cards={this.props.data}
        onPress={this.forward.bind(this)}/>
    );
  }
}

const styles = StyleSheet.create({

});


export const LayoutComponent = BasicAdSwiperCard;

export function mapStateToProps(state, props) {
  return {
    data: state.adCard.ads || []
  }
}

