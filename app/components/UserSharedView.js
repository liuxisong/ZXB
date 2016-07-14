'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';

import UserHeaderCell from './UserHeaderCell';
import CardCell from './CardCell';

class UserSharedView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <UserHeaderCell />
        <Text style={styles.userCommentText}>
          【领悟22年VC生涯真谛, 57岁章苏阳追梦"火山石"】
          1) 淡然看待成就，是别人给机会；
          2) 我只会做VC，必须跟年轻人在一起；
          3) 互联网不断发展的核心是人对心行为的追求；
          4) 持续长时间厚道的人，短期不见得能得到好处，但是长期一定会得到好处。
        </Text>
        <CardCell />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    paddingRight: 10,
    paddingBottom: 20,
    paddingLeft: 10,
    borderTopColor: 'rgba(255,255,255,0.1)',
    borderBottomColor: 'rgba(255,255,255,0.1)',
    borderBottomWidth: 1,
    borderTopWidth: 1, 
    marginTop: 15,
    // borderColor: 'red'
  },
  userCommentText: {
    marginTop: 10,
    marginBottom: 5
  }
});


export default UserSharedView;