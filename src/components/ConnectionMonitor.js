import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';

const ConnectionMonitor = React.createClass({
  render() {
    return (
      <View>
        {this.isConnected()}
      </View>
    );
  },

  isConnected() {
    if (this.props.connected)
      return (
        <Image source={require('../../images/car-circle-home.png')} style={styles.image}/>
      );
    else
      return (
        <Image source={require('../../images/icons/black-square.png')} style={styles.image}/>
      );
  }
});

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default ConnectionMonitor;
