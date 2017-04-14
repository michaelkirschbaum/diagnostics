import React from 'react';
import {
  NativeModules,
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
  ListItem,
  Text
} from 'native-base';
import carfitTheme from '../../config/carfit-theme';
import en from '../../config/localization.en';
import fr from '../../config/localization.fr';
if (NativeModules.SettingsManager.settings.AppleLocale.startsWith("fr"))
  var loc = fr;
else
  var loc = en;
import colors from '../../config/colors';

const UsageView = React.createClass({
  getInitialState() {
    return {
      trips: []
    };
  },

  async componentDidMount() {
    // load trips
    try {
      const trips = await AsyncStorage.getItem('trips');

      trips = JSON.parse(trips);

      this.setState({trips});
    } catch(e) {
      console.log("Trips not loaded:");
      console.log(e);
    }
  },

  render() {
    let headerTitle = loc.home.usage;

    let trips = this.state.trips;

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
            <List dataArray={trips}
              renderRow={(trip) =>
                <ListItem>
                  <Text>{JSON.stringify(trip)}</Text>
                </ListItem>
              }>
            </List>
          </View>
        </Content>
      </Container>
    );
  }
});

export default UsageView;
