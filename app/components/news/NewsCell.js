'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  PixelRatio
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const {height, width, fontScale} = Dimensions.get('window');
const px = PixelRatio.getPixelSizeForLayoutSize(16);

class NewsCell extends Component {
  constructor(props) {
    super(props);
    this.imgHeight = height / 8;
    this.imgWidth = width / 3;
    this.state = {};
  }



  render() {
    console.log(`window info: height:${height}, width: ${width}, 
            fontScale:${fontScale}, px:${px}`);
    return (
      <View style={styles.container}>
        <Image 
          source={{uri: this.props.news.imgUrl}}
          style={{height: this.imgHeight, width: this.imgWidth}}/>
        <View style={[{flexDirection: 'column', flex: 1, marginLeft: 5}]}>
          <Text numberOfLines={2} style={styles.titleText}>
            {this.props.news.title}
          </Text>
          <View style={[{flexDirection: 'row',flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end', marginRight: 5}]}>
            <Text style={{fontSize: 10, marginRight: 2}}>
              {this.props.news.commentCount}
            </Text>
            <Icon name="ios-paper-outline" />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
  },
  titleText: {
    fontSize: 16
  }
});


export default NewsCell;