import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

const ConnectionMonitor = React.createClass({
  getInitialState() {
    return {
      icon: ''
    };
  },

  render() {
    return (
      <Image source={require('../../images/car-circle-home@2x.png')}
        style={styles.image}
      />
    );
  }
});

const styles = StyleSheet.create({
  image: {
    width: 75,
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default ConnectionMonitor;
