'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native';
import Swiper from 'react-native-swiper';

//import CategoryNavigation from 'CategoryNavigation';

class SwiperView extends Component {
  render() {
    return (
      <View>
        <View style={styles.showBorder}>
          <Image style={styles.image} source={{uri: 'http://i.imgur.com/rVekwfn.jpg'}}>
            <Swiper style={styles.wrapper}
              dot={<View style={{backgroundColor:'rgba(255,255,255,.3)', width: 13, height: 13,borderRadius: 7, marginLeft: 7, marginRight: 7,}} />}
              activeDot={<View style={{backgroundColor: '#fff', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
              paginationStyle={{
                bottom: 10,
              }}
              loop={true}
              autoplay={true}
              height={180}>
              <View style={styles.slide}>
                <Image style={styles.image} source={{uri: 'http://i.imgur.com/PYL230Q.jpg'}} />
              </View>
              <View style={styles.slide}>
                <Image style={styles.image} source={{uri: 'http://i.imgur.com/SYXiRSj.jpg'}} />
              </View>
              <View style={styles.slide}>
                <Image style={styles.image} source={{uri: 'https://img.alicdn.com/imgextra/i3/2230968631/TB2bgVXrVXXXXbRXXXXXXXXXXXX_!!2230968631.jpg_430x430q90.jpg'}} />
              </View>
            </Swiper>
          </Image>
        </View>
        <View style={styles.showBorder}>
          <Text style={styles.text}>this is a test</Text>
        </View>
        <CategoryNavigation />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  base: {
    width: 380,
    height: 280,
  },
  showBorder: {
    borderWidth: 2,
    borderColor: 'red',
    flex: 1,
  },
  wrapper: {
    backgroundColor: '#f00',
  },
  slide: {
    flex: 0.2,
    backgroundColor: 'transparent',
  },
  image: {
    flex: 1,
  },
  text: {
    color: 'red',
  }
});


export default SwiperView;