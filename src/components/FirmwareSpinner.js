import React from 'react';
import {Text} from 'react-native';
import {StyleSheet} from 'react-native';

const FirmwareSpinner = React.createClass({
  render() {
    return (
      <Text style={styles.text}>progress</Text>
    );
  }
});

const styles = StyleSheet.create({
  text: {
    textAlign: 'center'
  }
});

export default FirmwareSpinner;
