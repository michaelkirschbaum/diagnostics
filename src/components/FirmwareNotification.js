import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Text, Content} from 'native-base';
import colors from '../config/colors';

export default class FirmwareNotification extends Component {
  render() {
    return (
      <Content style={styles.container}>
        <Text style={styles.text}>Device update: {this.props.percent}</Text>
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary
  },
  text: {
    textAlign: 'center'
  }
});
