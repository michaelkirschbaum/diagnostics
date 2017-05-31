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
      image: 0,
      timer: ''
    };
  },

  componentDidMount() {
    // animation speed
    var speed = 175;

    // render sequence
    var timer = setInterval(function() {
      if (this.getStatus() == false)
        this.setState({image: (this.getIndex() + 1) % 6});
      else
        this.setState({image: 6});
    }.bind(this), speed);

    this.setState({timer});
  },

  getIndex() {
    return this.state.image;
  },

  getStatus() {
    return this.props.loading;
  },

  componentWillUnmount() {
    clearInterval(this.state.timer);
  }
});

const styles = StyleSheet.create({
  spinner: {
    height: 27.5,
    width: 100
  },
  done: {
    height: 44.5
  }
});

export default ConnectionSpinner;
