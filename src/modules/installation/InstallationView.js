import React, {PropTypes} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  NativeEventEmitter,
  NativeModules,
  ActivityIndicator,
  Modal,
  Animated,
  Alert
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
  ListItem,
  Footer
} from 'native-base';
import colors from '../../config/colors';
import carfitTheme from '../../config/carfit-theme';
import Swiper from 'react-native-swiper';
import * as NavigationState from '../navigation/NavigationState';
import Connection from '../../carfit/connection';
import Signal from '../../components/Signal';
import TimerMixin from 'react-native-timer-mixin';
import ConnectionSpinner from '../../components/ConnectionSpinner';
import FirmwareSpinner from '../../components/FirmwareSpinner';
import en from '../../config/localization.en';
import fr from '../../config/localization.fr';
import {responsiveWidth, responseiveHeight, responsiveFontSize} from 'react-native-responsive-dimensions';
const {CarFitManager} = NativeModules;

// set language
if (NativeModules.SettingsManager.settings.AppleLocale.startsWith("fr"))
  var loc = fr;
else
  var loc = en;

const InstallationView = React.createClass({
  getInitialState() {
    return {
      rssi_refresh: '',
      connected: false,
      modalVisible: false,
      bluetoothStatus: 'unknown',
      updateProgress: '',
      update_firmware_subscription: '',
      updating: false
    };
  },

  propTypes: {
    installation: PropTypes.object.isRequired
  },

  render() {
    let windowHeight = Dimensions.get('window').height;
    let windowWidth = Dimensions.get('window').width;

    let headerTitle = loc.welcome.connect;

    let items = this.props.installation.foundDevices;

    return (
        <Container theme={carfitTheme}>
          <Header>
            <Title>{headerTitle}</Title>
          </Header>
          <View style={styles.headerLine} />
          <Content
            padder={false}
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
                <Image source={require('../../../images/pull-tab-02.png')} style={styles.image} />
                <H3 style={styles.header}>{loc.instructions.enableBattery}</H3>
                <Text style={styles.text}>{loc.instructions.pullTab}</Text>
              </View>
              <View style={styles.instructionsContainer}>
                <Image source={require('../../../images/activate-ble-02.png')} style={styles.image} />
                <H3 style={styles.header}>{loc.instructions.activateBluetooth}</H3>
                <Text style={styles.text}>{loc.instructions.turnOnBLE}</Text>
              </View>
              <View style={styles.instructionsContainer}>
                <Image source={require('../../../images/reset-connection-01.png')} style={styles.image} />
                <H3 style={styles.header}>{loc.instructions.resetConnection}</H3>
                <Text style={styles.text}>{loc.instructions.pressAndHold}</Text>
              </View>
              <View style={styles.instructionsContainer}>
                <Image source={require('../../../images/ble-pairing-02.png')} style={styles.image} />
                <H3 style={styles.header}>{loc.instructions.blePairing}</H3>
                <Text style={styles.text}>{loc.instructions.ensurePairing}</Text>
              </View>
              <View style={styles.instructionsContainer}>
                <Text style={{marginTop: 17, textAlign: "left"}}>{loc.instructions.selectBLE}</Text>
                <List dataArray={items}
                      style={{width: windowWidth - 40, marginTop: 10}}
                      renderRow={(item) =>
                            <ListItem>
                              <View style={styles.row}>
                                <Text onPress={() => this.connect(item.identifier)}>{item.name}</Text>
                                <Signal strength={item.signal}/>
                              </View>
                            </ListItem>
                        }>
                </List>
              </View>
            </Swiper>

            <Modal
              animationType={'none'}
              transparent={false}
              closeOnTouchOutside={true}
              visible={this.state.modalVisible}>
              <View style={styles.spinnerContainer}>
                <ConnectionSpinner loading={this.state.connected}/>
                {this.state.updating &&
                  <Text style={styles.firmware}>
                    Device updating: {this.state.updateProgress}
                  </Text>
                }
                {this.state.connected &&
                  <Button rounded
                    style={styles.button}
                    textStyle={{color: colors.textPrimary}}
                    onPress={() => this.continue()}
                  >{loc.general.continue}</Button>
                }
              </View>
            </Modal>
          </Content>
        </Container>
    );
  },

  componentDidMount() {
    var connectionEmitter = new NativeEventEmitter(CarFitManager);

    // update firmware
    var update_firmware_subscription = connectionEmitter.addListener(
      'BLEOADNotification',
      (notification) => this.setFirmware(notification)
    );

    // store listener
    this.setState({update_firmware_subscription});
  },

  componentWillUpdate(nextProps, nextState) {
    this.numberOfItems = nextProps.installation.foundDevices.length;

    return true;
  },

  async connect(device) {
    // show spinner
    this.setState({modalVisible: true});

    // timeout interval
    var timeout = 15000;

    // timeout connection request and notify user of necessary action
    var connection_alert = setTimeout(function() {
      Alert.alert(
        loc.login.connection_error,
        loc.login.reset,
        {text: 'OK', onPress: () => undefined}
      );
    }, timeout);

    // if firmware needs updating, suppress reset instructions
    if (this.state.updating)
      clearTimeout(connection_alert);

    // connect device
    var conn = new Connection();
    var resp = await conn.connectDevice(device);

    // stop timeout
    clearTimeout(connection_alert);

    if (resp) {
      // stop refreshing signals
      clearInterval(this.state.rssi_refresh);

      // stop spinner
      this.setState({connected: true});

      // stop update listener
      this.state.update_firmware_subscription.remove();
    }
    else {
      Alert.alert(
        loc.carInstallation.connect,
        loc.carInstallation.connectError,
        [{text: 'OK', onPress: () => console.log("OK pressed.")}]
      );
    }
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

      var interval = 2000;

      // refresh BLE device list
      var rssi_refresh = setInterval(function() {
        this.rediscover();
      }.bind(this), interval);

      this.setState({rssi_refresh});

      // notify user if bluetooth is off
      if (this.props.navigationState.drawerOpen == "true")
        Alert.alert(
          loc.login.connection_error,
          'bluetooth off',
          [{text: 'OK', onPress: () => undefined},
          {cancellable: false}]
        );
      // notify user if no devices are found
      else if (!this.props.installation.foundDevices.length) {
        Alert.alert(
          loc.login.connection_error,
          loc.login.noneFound
          [{text: 'OK', onPress: () => this.setPage(0)},
          {cancellable: false}]
        );
      }
    }
  },

  rediscover() {
    this.props.discover();
  },

  continue() {
    this.setState({modalVisible: false});

    // if norauto user skip CarStartInstallation
    if (this.locationFrance())
      this.props.pushRoute({key: 'CarInstallation', title: loc.carInstallation.inCarInstallation});
    else
      this.props.pushRoute({key: 'CarStartInstallation', title: loc.carInstallation.inCarInstallation});
  },

  setFirmware(notification) {
    switch(notification.state) {
      case "start":
        // enable progress indicator
        this.setState({updating: true});
        break;
      case "stop":
        // check whether update successful
        if (notification.status == "success")
          this.setState({updating: false});
        else
          pass;
        break;
      default:
        // update progress
        this.setState({updateProgress: notification.percent})
        break;
    }
  },

  locationFrance() {
    if (NativeModules.SettingsManager.settings.AppleLocale.endsWith("FR"))
      return true;
    else
      return false;
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
  image: {
    width: Dimensions.get('window').width * .85,
    height: Dimensions.get('window').width * .85,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25
  },
  instructionsContainer: {
    marginLeft: 20,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  spinnerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  row: {
    height: 30,
    marginTop: 0,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  firmware: {
    textAlign: 'center',
    marginTop: 150
  },
  button: {
    alignSelf: 'center',
    marginTop: 460
  },
  header: {
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 25,
    fontSize: responsiveFontSize(2.35)
  },
  text: {
    marginTop: 17,
    textAlign: "center",
    fontSize: responsiveFontSize(2.35)
  }
});

export default InstallationView;
