import React from 'react';
import { Image, View } from 'react-native';

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

export default ConnectionMonitor;
