import React from 'react';
import {
  Container,
  Header,
  Button,
  Icon,
} from 'native-base';
import carfitTheme from '../../config/carfit-theme';

const AlertsView = React.createClass({
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

export default AlertsView;
