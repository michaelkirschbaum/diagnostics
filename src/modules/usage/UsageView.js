import React from 'react';
import {
  StyleSheet
} from 'react-native';
var HTMLView = require('react-native-htmlview');
import {
  Container,
  Header,
  Button,
  Icon,
  Content,
  View,
  Text
} from 'native-base';
import carfitTheme from '../../config/carfit-theme';

const UsageView = React.createClass({
  render() {
    return (
      <Container theme={carfitTheme}>
        <Header>
          <Button transparent onPress={() => this.props.onNavigateBack()}>
            <Icon name="ios-arrow-back"/>
          </Button>
        </Header>
      </Container>
    );
  }
});

export default UsageView;
