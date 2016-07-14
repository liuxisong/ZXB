'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';


import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/Ionicons';

import connectComponent from '../utils/connectComponent';
import * as DiscoverComponent from './Discover';

const Discover = connectComponent(DiscoverComponent);

class TabsView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'discover'
    };
  }

  render() {
    let renderIcon = (name) => (<Icon name={name} size={30}/>);
    let renderSelectedIcon = (name) => (<Icon name={name} size={30} color={'#3b5998'}/>);
    return (
      <TabNavigator>
        <TabNavigator.Item
          title="发现"
          selected={this.state.selectedTab === 'discover'}
          renderIcon={() => renderIcon('ios-home-outline')}
          renderSelectedIcon={() => renderSelectedIcon('ios-home')}
          onPress={() => this.setState({ selectedTab: 'discover' })}>
          <Discover />
        </TabNavigator.Item>
        <TabNavigator.Item
          title="资讯"
          selected={this.state.selectedTab === 'info'}
          renderIcon={() => renderIcon('ios-book-outline')}
          renderSelectedIcon={() => renderSelectedIcon('ios-book')}
          onPress={() => this.setState({ selectedTab: 'info' })}>
          <View>
            <Text style={{color: 'red'}}>info</Text>
          </View>
        </TabNavigator.Item>
        <TabNavigator.Item
          tabStyle={styles.test}
          renderIcon={() => <Icon name='ios-add-outline' size={30} style={{marginTop: 15}}/>}
          onPress={() => console.log('......')}>
        </TabNavigator.Item>
        <TabNavigator.Item
          title="广场"
          selected={this.state.selectedTab === 'public'}
          renderIcon={() => renderIcon('ios-color-filter-outline')}
          renderSelectedIcon={() => renderSelectedIcon('ios-color-filter')}
          // renderBadge={() => <CustomBadgeView />}
          onPress={() => this.setState({ selectedTab: 'public' })}>
          <View>
            <Text style={{color: 'red'}}>public</Text>
          </View>
        </TabNavigator.Item>
        <TabNavigator.Item
          title="我"
          selected={this.state.selectedTab === 'me'}
          renderIcon={() => renderIcon('ios-person-outline')}
          renderSelectedIcon={() => renderSelectedIcon('ios-person')}
          // renderBadge={() => <CustomBadgeView />}
          onPress={() => this.setState({ selectedTab: 'me' })}>
          <View>
            <Text style={{color: 'red'}}>me...................</Text>
          </View>
        </TabNavigator.Item>
      </TabNavigator>
    );
  }

}

const styles = StyleSheet.create({
  test: {
    borderRadius: 3,
    // backgroundColor: '#090',
    justifyContent: 'center',
    marginTop: 6,
    marginBottom: 5,
    // flex: 0.5
  }
});


export const LayoutComponent = TabsView;