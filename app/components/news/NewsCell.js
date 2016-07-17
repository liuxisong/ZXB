'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

class NewsCell extends Component {
  render() {
    console.log('NewsCell');
    return (
      <View style={{flex: 1, backgroundColor: 'green'}}>
        <Text style={{color: 'red'}}>Cell</Text>
        {/*<Text>{this.props.news.content}</Text>*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({

});


export default NewsCell;