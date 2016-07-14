'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  ListView
} from 'react-native';

import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import connectComponent from '../utils/connectComponent';
import * as AdSwiperCardComponent from './BasicAdSwiperCard';
import SimpleWebView from '../components/common/SimpleWebView';
import TopicNavigation from '../components/TopicNavigation';
import actions from '../actions';
import UserSharedArticleList from '../components/UserSharedArticleList';

const BasicAdSwiperCard = connectComponent(AdSwiperCardComponent);

class Discover extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // debugger;
    this.props.actions.getIndexAdCards();
  }

  render() {
    let items = [];
    for (let i = 0; i < 100; i++ ) {
      items.push(<View><Text style={{color: 'red'}}>items-i</Text></View>);
    }
    return (
      <View style={styles.container}>
        {/*<BasicAdSwiperCard />
        <TopicNavigation navItemWidth={80} navContents={[1,2,3,4,5]}/>*/}
        <UserSharedArticleList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  webview: {
    flex: 1,
    marginLeft: 5,
    marginRight: 5
  }
});

/*function mapDispatchToProps(dispatch) {
  let actionsCreator = bindActionCreators(actions, dispatch)
  return {actions: actionsCreator}
}

export default connect(mapDispatchToProps)(Discover);*/
export const LayoutComponent = Discover;
