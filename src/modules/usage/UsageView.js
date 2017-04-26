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
      trips: []
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
          <View style={{
            height: 1,
            backgroundColor: colors.headerTextColor,
            marginLeft: 5,
            marginRight: 5,
            marginTop: 5,
            marginBottom: 5,
            }}/>

          <View style={styles.last_trip}>
            <View>
              <Text style={{textAlign: 'center'}}>
                <Image source={require('../../../images/icons/data-usage.png')} style={styles.trip_icon} />
                {new Date(this.lastTrip().start_timestamp).toString()}
              </Text>
            </View>
            <View>
              <Text style={{textAlign: 'center'}}>
                <Image source={require('../../../images/icons/time-usage.png')} style={styles.trip_icon} />
                {}
              </Text>
            </View>
            <View>
              <Text style={{textAlign: 'center'}}>
                <Image source={require('../../../images/icons/distance-usage.png')} style={styles.trip_icon} />
                {this.convertMeters(this.lastTrip().meters_travelled) + (this.useMetric() ? ' km' : ' mi')}
              </Text>
            </View>
            <View>
              <Text style={{textAlign: 'center'}}>
                <Image source={require('../../../images/icons/smoothness-usage.png')} style={styles.trip_icon} />
                {}
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

          <View style={styles.last_trip}>
            <View>
              <Text style={{textAlign: 'center'}}>
                <Image source={require('../../../images/icons/highway.png')} style={styles.report_icon}/>
                {this.getReport(this.lastTrip()).highway}
              </Text>
            </View>
            <View>
              <Text style={{textAlign: 'center'}}>
                <Image source={require('../../../images/icons/city.png')} style={styles.report_icon}/>
                <Text>{this.getReport(this.lastTrip()).city}</Text>
              </Text>
            </View>
            <View>
              <Text style={{textAlign: 'center'}}>
                <Image source={require('../../../images/icons/stop-and-go.png')} style={styles.report_icon}/>
                {this.getReport(this.lastTrip()).stop_and_go}
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
            {!this.state.trips.length &&
              <Text style={{alignSelf: 'center'}}>{loc.home.noTrips}</Text>
            }
            <List dataArray={this.state.trips.reverse()}
              renderRow={(trip) =>
                <ListItem>
                  <View>
                    <Text>City: {this.getReport(trip).city}, Highway: {this.getReport(trip).highway}, Stop and Go: {this.getReport(trip).stop_and_go}</Text>
                    <Text>Start: {new Date(trip.start_timestamp).toString()}</Text>
                    <Text>Distance: {this.convertMeters(trip.meters_travelled).toString() + (this.useMetric() ? ' km' : ' mi')}</Text>
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

      if (!trips)
        trips = [];
      else
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
    if (total == 0)
      return {stop_and_go: '-%', city: '-%', highway: '-%'};

    // percentage of trip in conditions
    var stop_and_go = Math.round(trip.secs_below_10kph / total * 100);
    var city = Math.round(trip.secs_below_72kph / total * 100);
    var highway = Math.round(trip.secs_above_72kph / total * 100);

    return {stop_and_go: stop_and_go.toString() + "%", city: city.toString() + "%", highway: highway.toString() + "%"};
  },

  convertMeters(meters) {
    // get location
    var region = NativeModules.SettingsManager.settings.AppleLocale;

    // if in US or Britain use Miles, otherwise use Kilometers
    if (region.endsWith('US') || region.endsWith('GB')) {
      return Math.round(meters / 1609.344);
    } else {
      return Math.round(meters / 1000);
    }
  },

  lastTrip() {
    if (this.state.trips.length) {
      return this.state.trips[this.state.trips.length - 1];
    }

    return {secs_below_72kph: 0, secs_above_72kph: 0, secs_below_10kph: 0}
  },

  useMetric() {
    var region = NativeModules.SettingsManager.settings.AppleLocale;

    if (region.endsWith("US") || region.endsWith("GB"))
      return false;
    else
      return true;
  }
});

const styles = StyleSheet.create({
  last_trip: {
    flex: 1,
    flexDirection: 'row'
  },
  report_icon: {
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'center'
  },
  trip_icon: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain'
  }
});

export default UsageView;
