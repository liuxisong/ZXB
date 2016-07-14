'use strict';

import {
  StyleSheet,
  View,
  Platform,
  BackAndroid,
  Navigator,
  WebView,
  Text
} from 'react-native';

import _ from 'lodash';
import connectComponent from '../utils/connectComponent';

import Login from '../components/Login';
import * as TopicList from '../components/TopicList';
import * as SimpleWebView from '../components/common/SimpleWebView';

class Router {
  constructor(navigator) {
    this.navigator = navigator;
    if (Platform.OS === 'android') {
      BackAndroid.addEventListener('hardwareBackPress', () => {
        let routeList = this.navigator.getCurrentRoutes();
        let currentRoute = routeList[routeList.length - 1];
        if (currentRoute !== 'home') {
          navigator.pop();
          return true;
        }
        return false;
      });
    }
  }

  push(props = {}, route) {
    debugger;
    let routeList = this.navigator.getCurrentRoutes();
    let nextIndex = routeList.length - 1;
    route.props = props;
    route.index = nextIndex;
    route.sceneConfig = route.sceneConfig ? route.sceneConfig : Navigator.SceneConfigs.FloatFromRight;
    route.id = _.uniqueId();
    route.component = connectComponent(route.component);
    this.navigator.push(route);
  }

  pop() {
    this.navigator.pop();
  }

  toLogin(props) {
    this.push(props, {
      component: Login,
      name: 'login',
    });
  }

  toTopicList(props) {
    console.log('toTopicList');
    this.push(props, {
      component: TopicList,
      name: 'topicList'
    });
  }

  toWebView(props) {
    this.push(props, {
      component: SimpleWebView,
      name: 'webView',
    });
  }



}


export default Router;