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
      <View style={styles.spinner}>
        <Image source={images[this.state.image]} />
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
    var that = this;

    // render sequence
    var spinner = setInterval(function() {
      if (this.props.loading == true)
        that.setState({image: (that.getIndex() + 1) % 6});
      else
        that.setState({image: images.length - 1});
    }, 175);

    this.setState({spinner});
  },

  getIndex() {
    return this.state.image;
  },

  componentWillUnmount() {
    this.state.spinner.remove();
  }
});

const styles = StyleSheet.create({
  spinner: {
    flex: 1,
    // backgroundColor: 'black',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  done: {

  }
});

export default ConnectionSpinner;
