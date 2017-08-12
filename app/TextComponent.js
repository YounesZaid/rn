import React, { Component } from 'react';

import { Text } from 'react-native';

export default class TextComponent extends Component {
  render() {
    return (
      <Text style={styles.instructions}>
        Double tap R on your keyboard to reload,{'\n'}
        Shake or press menu button for dev MENU
      </Text>
    )
  }
}


const styles = {
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
}
