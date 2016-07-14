'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Navigator,
  Platform,
  ListView,
} from 'react-native';

import connectComponent from '../utils/connectComponent';
import Router from '../configs/Router';
import * as TabsViewComponent from './TabsView'; 

const initialRoute = {
  name: 'tabsView',
  index: 0,
  component: connectComponent(TabsViewComponent),
  id: 0
}

class Navigation extends Component {
  constructor(props) {
    super(props);
  }

  /*
    配置Navigator渲染的动画
  */
  configureScene(route, routeStack) {
    if (Platform.OS === 'android') {
      return Navigator.SceneConfigs.FloatFromBottomAndroid;
    }
    if (route.type === 'Modal') {
      return Navigator.SceneConfigs.FloatFromBottom;
    }
    return Navigator.SceneConfigs.FloatFromRight;
  }

  renderScene(route, navigator) {
    const {component, name, props, id, index} = route;
    this.router = this.router || new Router(navigator);
    if (component) {
      return React.createElement(component, {
        ...props,
        ref: view => this[index] = view,
        router: this.router,
        route: {
          name,
          id,
          index
        }
      });
     }
  }

  render() {
    return (
      <Navigator 
        ref="Navigation"
        style={styles.container}
        configureScene={this.configureScene}
        initialRoute={initialRoute}
        renderScene={this.renderScene.bind(this)}
      />
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});


export default Navigation;