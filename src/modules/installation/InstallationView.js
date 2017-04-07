import React, {PropTypes} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  NativeEventEmitter,
  NativeModules,
  ActivityIndicator
} from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  InputGroup,
  Input,
  Button,
  Icon,
  Text,
  H3,
  List,
  ListItem
} from 'native-base';
import colors from '../../config/colors';
import en from '../../config/localization.en';
import fr from '../../config/localization.fr';
if (NativeModules.SettingsManager.settings.AppleLocale.endsWith("FR"))
  var loc = fr;
else
  var loc = en;
import carfitTheme from '../../config/carfit-theme';
import Swiper from 'react-native-swiper';
import * as NavigationState from '../navigation/NavigationState';
import Connection from '../../carfit/connection';
import Signal from '../../components/Signal';
import TimerMixin from 'react-native-timer-mixin';
const {CarFitManager} = NativeModules;

/**
 * Login view
 * Likely to be the main app view, but will only display login dialog when needed.
 * Otherwise pass by.
 */
const InstallationView = React.createClass({
  getInitialState() {
    return {
      rssi_refresh: '',
      connecting: false
    };
  },

  propTypes: {
    // dispatch: PropTypes.func.isRequired
    installation: PropTypes.object.isRequired
  },

  componentDidMount() {
    var interval = 2000;
    var rssi_refresh = setInterval(function() {
      this.rediscover();
    }.bind(this), interval);

    this.setState({rssi_refresh});
  },

  componentWillUnmount() {
    // stop rssi refresh
    clearInterval(this.state.rssi_refresh);
  },

  async onNextPress(id) {
    this.setState({connecting: true});

    var connectionEmitter = new NativeEventEmitter(CarFitManager);

    // set flag for start of trip
    var trip_subscription = connectionEmitter.addListener(
      'TripStartOfTravel',
      (notification) => this.props.setDrive(true)
    );

    // set flag for end of trip
    var trip_subscription = connectionEmitter.addListener(
      'TripEndOfTravel',
      (notification) => this.props.setDrive(false)
    );

    // flag bluetooth connection status
    var connection_subscription = connectionEmitter.addListener(
      'BLEDeviceConnectionStatus',
      (message) => this.props.setConnection(message["status"])
    );

    // connect puls device
    var conn = new Connection();
    var resp = await conn.connectDevice(id);

    // handle failure, bluetooth failure, or success
    if (true) { // should be resp
      this.props.pushRoute({key: 'CarStartInstallation', title: loc.carInstallation.inCarInstallation});
    }
    else
      Alert.alert(
        'Puls',
        'Device failed to connect.',
        {text: 'OK', onPress: () => console.log("OK pressed.")},
        {cancellable: false}
      );
  },

  popRoute() {
    this.props.setPageIndex(0);
    this.props.clearDevices();
    this.props.onNavigateBack();
  },

  setPage(index) {
    this.props.setPageIndex(index);
    if (index == 4) {
      // Start discovery of BLE devices
      this.props.discover();
    }
  },

  rediscover() {
    this.props.discover();
  },

  componentWillUpdate(nextProps, nextState) {
    // console.log('nextProps');
    // console.log(JSON.stringify(nextProps, null, 2));
    this.numberOfItems = nextProps.installation.foundDevices.length;

    return true;
  },

  setPhone(number) {
    var conn = new Connection();

    conn.addPhone(number);
  },

  render() {
    let windowHeight = Dimensions.get('window').height;
    let windowWidth = Dimensions.get('window').width;

    let items = this.props.installation.foundDevices;

    let headerTitle = loc.welcome.connect;

    return (
        <Container theme={carfitTheme}>
          <Header>
            <Button transparent onPress={() => this.popRoute()}>
              <Icon name="ios-arrow-back" />
            </Button>
            <Title>{headerTitle}</Title>
          </Header>
          <View style={styles.headerLine} />
          <Content
            padder
            keyboardShouldPersistTaps="always"
            style={{backgroundColor: colors.backgroundPrimary}}
            ref={c => this._content = c}>

            <Swiper
              loop={false}
              index={this.props.installation.pageIndex}
              height={windowHeight - 100}
              style={styles.container}
              dot={<View style={{backgroundColor:colors.inputBackground, width: 8, height: 8,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
              activeDot={<View style={{backgroundColor:colors.primary, width: 8, height: 8,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
              onMomentumScrollEnd={(e, state, context) => this.setPage(state.index)}
            >
              <View style={styles.instructionsContainer}>
                <Image source={require('../../../images/pull-tab-02.png')} style={styles.image}/>
                <H3 style={{fontWeight: "bold", textAlign: "center", marginTop: 25}}>{loc.instructions.enableBattery}</H3>
                <Text style={{marginTop: 17, textAlign: "center"}}>{loc.instructions.pullTab}</Text>
              </View>
              <View style={styles.instructionsContainer}>
                <Image source={require('../../../images/activate-ble-02.png')} style={styles.image}/>
                <H3 style={{fontWeight: "bold", textAlign: "center", marginTop: 25}}>{loc.instructions.activateBluetooth}</H3>
                <Text style={{marginTop: 17, textAlign: "center"}}>{loc.instructions.turnOnBLE}</Text>
              </View>
              <View style={styles.instructionsContainer}>
                <Image source={require('../../../images/reset-connection-01.png')} style={styles.image}/>
                <H3 style={{fontWeight: "bold", textAlign: "center", marginTop: 25}}>{loc.instructions.resetConnection}</H3>
                <Text style={{marginTop: 17, textAlign: "center"}}>{loc.instructions.pressAndHold}</Text>
              </View>
              <View style={styles.instructionsContainer}>
                <Image source={require('../../../images/ble-pairing-02.png')} style={styles.image}/>
                <H3 style={{fontWeight: "bold", textAlign: "center", marginTop: 25}}>{loc.instructions.blePairing}</H3>
                <Text style={{marginTop: 17, textAlign: "center"}}>{loc.instructions.ensurePairing}</Text>
              </View>
              <View style={styles.instructionsContainer}>
                <Text style={{marginTop: 17, textAlign: "left"}}>{loc.instructions.selectBLE}</Text>
                <List dataArray={items}
                      style={{width: windowWidth - 40, marginTop: 10}}
                      renderRow={(item) =>
                            <ListItem>
                              <View style={styles.row}>
                                <Text onPress={() => this.onNextPress(item.identifier)}>{item.name}</Text>
                                <Signal strength={item.signal}/>
                              </View>
                            </ListItem>
                        }>
                </List>
                <Text>Found: {this.numberOfItems}</Text>
                <TouchableOpacity onPress={this.rediscover}>
                  <Icon name="ios-refresh"></Icon>
                </TouchableOpacity>

                {/* <InputGroup borderType='rounded' style={styles.textInput}>
                  <Input
                    ref='phoneInput'
                    placeholder="Enter phone number to receive support."
                    onChangeText = {(text) => this.setState({text})}
                  />
                </InputGroup> */}
                {/* <View style={styles.bottomContainer}>
                  <Button rounded
                          textStyle={{color: colors.textPrimary, textDecorationLine: 'underline'}}
                          onPress={() => this.setPhone(this.state.text)}
                  >{loc.general.continue}</Button>
                </View> */}
                <ActivityIndicator
                  style={styles.spinner}
                  animating={this.state.connecting}
                  size='large'
                />
              </View>
            </Swiper>
          </Content>
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
    height: 300,
  },
  askMilesContainer: {
    marginTop: 22
  },
  textInput: {
    backgroundColor: colors.inputBackground,
    borderColor: colors.primary,
    borderWidth: 2.5
  },
  instructionsContainer: {
    marginLeft: 20,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 300,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
  titles: {
    marginTop: 17,
    marginBottom: 8
  },
  bottomContainer: {
    flex: 1,
    marginTop: 17,
    justifyContent: 'center',
    alignItems: 'center'
  },
  row: {
    height: 30,
    marginTop: 0,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  spinner: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  }
});

export default InstallationView;
