'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Image,
  Text
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

class UserHeaderCell extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageWrapper}>
          <Image 
            source={{uri: 'http://tva4.sinaimg.cn/crop.0.0.179.179.50/6798a1ddtw1eersf1tkvnj2050050t8o.jpg'}}
            style={styles.headerImg}/>
        </View>
        <View style={[styles.userName]}>
          <Text>互联网分析师</Text>
          <Text style={styles.time}>7小时前</Text>
        </View>
        <View style={styles.follow}>
          <Icon.Button 
            name="ios-add" iconStyle={{marginRight: 2}} 
            size={20} backgroundColor="#3b5998">
            关注
          </Icon.Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    height: 40, 
    // borderWidth: 1,
    // borderColor: 'red',
  },
  imageWrapper: {
    // position: 'absolute',
    height: 40,
    width: 60,
  },
  headerImg: {
    height: 40,
    width: 40,
    borderRadius: 20
  },
  follow: {
    justifyContent: 'center',
    marginRight: 10,
    height: 18
  },
  userName: {
    position: 'absolute',
    left: 45,
    top: 1
  },
  time: {
    fontSize: 10,
    color: 'rgba(0, 0, 0, 0.5)'
  },
  showBorder: {
    borderWidth: 1,
    borderColor: 'green'
  }
});


export default UserHeaderCell;