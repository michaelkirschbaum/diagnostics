import React, {Component} from 'react';
import {Image, StyleSheet} from 'react-native';

class Signal extends Component {
  render() {
    let strength = this.props.strength;

    // signal increases as strength approaches 0
    if (strength <= .25)
      return(
        <Image style={styles.icon} source={require('../../images/icons/wifi0.png')}/>
      );
    else if (strength <= .50)
      return(
        <Image style={styles.icon} source={require('../../images/icons/wifi1.png')}/>
      );
    else if (strength <= .75)
      return(
        <Image style={styles.icon} source={require('../../images/icons/wifi2.png')}/>
      );
    else
      return(
        <Image style={styles.icon} source={require('../../images/icons/wifi3.png')}/>
      );
  };
}

const styles = StyleSheet.create({
  icon: {
    // resizeMode: 'center',
    height: 37,
    width: 37
  }
});

export default Signal;
