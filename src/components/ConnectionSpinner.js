import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

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
      <View style={styles.container}>
        <Image source={images[this.state.image]} style={styles.spinner}/>
      </View>
    );
  },

  getInitialState() {
    return {
      image: 0,
      spinner: ''
    };
  },

  componentDidMount() {
    // animation speed
    var speed = 175;

    // render sequence
    var spinner = setInterval(function() {
      if (this.getStatus() == false && this.getIndex() < 6)
        this.setState({image: (this.getIndex() + 1) % 6});
      else
        this.setState({image: 6});
    }.bind(this), speed);

    this.setState({spinner});
  },

  getIndex() {
    return this.state.image;
  },

  getStatus() {
    return this.props.loading;
  },

  componentWillUnmount() {
    this.state.spinner.remove();
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'black',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  spinner: {
    resizeMode: 'center'
  }
});

export default ConnectionSpinner;
