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
import en from '../../config/localization.en';
import fr from '../../config/localization.fr';
import carfitTheme from '../../config/carfit-theme';
import Swiper from 'react-native-swiper';
import * as NavigationState from '../navigation/NavigationState';
import Connection from '../../carfit/connection';
import Signal from '../../components/Signal';
import TimerMixin from 'react-native-timer-mixin';
import ConnectionSpinner from '../../components/ConnectionSpinner';
import BluetoothState from 'react-native-bluetooth-state';
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
      bluetoothStatus: 'unknown'
    };
  },

  propTypes: {
    installation: PropTypes.object.isRequired
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

  componentWillMount() {
    BluetoothState.subscribe(status => {
      this.setState({bluetoothStatus: status});
    });

    BluetoothState.initialize();
  },

  componentDidMount() {
    // signal strength refresh
    var interval = 2000;

    var rssi_refresh = setInterval(function() {
      this.rediscover();
    }.bind(this), interval);

    this.setState({rssi_refresh});
  },

  componentWillUpdate(nextProps, nextState) {
    // console.log('nextProps');
    // console.log(JSON.stringify(nextProps, null, 2));
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

    // connect device
    var conn = new Connection();
    var resp = await conn.connectDevice(device);

    // stop timeout
    clearTimeout(connection_alert);

    if (true) {
      // stop refreshing signals
      clearInterval(this.state.rssi_refresh);

      // stop spinner
      this.setState({connected: true});
    }
    else
      Alert.alert(
        loc.carInstallation.connect,
        loc.carInstallation.connectError,
        [{text: 'OK', onPress: () => console.log("OK pressed.")},
        {cancellable: false}]
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

      if (this.state.bluetoothStatus == "off")
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
          loc.login.noneFound,
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
  spinner: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  bottomContainer: {
    marginBottom: 80,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    alignSelf: 'center',
    marginTop: 460
  }
});

export default InstallationView;
