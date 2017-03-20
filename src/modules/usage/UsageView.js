import React from 'react';
var HTML = require('react-native-htmlview');
import {
  Container,
  Header,
  Button,
  Icon,
} from 'native-base';
import carfitTheme from '../../config/carfit-theme';
// import "usage.html";
// var content = require("usage.html");

const UsageView = React.createClass({
  render() {
    return (
      <Container theme={carfitTheme}>
        <Header>
          <Button transparent onPress={() => this.props.onNavigateBack()}>
            <Icon name="ios-arrow-back"/>
          </Button>
        </Header>
      {/* <HTML
        value={content}
      /> */}
      </Container>
    );
  }
});

export default UsageView;
