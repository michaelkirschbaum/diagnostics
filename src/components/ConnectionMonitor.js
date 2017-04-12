import React from 'react';
import { Image } from 'react-native';

const ConnectionMonitor = React.createClass({
  render() {
    return (
      <Image source={require('../../images/car-circle-home@2x.png')}
      style={styles.image}
      />
    );
  }
});
