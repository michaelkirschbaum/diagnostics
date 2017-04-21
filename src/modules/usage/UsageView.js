import React from 'react';
import {
  NativeModules,
  AsyncStorage,
  Image,
  StyleSheet
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
      trips: [],
      lastTrip: function() {
        if (this.trips.length > 0) {
          return this.trips[this.trips.length - 1];
        }
        return {secs_below_72kph: 0, secs_above_72kph: 0, secs_below_10kph: 0}
      }
    };
  },

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
        <Content style={{backgroundColor: colors.backgroundPrimary}}>
          <View style={styles.last_trip}>
            <View>
              <Text style={{textAlign: 'center'}}>
                <Image source={require('../../../images/icons/highway.png')}/>
                {this.getReport(this.state.lastTrip()).highway}
              </Text>
            </View>
            <View>
              <Text style={{textAlign: 'center'}}>
                <Image source={require('../../../images/icons/city.png')}/>
                <Text>{this.getReport(this.state.lastTrip()).city}</Text>
              </Text>
            </View>
            <View>
              <Text style={{textAlign: 'center'}}>
                <Image source={require('../../../images/icons/stop-and-go.png')}/>
                {this.getReport(this.state.lastTrip()).stop_and_go}
              </Text>
            </View>
          </View>

          <View style={{
            height: 1,
            backgroundColor: colors.headerTextColor,
            marginLeft: 5,
            marginRight: 5,
            marginTop: 5,
            marginBottom: 5,
            }}/>

          <View>
            <List dataArray={this.state.trips.reverse()}
              renderRow={(trip) =>
                <ListItem>
                  <View>
                    <Text>City: {this.getReport(trip).city}, Highway: {this.getReport(trip).highway}, Stop and Go: {this.getReport(trip).stop_and_go}</Text>
                    <Text>Start time: {trip.start_timestamp}</Text>
                    <Text>Distance: {trip.meters_travelled}</Text>
                  </View>
                </ListItem>
              }>
            </List>
          </View>
        </Content>
      </Container>
    );
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

  // calculate driving conditions
  getReport(trip) {
    // travel time
    var total = trip.secs_below_72kph + trip.secs_above_72kph + trip.secs_below_10kph;

    // percentage of trip in conditions
    var stop_and_go = Math.round(trip.secs_below_10kph / total * 100);
    var city = Math.round(trip.secs_below_72kph / total * 100);
    var highway = Math.round(trip.secs_above_72kph / total * 100);

    return {stop_and_go: stop_and_go.toString() + "%", city: city.toString() + "%", highway: highway.toString() + "%"};
  }
});

const styles = StyleSheet.create({
  last_trip: {
    flex: 1,
    flexDirection: 'row'
  }
});

export default UsageView;
