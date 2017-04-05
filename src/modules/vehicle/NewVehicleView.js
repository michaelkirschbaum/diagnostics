import React from 'react';
import {
  Container,
  Header,
  Button,
  Icon,
  Title,
  Content,
  View
} from 'native-base';
import carfitTheme from '../../config/carfit-theme';
import loc from '../../config/localization';
import colors from '../../config/colors';

const NewVehicleView = React.createClass({
  render() {
    let headerTitle = loc.carInstallation.inCarInstallation;

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

export default NewVehicleView;
