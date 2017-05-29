import React from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet
} from 'react-native';

const ConnectionMonitor = React.createClass({
  render() {
    let degree = this.props.angle.toString() + 'deg';

    return (
      <View>
        {this.props.connected ?
          <Image
            source={require('../../images/car-circle-home.png')}
            style={{transform: [{rotate: degree}], width: 100, height: 100, justifyContent: 'center', alignItems: 'center'}}
          /> :
          <Image
            source={require('../../images/icons/black-square.png')}
            style={styles.placeholder}
          />
        }
      </View>
    );
  }
});

const styles = StyleSheet.create({
  placeholder: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default ConnectionMonitor;
