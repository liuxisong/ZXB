'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  RefreshControl,
  ListView
} from 'react-native';
                             
import PureRenderMixin from 'react-addons-pure-render-mixin';

import NewsCell from './NewsCell';
import {refreshControl} from '../../constants/commonComponentProps';

const data1 = [
  {
    title: '政府负责打仗，民众负责打酱油',
    imgUrl: 'http://ww4.sinaimg.cn/crop.0.0.402.225.1000.562/77101dc1gw1f5z0fr3manj20b606at93.jpg',
    time: 'time_01',
    content: 'content_01',
    commentCount: 1700,
    readCount: 5000
  },
  {
    title: '这群“荣民”曾建设了台湾，如今却被台湾年轻人辱骂',
    imgUrl: 'http://ww2.sinaimg.cn/wap720/77101dc1jw1f5yxr8qlesj21bc0qon5z.jpg',
    time: 'time_01',
    content: 'content_01',
    commentCount: 1700,
    readCount: 5000
  },
  {
    title: 'Day 22. 一个微笑灿烂一座城',
    imgUrl: 'http://ww4.sinaimg.cn/crop.0.0.1024.575.1000.562/5464ac13gw1f5yhxe3mgoj20sg0xk79x.jpg',
    time: 'time_01',
    content: 'content_01',
    commentCount: 1700,
    readCount: 5000
  },
  {
    title: '藏传佛教的活佛等级',
    imgUrl: 'http://ww1.sinaimg.cn/crop.0.106.1000.562.1000.562/a68d6077jw1f5yi9bwicdj20rs0kudk7.jpg',
    time: 'time_01',
    content: 'content_01',
    commentCount: 1700,
    readCount: 5000
  },
  {
    title: '蔡英文获悉后表达关切 指示行政院了解详细情形',
    imgUrl: 'http://ww3.sinaimg.cn/bmiddle/68111b37jw1evp6gwzdxuj20fh0k20td.jpg',
    time: 'time_01',
    content: 'content_01',
    commentCount: 1700,
    readCount: 5000
  }
];

class NewsList extends Component {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
    this.state = {
      ds: ds.cloneWithRows(data1)
    };
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  onEndReached() {
    var data = data1.push({
      title: '母亲老了 这些话就别再说了',
      imgUrl: 'http://ww3.sinaimg.cn/crop.0.51.618.347.1000.562/7b518976jw1f5xuaxlljcj20h60fimz0.jpg',
      time: 'time_01',
      content: 'content_01',
      commentCount: 1700,
      readCount: 5000
    });    
    this.setState({
      ds: this.state.ds.cloneWithRows(data1),
    });
  }

  renderRow(news) {
    return (
      <View style={{paddingTop: 5, paddingBottom: 5, borderBottomWidth: 0.5, borderBottomColor: 'rgba(255,255,255,0.1)'}}>
        <NewsCell
          news={news}
          onPress={(news) => {
            console.log('click a news');
          }}/>
      </View>
    );
  }

  onRefresh() {
    console.log('onRefresh');
  }

  render() {
    return (
      <ListView 
        // ref={}
        showsVerticalScrollIndicator
        removeClippedSubviews
        enabledEmptySections
        initialListSize={5}
        pagingEnabled={false}
        scrollRenderAheadDistance={90}
        dataSource={this.state.ds}
        renderRow={this.renderRow.bind(this)}
        onEndReachedThreshold={60}
        onEndReached={this.onEndReached.bind(this)}
        // renderFooter={this.renderFooter.bind(this)}
        refreshControl={
          <RefreshControl 
            refreshing={false}
            onRefresh={() => console.log('onRefresh')}
            {...refreshControl}/>
        }/>
    );
  }
}

const styles = StyleSheet.create({
  
});


export default NewsList;