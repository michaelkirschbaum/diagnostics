import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';

const ConnectionMonitor = React.createClass({
  render() {
    let degree = this.props.angle.toString() + 'deg';

    return (
      <View>
        {this.props.connected ?
          <Image
            source={require('../../images/car-circle-home.png')}
            style={styles.image, {transform: [{rotate: degree}]}}
          /> :
          <Image
            source={require('../../images/icons/black-square.png')}
            style={styles.image}
          />
        }
      </View>
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
