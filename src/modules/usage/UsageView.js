import React from 'react';
import {
  Container,
  Header,
  Button,
  Icon,
  Title
} from 'native-base';
import carfitTheme from '../../config/carfit-theme';
import Highcharts from 'highcharts';
import loc from '../../config/localization';

const UsageView = React.createClass({
  render() {
    let headerTitle = loc.home.usage;

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

export default UsageView;
