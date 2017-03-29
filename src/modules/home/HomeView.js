import React, {PropTypes} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  Modal,
  TouchableHighlight,
  Linking,
  AsyncStorage,
  NativeEventEmitter,
  NativeModules,
  Platform,
  Alert
} from 'react-native';
import {
  Container,
  Header,
  Footer,
  Title,
  Content,
  InputGroup,
  Input,
  Button,
  Icon,
  Text,
  H3,
  H2,
  H1,
  List,
  ListItem,
  Card,
  CardItem
} from 'native-base';
import colors from '../../config/colors';
import loc from '../../config/localization';
import carfitTheme from '../../config/carfit-theme';
import Swiper from 'react-native-swiper';
import * as NavigationState from '../navigation/NavigationState';
import Vehicle from '../../carfit/vehicle';
import store from '../../redux/store';
import createFragment from 'react-addons-create-fragment';
const {CarFitManager} = NativeModules;
import Connection from '../../carfit/connection';

const HomeView = React.createClass({
  getInitialState() {
    return {
      alert: '',
      modalVisible: false,
      meters: '',
      trips: [],
      title: '',
      description: '',
      photo: ''
    };
  },

  propTypes: {},

  componentDidMount() {
    var that = this;

    var interval = 60000;

    that.loadAlerts().done();
    that.loadUsage().done();

    setInterval(function() {
      that.loadUsage().done();
    }, interval);
    that.loadVehicle().done();

    // update odometer while not 'in trip'
    const vin = store.getState().get("carInstallation").get("vin");
    var vehicle = new Vehicle(vin);

    var connectionEmitter = new NativeEventEmitter(CarFitManager);

    setInterval(function() {
      that.loadMileage(vehicle).done();
    }, interval);
/*
    var trip_subscription = null;
    trip_subscription = connectionEmitter.addListener(
      'TripEndOfTravel',
      (notification) => setInterval(function() {
        that.loadMileage(vehicle).done();
      }, interval)
    ); */
  },

  onNextPress() {
    // this.props.pushRoute({key: 'CarInstallation', title: loc.carInstallation.inCarInstallation});
    // this.props.switchRoute('Overview');
    // this.props.switchRoute(2);
    var conn = new Connection();

    conn.simulateButtonClick();
  },

  // Forward setNativeProps to a child
  setNativeProps(nativeProps) {
    this._root.setNativeProps(nativeProps);
  },

  onSettingsPress() {
    this.props.pushRoute({key: 'Settings', title: loc.settings.settings});
  },

  onMilesPress() {
    Linking.openURL("https://www.messenger.com/t/1468809913153847").catch(err => console.error('An error occurred', err));
  },

  onMyCarsPress() {
    this.props.pushRoute({key: 'Details', title: loc.settings.settings});
  },

  popRoute() {
    this.props.onNavigateBack();
  },

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  },

  async loadAlerts() {
    var vehicle = new Vehicle();

    const vin = store.getState().get("carInstallation").get("vin");
    // backlog types: recall, maintenance, alert, bulletin
    var alerts = await vehicle.getAlerts('alert', vin);

    if (alerts) {
      // set to first alert
      var alert = alerts[0].summary;

      // set
      this.setState({alert});

      // serialize alerts
      try {
        await AsyncStorage.setItem('alerts', JSON.stringify(alerts));
      } catch(e) {
        console.error(e);
      }
    } else {
      this.setState({alert: ''});
    }
  },

  async loadMileage(vehicle) {
    // load mileage
    var meters = await vehicle.getMileage();

    if (meters) {
      if (Platform.OS === 'android')
        console.error("Unable to get locale.");
      else
        var region = NativeModules.SettingsManager.settings.AppleLocale;

      if (region == 'en_US' || region == 'en_GB') {
        var units = ' mi';
        var meters = Math.round(meters / 1609.34);
        meters = meters.toString() + units;
      } else {
        var units = ' km';
        var meters = Math.round(meters / 1000);
        meters = meters.toString() + units;
      }

      this.setState({meters});
    } else {
      this.loadMileage(vehicle);
    }
  },

  async loadUsage() {
    var vehicle = new Vehicle();

    const vin = store.getState().get("carInstallation").get("vin");
    var trips = await vehicle.getTrips(vin);

    if (trips) {
      // temporarily set to first trip
      var trip = trips[trips.length - 1].meters_travelled;

      // convert to miles
      trip = (parseInt(trip) / 1609.34).toFixed(2);
      trip = trip.toString() + ' miles';

      this.setState({trips: trip});
    } else {
      this.setState({trips: ''});
    }
  },

  // accepts string
  async setOdometer(distance) {
    const vin = store.getState().get("carInstallation").get("vin");
    var vehicle = new Vehicle(vin);

    if (isNaN(distance))
      this.setModalVisible(false);
    else {
      // set odometer
      if (Platform.OS === 'android')
        console.error("Unable to get locale.");
      else
        var region = NativeModules.SettingsManager.settings.AppleLocale;

      if (region == 'en_US' || region == 'en_GB') {
        var meters = Math.round(parseInt(distance) * 1609.34);
        var units = ' mi';

        distance = distance + units;
      } else {
        var meters = Math.round(parseInt(distance) * 1000);
        var units = ' km';

        distance = distance + units;
      }

      var resp = await vehicle.setMileage(vin, meters);
      if (!resp)
        Alert.alert(
          'Odometer Update',
          'Request failed. Try again.',
          {text: 'OK', onPress: () => console.log("OK pressed.")},
          {cancellable: fales}
        );

      // accept promise?
      this.setState({meters: distance});

      this.setModalVisible(false);
    }
  },

  async loadVehicle() {
    const vin = store.getState().get("carInstallation").get("vin");

    var vehicle = new Vehicle(vin);

    // load meters
    var meters = await vehicle.getMileage();

    if (meters) {
      if (Platform.OS === 'android')
        console.error("Unable to get locale.");
      else
        var region = NativeModules.SettingsManager.settings.AppleLocale;

      if (region == 'en_US' || region == 'en_GB') {
        var units = ' mi';
        var meters = Math.round(meters / 1609.34);
        meters = meters.toString() + units;
      } else {
        var units = ' km';
        var meters = Math.round(meters / 1000);
        meters = meters.toString() + units;
      }

      this.setState({meters});
    } else {
      this.loadMileage(vehicle);
    }

    // load title
    var title = await vehicle.getTitle();

    if (title) {
      this.setState({title});
    } else {
      console.log("title not loaded");
    }

    // load description
    var description = await vehicle.getDescription();

    if (description) {
      this.setState({description});
    } else {
      console.log("description not loaded");
    }

    // load photo
    var photo = await vehicle.getPhoto();

    if (photo) {
      this.setState({photo});
    } else {
      console.log("photo not loaded");
    }
  },

  renderPhoto() {
    if (this.state.photo !== '')
      return <Image source={{uri: this.state.photo}}/>;
  },

  renderOdometerUpdate() {
    if (NativeModules.SettingsManager.settings.AppleLocale == 'en_US') {
      return <Input
        ref='mileageInput'
        placeholder={loc.home.mileage}
        onChangeText={(text) => this.setState({meters: text})}
      />
    } else {
      return <Input
        ref='mileageInput'
        placeholder={loc.home.kilometrage}
        onChangeText={(text) => this.setState({meters: text})}
      />
    }
  },

  render() {
    let windowHeight = Dimensions.get('window').height;
    let windowWidth = Dimensions.get('window').width;

    let alertAction = loc.home.serviceNeeded;
    let alertColor = colors.secondary;

    let usageAction = loc.home.lastTrip;
    let usageDescription = '5.1 km';
    let actionColor = colors.primary;

    let valueAction = loc.home.trending;
    let valueDescription = loc.home.comingSoon;

    return (
      <Container theme={carfitTheme}>
        <View style={styles.headerLine}/>
        <Content
          padder
          keyboardShouldPersistTaps="always"
          style={{backgroundColor: colors.backgroundPrimary}}
          ref={c => this._content = c}>

          <View style={styles.container}>

            <View style={styles.profileContainer}>
              <TouchableOpacity onPress={this.onSettingsPress}>
                <Image source={require('../../../images/icons/settings.png')}
                       style={styles.icon}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.onMyCarsPress}>
                {this.renderPhoto()}
              </TouchableOpacity>
              <TouchableOpacity onPress={this.onMilesPress}>
                <Image source={require('../../../images/icons/miles.png')} style={styles.icon}/>
              </TouchableOpacity>
            </View>

            <View style={styles.profileHeaderContainer}>
              <H1>{this.state.title}</H1>
              <H2 style={{marginTop: 5}}>{this.state.description}</H2>
              <Button rounded
                      style={styles.milesButton}
                      textStyle={{color: colors.textPrimary}}
                      onPress={() => this.setModalVisible(true)}
              >{this.state.meters}</Button>
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
              <Modal
                animationType={"none"}
                transparent={true}
                visible={this.state.modalVisible}
                onRequestClose={() => {alert("Modal has been closed.")}}>

                <Container>
                  <Content>
                    <Card>
                      {this.renderOdometerUpdate()}

                      <Button block
                        onPress={() => this.setOdometer(this.state.meters)}
                      >Save Changes</Button>
                    </Card>
                  </Content>
                </Container>
              </Modal>
            </View>

            <View style={styles.dataBlockContainer}>
              <View style={styles.dataIcon}>
                <Image source={require('../../../images/icons/service.png')} style={styles.icon}/>
              </View>
              <View style={styles.dataBlock}>
                <H3 style={{fontWeight: "bold", color: alertColor}}>{loc.home.alert}</H3>
                <View style={{ height: 1, backgroundColor: colors.headerTextColor, marginTop: 2, marginBottom: 2}}/>
                <H3>{alertAction}</H3>
                <Text>{this.state.alert}</Text>
              </View>
              <View style={styles.dataAction}>
                <Button transparent onPress={() => this.props.pushRoute({key: 'Alerts', title: loc.home.alert})}>
                  <Icon active name="ios-arrow-forward"></Icon>
                </Button>
              </View>
            </View>

            <View style={styles.dataBlockContainer}>
              <View style={styles.dataIcon}>
                <Image source={require('../../../images/icons/usage.png')} style={styles.icon}/>
              </View>
              <View style={styles.dataBlock}>
                <H3 style={{fontWeight: "bold", color: actionColor}}>{loc.home.usage}</H3>
                <View style={{ height: 1, backgroundColor: colors.headerTextColor, marginTop: 2, marginBottom: 2}}/>
                <H3>{usageAction}</H3>
                <Text>{this.state.trips}</Text>
              </View>
              <View style={styles.dataAction}>
                <Button transparent onPress={() => this.props.pushRoute({key: 'Usage', title: loc.home.usage})}>
                  <Icon active name="ios-arrow-forward"></Icon>
                </Button>
              </View>
            </View>

            <View style={styles.dataBlockContainer}>
              <View style={styles.dataIcon}>
                <Image source={require('../../../images/icons/usage.png')} style={styles.icon}/>
              </View>
              <View style={styles.dataBlock}>
                <H3 style={{fontWeight: "bold", color: colors.headerTextColor}}>{loc.home.value}</H3>
                <View style={{ height: 1, backgroundColor: colors.headerTextColor, marginTop: 2, marginBottom: 2}}/>
                <H3 style={{color: colors.headerTextColor}}>{valueAction}</H3>
                <Text style={{color: colors.headerTextColor}}>{valueDescription}</Text>
              </View>
              <View style={styles.dataAction}>
                <Icon active name="ios-arrow-forward"></Icon>
              </View>
            </View>

          </View>

        </Content>
        <Footer theme={carfitTheme} style={styles.footer}>
          <View style={styles.bottomContainer}>
            <Button rounded
                    bordered={false}
                    style={{alignSelf: 'auto', width: 120, height: 45}}
                    textStyle={{color: colors.textPrimary}}
                    onPress={this.onNextPress}>
              <Image source={require('../../../images/icons/phone.png')} style={styles.icon}/>
            </Button>
          </View>
        </Footer>
      </Container>
    );
  }
});

const styles = StyleSheet.create({
  headerLine: {
    height: 1,
    backgroundColor: colors.headerTextColor
  },
  container: {
    flex: 1,
    // height: 300,
    marginLeft: 20,
    marginRight: 20,
  },
  profileContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 55,
    // backgroundColor: '#002200',
    marginBottom: 16,
  },
  profileHeaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#220000',
    marginBottom: 16,
  },
  milesButton: {
    backgroundColor: colors.textSecondary,
    alignSelf: 'auto',
    marginTop: 16,
  },

  dataBlockContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 16
  },
  dataIcon: {
    marginRight: 16
  },
  dataBlock: {
    flex: 1,
  },
  dataAction: {
    marginLeft: 16,
  },

  askMilesContainer: {
    marginTop: 22
  },
  textInput: {
    backgroundColor: colors.inputBackground,
    borderColor: colors.primary,
    borderWidth: 2.5,
    marginTop: 22
  },
  image: {
    width: 300,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
  icon: {
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titles: {
    marginTop: 17,
    marginBottom: 8
  },
  footer: {
    height: 90,
    backgroundColor: colors.backgroundPrimary,
    borderColor: colors.backgroundPrimary
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modal: {

  }
});

export default HomeView;
