import React from 'react';
import {
  Container,
  Header,
  Button,
  Icon,
  Title,
  Content
} from 'native-base';
import carfitTheme from '../../config/carfit-theme';
import loc from '../../config/localization';
import colors from '../../config/colors';

const AlertsView = React.createClass({
  componentDidMount() {
    
  },

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
        <Content style={{backgroundColor: colors.backgroundPrimary}}>
        </Content>
      </Container>
    );
  }
});

export default AlertsView;
