import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

const ConnectionSpinner = React.createClass({
  render() {
    let images = null;

    return (
      <View>
        <Image source={require('../../images/Connecting1.png')}/>
      </View>
    );
  },

  componentDidMount() {}
});

const styles = StyleSheet.create({
  spinner: {}
});

export default ConnectionSpinner;
