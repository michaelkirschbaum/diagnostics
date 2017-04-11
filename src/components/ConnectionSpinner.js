import React from 'react';
import { Image, View } from 'react-native';

const ConnectionSpinner = React.createClass({
  render() {
    return (
      <View>
        <Image source={require('../../images/Connected.png')}/>
      </View>
    );
  }
});

export default ConnectionSpinner;
