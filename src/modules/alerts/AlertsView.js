import React from 'react';
import {
  Container,
  Header,
  Button,
  Icon,
  Title
} from 'native-base';
import carfitTheme from '../../config/carfit-theme';
import loc from '../../config/localization';

const AlertsView = React.createClass({
  render() {
    let headerTitle = loc.home.alert;

    return (
      <Container theme={carfitTheme}>
        <Header>
          <Button transparent onPress={() => this.props.onNavigateBack()}>
            <Icon name="ios-arrow-back"/>
          </Button>
          <Title>{headerTitle}</Title>
        </Header>
      </Container>
    );
  }
});

export default AlertsView;
