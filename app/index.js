import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import TextComponent from './TextComponent';

export default class test extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <TextComponent />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

AppRegistry.registerComponent('test', () => test);
