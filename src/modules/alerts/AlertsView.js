import React from 'react';
import {
  AsyncStorage
} from 'react-native';
import {
  Container,
  Header,
  Button,
  Icon,
  Title,
  Content,
  View,
  List,
  Text,
  ListItem
} from 'native-base';
import carfitTheme from '../../config/carfit-theme';
import en from '../../config/localization.en';
import fr from '../../config/localization.fr';
if (NativeModules.SettingsManager.settings.AppleLocale.endsWith("FR"))
  var loc = fr;
else
  var loc = en;
import colors from '../../config/colors';

const AlertsView = React.createClass({
  getInitialState() {
    return {
      alerts: []
    };
  },

  async componentDidMount() {
    try {
      const alerts = await AsyncStorage.getItem('alerts');

      if (alerts !== null) {
        // deserialize
        alerts = JSON.parse(alerts);

        // load
        this.setState({alerts});
      }
    } catch(e) {
      console.error(e);
    }
  },

  render() {
    let headerTitle = loc.home.alert;

    let alerts = this.state.alerts;

    return (
      <Container theme={carfitTheme}>
        <Header>
          <Button transparent onPress={() => this.props.onNavigateBack()}>
            <Icon name="ios-arrow-back"/>
          </Button>
          <Title>{headerTitle}</Title>
        </Header>
        <Content style={{backgroundColor: colors.backgroundPrimary}}>
          <View>
            <List dataArray={alerts}
              renderRow={(alert) =>
                <ListItem>
                  <Text>{alert.summary}</Text>
                </ListItem>
              }>
            </List>
          </View>
        </Content>
      </Container>
    );
  }
});

export default AlertsView;
