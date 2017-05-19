import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'native-base';

export default class FirmwareNotification extends Component {
  render() {
    return (
      <Text style={styles.text}>Device is updating</Text>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center'
  }
});
