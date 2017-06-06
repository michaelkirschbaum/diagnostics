import React from 'react';
import { Image, View, StyleSheet, Animated, Dimensions } from 'react-native';

const ConnectionSpinner = React.createClass({
  render() {
    // image sequence
    let images = [
      require('../../images/Connecting1.png'),
      require('../../images/Connecting2.png'),
      require('../../images/Connecting3.png'),
      require('../../images/Connecting4.png'),
      require('../../images/Connecting5.png'),
      require('../../images/Connecting6.png'),
      require('../../images/Connected.png')
    ];

    return (
      <Image source={images[this.state.image]} style={[styles.spinner, this.state.image == 6 && styles.done]}/>
    );
  },

  getInitialState() {
    return {
      image: 0
    };
  },

  componentDidMount() {
    // animation speed
    var speed = 175;

    // render sequence
    this.timer = setInterval(function() {
      if (this.getStatus() == false)
        this.setState({image: (this.getIndex() + 1) % 6});
      else
        this.setState({image: 6});
    }.bind(this), speed);
  },

  getIndex() {
    return this.state.image;
  },

  getStatus() {
    return this.props.loading;
  },

  componentWillUnmount() {
    clearInterval(this.timer);
  }
});

const styles = StyleSheet.create({
  spinner: {
    height: 29.7,
    width: 108,
    marginTop: 9.5
  },
  done: {
    height: 48.06,
    marginTop: -9
  }
});

export default ConnectionSpinner;
