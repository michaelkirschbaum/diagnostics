import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

const ConnectionSpinner = React.createClass({
  render() {
    let images = null;

    return (
      <View style={styles.modal}>
        <Image source={require('../../images/Connecting1.png')}/>
      </View>
    );
  },

  componentDidMount() {}
});

const styles = StyleSheet.create({
  spinner: {},
  modal: {
    flex: 1,
    backgroundColor: 'black'
  }
});

export default ConnectionSpinner;
