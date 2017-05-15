import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'native-base';

export default class NetworkMonitor extends Component {
  render() {
    return (
      <Text style={styles.text}>Network is off.</Text>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center'
  }
});
