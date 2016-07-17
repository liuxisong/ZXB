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
      title: 'title_04',
      time: 'time_04',
      content: 'content_04',
    });    
    this.setState({
      ds: ds.cloneWithRows(data),
    });
  }

  renderRow(news) {
    console.log(`news: ${JSON.stringify(news)}`);
   /* return (
      <View style={{flex: 1, backgroundColor: 'blue'}}>
        <NewsCell
          news={news}
          onPress={(news) => {
            console.log('click a news');
          }}/>
      </View>
    );*/
    return (
      <View>
        <Text style={{color: 'red'}}>text</Text>
      </View>
    );
  }

  onRefresh() {
    console.log('onRefresh');
  }

  render() {
   /* return (
      <ListView 
        // ref={}
        showsVerticalScrollIndicator
        removeClippedSubviews
        enabledEmptySections
        initialListSize={3}
        pagingEnabled={false}
        scrollRenderAheadDistance={90}
        dataSource={this.state.ds}
        renderRow={this.renderRow.bind(this)}
        onEndReachedThreshold={30}
        // onEndReached={this.onEndReached.bind(this)}
        // renderFooter={this.renderFooter.bind(this)}
        refreshControl={
          <RefreshControl 
            refreshing={true}
            onRefresh={() => console.log('onRefresh')}
            {...refreshControl}/>
        }/>
    );*/
    return (
      <View style={{alignSelf: 'center'}}>
        <Text style={{color: 'red'}}>{this.props.tab}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
});


export default NewsList;