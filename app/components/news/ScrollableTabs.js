'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Demensions,
  Text,
  Animated,
  ScrollView,
  TouchableOpacity,
  ViewPagerAndroid,
  Platform,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

//const {height, width} = Dimensions.get('window');

class ScrollableTabs extends Component {
  constructor(props) {
    super(props);
    this.tabSpace = 20;
    this.activeTabIndex = props.initialPage || 0;
    this.pageChanged = false;
    this.tabs = [];
    this.state = {
      x: new Animated.Value(0)
    };
    this.state.x.addListener((e) => {
      // console.log(`x.addListener: ${e.value}`);
    });
  }

  renderChildren() {
    return this.props.children.map((pageContent, index) => {
      return (
        <View key={'pageScrollView_' + index}>
          {pageContent}
        </View>
      );
    });
  }

  onPageSelected() {
    console.log('conPageSelected.....');
  }

  animateScroll(x) {
    const tabContentOffset = 10 * x;
    Animated.event(
      [{
        offset: this.state.x
      }]
    )({
      offset: -tabContentOffset
    });
    this.scrollView.scrollTo({
      x: x,
      y: 0,
      animated: true
    });
  }

  changeTabProps(index, opacity) {
    console.log(`changeTabProps: ${this.tabs[index].refs}`);
   /* this.tabs[index].setNativeProps({
      style: {
        borderBottomWidth: 2,
        borderBottomColor: `rgba(255,0,0,${opacity})`
      }
    });
    this.refs[`tabIndex_${index}`].setNativeProps({
      style: {
        color: `rgba(255,0,0,${opacity})`
      }
    });*/
  }

  scrollUnderline(offset) {
    console.log(`scrollUnderline offset: ${offset}`);
    this.refs['underline'].setNativeProps({
      style: {
        left: offset
      }
    });
  }

  onPageScroll(e) {
    const {offset, position} = e.nativeEvent;
    console.log(`invoke onPageScroll, offset: ${offset}, position: ${position}`);
    let x = offset * 18;
    // this.animateScroll(x);
    let scrollToL = this.activeTabIndex > position && offset > 0;
    let scrollToR = !scrollToL && offset > 0;
    let oldLength = 20 + (40 * (this.activeTabIndex)) 
                    + (this.tabSpace * this.activeTabIndex);
    if (scrollToL) {
      // console.log(`scrollToL: offset: ${offset}, position: ${position}, activeIndex: ${this.activeTabIndex}`);
      let newLength = 20 + (40 * (this.activeTabIndex - 1))
                      + (this.tabSpace * (this.activeTabIndex - 1));
      let scrollOffset = (oldLength - newLength) * (1 - offset);
      console.log(`oldLength: ${oldLength}, newLength: ${newLength}, scrollOffset: ${scrollOffset}, activeIndex: ${this.activeTabIndex}`);
      this.changeTabProps(this.activeTabIndex, offset);
      this.changeTabProps(this.activeTabIndex - 1, 1 - offset);
      this.scrollUnderline(oldLength - scrollOffset);
    }
    else if (scrollToR) {
      // console.log(`scrollToR: offset: ${offset}, position: ${position}, activeIndex: ${this.activeTabIndex}`);
      let newLength = 20 + (40 * (this.activeTabIndex + 1))
                      + (this.tabSpace * (this.activeTabIndex + 1));
      let scrollOffset = (oldLength - newLength) * offset;
      console.log(`oldLength: ${oldLength}, newLength: ${newLength}, scrollOffset: ${scrollOffset}, activeIndex: ${this.activeTabIndex}`);
      this.changeTabProps(this.activeTabIndex, 1 - offset);
      this.changeTabProps(this.activeTabIndex + 1, offset);
      this.scrollUnderline(oldLength - scrollOffset);
    }
    else {
      this.activeTabIndex = position;
      console.log(`pageChanged: offset: ${offset}, position: ${position}, activeIndex: ${this.activeTabIndex}`);
    }
  }

  onPageSelected(position) {
    console.log( `onPageSelected: ${position}`);
    this.pageChanged = true;
  }

  renderPageScroll() {
    return (
      <ViewPagerAndroid
        ref={view => this.viewPager = view}
        style={styles.viewPager}
        initialPage={this.activeTabIndex}
        onPageSelected={this.onPageSelected.bind(this)}
        onPageScroll={this.onPageScroll.bind(this)}>
        {this.renderChildren()}
      </ViewPagerAndroid>
    );
  }

  getActiveTabStyle(opacity) {
    return {
      // borderBottomWidth: 2,
      // borderBottomColor: 'red'
    }
  }

  renderNav() {
    return this.props.tabs.map((item, index) => {
      let activeTabStyle = undefined;
      if (index === this.activeTabIndex) {
        activeTabStyle = this.getActiveTabStyle(1);
      }
      return (
        <TouchableOpacity 
          onPress={() => this.viewPager.setPageWithoutAnimation(index)}
          activeOpacity={1}>
          <View
            ref={view => this.tabs[index] = view}
            key={index}
            style={[styles.navItem, {marginLeft: this.tabSpace}, activeTabStyle]}>
            <Text ref={`tabIndex_${index}`} style={{fontSize: 16}}>{item}</Text>
          </View>
        </TouchableOpacity>
      );
    });
  }

  render() {
    return (
      <View style={styles.container} ref={"scrollableTab"}>
        <View style={{height: 30}}>
          <ScrollView
            ref={view => this.scrollView = view}
            horizontal
            directionalLockEnabled
            alwaysBounceHorizontal={false}
            showsHorizontalScrollIndicator={false}
            // scrollEventThrottle={16}
            // contentContainerStyle={styles.navItem}
            >
            {this.renderNav()}
          </ScrollView>
          <View ref={'underline'} style={{left: this.tabSpace, width: 40, borderBottomWidth: 2, borderBottomColor: 'red'}} />
        </View>
        {this.renderPageScroll()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navItem: {
    // flexDirection: 'row',
    // justifyContent: 'space-around',
    // paddingHorizontal: this.tabSpace,
    // paddingLeft: 20,
    // borderWidth: 1,
    // borderColor: 'red',
    // marginLeft: 40,
  },
  viewPager: {
    flex: 1
  },
  pageStyle: {
    alignItems: 'center',
    padding: 20,
    flex: 1,
  },
});


export default ScrollableTabs;