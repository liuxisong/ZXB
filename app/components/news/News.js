'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  ViewPagerAndroid,
  ScrollView,
  TouchableOpacity,
  ListView
} from 'react-native';

import ScrollableTabs from './ScrollableTabs';
import NewsList from './NewsList';

const data1 = [
  {
    title: 'title_01',
    time: 'time_01',
    content: 'content_01',
  },
  {
    title: 'title_02',
    time: 'time_02',
    content: 'content_02',
  },
  {
    title: 'title_03',
    time: 'time_03',
    content: 'content_03',
  }
];

class News extends Component {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
    this.state = {
      ds: ds.cloneWithRows(data1)
    };
  }

  onPageChanged() {
    console.log('event: pageChanged on newsList');
  }

  renderNewsList() {
    return ['good', 'ask', 'all', 'share', 'job'].map((item) => {
      return (
        <NewsList
          router={this.props.router}
          key={item}
          tab={item}/>
      );
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollableTabs tabs={['头条','娱乐','深圳','体育','游戏','游戏','游戏','游戏']}
          initialPage={0}>
          {this.renderNewsList()}
        </ScrollableTabs>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'transparent'
    backgroundColor: 'white',
    top: 20,
    flex: 1
  }
});


export default News;