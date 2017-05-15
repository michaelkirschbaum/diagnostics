import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Content, Text, List, ListItem } from 'native-base';
import {pushRoute, popRoute, switchRoute, openDrawer, closeDrawer} from '../modules/navigation/NavigationState';
import carfitTheme from '../config/carfit-theme';

export default class BluetoothMonitor extends Component {
  render() {
    return (
      <Text style={styles.text}>Bluetooth is off.</Text>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center'
  }
});
