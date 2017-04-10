import React from 'react';
import {NativeModules} from 'react-native';
import {
  Container,
  Header,
  Button,
  Icon,
  Title,
  Content
} from 'native-base';
import carfitTheme from '../../config/carfit-theme';
import en from '../../config/localization.en';
import fr from '../../config/localization.fr';
if (NativeModules.SettingsManager.settings.AppleLocale.startsWith("fr"))
  var loc = fr;
else
  var loc = en;
import colors from '../../config/colors';

const DriveView = React.createClass({
  render() {
    let headerTitle = loc.settings.drive;

    return (
      <Container theme={carfitTheme}>
        <Header>
          <Button transparent onPress={() => this.props.onNavigateBack()}>
            <Icon name="ios-arrow-back"/>
          </Button>
          <Title>{headerTitle}</Title>
        </Header>
        <Content style={{backgroundColor: colors.backgroundPrimary}}></Content>
      </Container>
    );
  }
});

export default DriveView;
