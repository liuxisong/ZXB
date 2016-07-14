'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import Swiper from 'react-native-swiper';

const { height, width } = Dimensions.get('window');


class SwiperCard extends Component {
  constructor(props) {
    super(props);
    let adHeight = height / 4;
    this.adHeight = adHeight < 150 ? 150 : adHeight > 180 ? 180 : adHeight;
  }

  render() {
    const segments = this.props.cards.map(
      (item, index) => (
        <TouchableOpacity 
          key={index}
          activeOpacity={1} 
          onPress={() => this.props.onPress(item)}>
          <View>
            <Image
              style={{height: this.adHeight}}
              source={{uri: item.imgUrl}}/>
          </View>
        </TouchableOpacity>
      )
    );
    return (
      <View>
        <Swiper
          loop
          autoplay
          dot={<View style={styles.dot} />}
          activeDot={<View style={styles.activeDot} />}
          paginationStyle={{
            bottom: 10,
          }}
          height={this.adHeight}>
          {segments}
        </Swiper>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  slide: {
    flex: 0.2,
    backgroundColor: 'transparent'
  },
  image: {
    flex: 1,
  },
  dot: {
    backgroundColor: 'rgba(255,255,255,.3)', 
    width: 13, 
    height: 13,
    borderRadius: 7, 
    marginLeft: 7, 
    marginRight: 7
  },
  activeDot: {
    backgroundColor: '#fff', 
    width: 13, 
    height: 13, 
    borderRadius: 7, 
    marginLeft: 7, 
    marginRight: 7
  },
  showBorder: {
    borderWidth: 2,
    borderColor: 'red',
    flex: 1
  },
});


export default SwiperCard;