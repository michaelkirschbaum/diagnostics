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
    var that = this;

    // render sequence
    var spinner = setInterval(function() {
      if (that.getStatus() == true)
        that.setState({image: (that.getIndex() + 1) % 6});
      else
        that.setState({image: 6});
    }, 175);

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
  },
  done: {
    
  }
});

export default ConnectionSpinner;
