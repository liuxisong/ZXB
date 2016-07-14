'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  ListView,
  RecyclerViewBackedScrollView
} from 'react-native';

import connectComponent from '../utils/connectComponent';
import * as AdSwiperCardComponent from '../containers/BasicAdSwiperCard';
// import SimpleWebView from '../components/common/SimpleWebView';
import TopicNavigation from './TopicNavigation';
import UserSharedView from '../components/UserSharedView';

const BasicAdSwiperCard = connectComponent(AdSwiperCardComponent);

class UserSharedArticleList extends Component {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      ds: ds.cloneWithRows([1,2,3,4,5,6,7,8,9,10])
    };
  }

  renderRow(data) {
    return (
      <View>
        <UserSharedView />
      </View>
    );
  }

  onEndReached() {
    console.log('invoke onEndReached');
    let ids = [];
    for (let i = 1; i < 100; i++) {
      ids.push(i);
    }
    this.setState({
      ds: this.state.ds.cloneWithRows(ids)
    });
  }

  renderHeader() {
    console.log('renderHeader');
    return (
      <View>
        <BasicAdSwiperCard />
        <TopicNavigation navItemWidth={80} navContents={[1,2,3,4,5]}/>
      </View>
    );
  }

  render() {
    /*let refreshControl = () => (<RefreshControl
              ref={(view)=> this.refreshControl=view}
              refreshing={pullRefreshPending}
              onRefresh={()=>{
                actions.updateTopicsByTab(tab);
              }} />);*/
    return (
      <ListView 
        showsVerticalScrollIndicator
        removeClippedSubviews
        enableEmptySections
        ref={view => {this._listView = view}}
        initialListSize={5}
        pagingEnabled={false}
        scrollRenderAheadDistance={150}
        dataSource={this.state.ds}
        renderRow={this.renderRow.bind(this)}
        onEndReachedThreshold={300}
        onEndReached={this.onEndReached.bind(this)}
        renderScrollComponent={props => <RecyclerViewBackedScrollView {...props}/>}
        renderHeader={this.renderHeader}
        // refreshControl={refreshControl}
      />
    );
  }
}

const styles = StyleSheet.create({

});


export default UserSharedArticleList;