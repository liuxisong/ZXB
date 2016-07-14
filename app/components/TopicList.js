'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

class TopicList extends Component {
  constructor(props) {
    super(props);
  
    this.state = {};
  }
  
  render() {
    return (
      <View>
        <Text>This is TopicList</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});


export const LayoutComponent = TopicList;
