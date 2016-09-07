/**
 * Modified Starter React Native App: Now With Navigation!
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, View, Navigator } from 'react-native';
import Main from './src/components/Main';

class App extends Component {
  renderScene(route, navigator) {
    const Component = route.component;
    return (
      <Component
        navigator={navigator}
        route={route}
        {...route.passProps}
      />
    )
  }
  render() {
    return (
      <Navigator
        ref={(nav) => { navigator = nav;}}
        renderScene={this.renderScene}
        initialRoute={{
          component: Main
        }} />
    );
  }
}

AppRegistry.registerComponent('App', () => App);
