import React, {Component} from 'react';
import {Image} from 'react-native';

class Signal extends Component {
  render() {
    let strength = this.props.strength;

    // signal increases as strength approaches 0
    if (strength >= -25)
      return(
        <Image source={require('../../images/icons/wifi3.png')} resizeMode='center'/>
      );
    else if (strength >= -50)
      return(
        <Image source={require('../../images/icons/wifi2.png')} resizeMode='center'/>
      );
    else if (strength >= -75)
      return(
        <Image source={require('../../images/icons/wifi1.png')} resizeMode='center'/>
      );
    else
      return(
        <Image source={require('../../images/icons/wifi0.png')} resizeMode='center'/>
      );
  };
}

export default Signal;
