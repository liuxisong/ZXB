'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableHighlight
} from 'react-native';

class CardCell extends Component {
  render() {
    return (
      <TouchableHighlight 
        underlayColor='rgba(0, 0, 0, 0.1)'
        onPress={() => console.log('click cardCell')}>
        <View style={[styles.container]}>
          <Image 
              source={{uri: 'http://ww3.sinaimg.cn/orj480/5f00b57fgw1f5rc970opcj20f70m879q.jpg'}}
              style={styles.img}/>
          <View style={styles.text}>
            <Text>
              领悟22年VC生涯真谛, 57岁章苏阳追梦"火山石"
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'rgba(193, 205, 204, 0.2)',
    paddingBottom: 5,
    // justifyContent: 'flex-start'
    // paddingTop: 5
  },
  img: {
    height: 180,
    marginLeft: -1,
    marginRight: -1
  },
  text: {
    backgroundColor: 'rgba(245, 252, 255, 0.2)',
    marginBottom: 5,
    marginTop: 5
  },

});


export default CardCell;