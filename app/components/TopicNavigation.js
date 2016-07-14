'use strict';

import React, { Component, PropTypes } from 'react';

import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const {deviceHeight, deviceWidth} = Dimensions.get('window');

class TopicNavigation extends Component {
  static propTypes = {
    navItemWidth: PropTypes.number.required,
    navContents: PropTypes.array 
  }

  static defaultProps = {
    navContents: [],
    navItemWidth: 80
  }

  constructor(props) {
    super(props);
  }

  renderNavs() {
    return this.props.navContents.map((item, index) => {
      return (
        <TouchableOpacity 
          key={index}
          activeOpacity={0.8} 
          onPress={() => this.props.router.toTopicList(this.props)}
        >
          <View style={styles.container}>
            <Image 
              source={require('../images/103.jpg')} 
              style={styles.backGroundImage} />
          </View>
        </TouchableOpacity>
      );  
    });
  }

  render() {
    return (
      <View>
        <ScrollView
          horizontal
          directionalLockEnabled
          alwaysBounceHorizontal={false}
          showsHorizontalScrollIndicator={false}
          ref={view => this.scrollView = view}
          keyboardDismissMode="on-drag"
          >
          {this.renderNavs()}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
  backGroundImage: {
    height: 40,
    width: 100,
    borderRadius: 7,
  }
});


export default TopicNavigation;