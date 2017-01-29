import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Content, Text, List, ListItem } from 'native-base';
import {pushRoute, popRoute, switchRoute, openDrawer, closeDrawer} from './NavigationState';
import carfitTheme from '../../config/carfit-theme';

export default class NavigationDemoDrawer extends Component {

  render() {
    return (
      <Content theme={carfitTheme} style={styles.sidebar} >
        <List>
          <ListItem button  >
            <Text>Login</Text>
          </ListItem>
          <ListItem button  >
            <Text>Welcome</Text>
          </ListItem>
        </List>
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  sidebar: {
    flex: 1,
    padding: 10,
    paddingRight: 0,
    paddingTop: 30,
    backgroundColor: '#fff',
  },
});