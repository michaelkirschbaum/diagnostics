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
  Alert,
  Linking
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
      bluetoothStatus: 'unknown',
      selected: ''
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

    getOnboardingView = function() {
      if (this.props.navigationState.onboarding)
        return (
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
                    style={{width: windowWidth - 25, marginTop: 10}}
                    renderRow={(item) =>
                          <ListItem>
                            <View style={styles.row}>
                              <View style={styles.device}>
                                <Signal strength={item.signal}/>
                                <Text style={{marginLeft: 5}} onPress={() => this.connect(item.identifier)}>{item.name}</Text>
                              </View>
                              {this.props.installation.modalVisible && this.state.selected == item.identifier &&
                                <ConnectionSpinner loading={this.props.installation.paired}/>
                              }
                            </View>
                          </ListItem>
                      }>
              </List>
              <Footer style={styles.bottomContainer}>
              {this.props.installation.paired &&
                <Button rounded
                  style={styles.button}
                  textStyle={{color: colors.textPrimary}}
                  onPress={() => this.continue()}
                >{loc.general.continue}</Button>
              }
              </Footer>
            </View>
          </Swiper>
        )
      else {
        // initiate scanning
        this.scanDevices();

        return (
          <View style={styles.instructionsContainer}>
            <Text style={{marginTop: 17, textAlign: "left"}}>{loc.instructions.selectBLE}</Text>
            <List dataArray={items}
                  style={{width: windowWidth - 25, marginTop: 10}}
                  renderRow={(item) =>
                        <ListItem>
                          <View style={styles.row}>
                            <View style={styles.device}>
                              <Signal strength={item.signal}/>
                              <Text style={{marginLeft: 5}} onPress={() => this.connect(item.identifier)}>{item.name}</Text>
                            </View>
                            {this.props.installation.modalVisible && this.state.selected == item.identifier &&
                              <ConnectionSpinner loading={this.props.installation.paired}/>
                            }
                          </View>
                        </ListItem>
                    }>
            </List>
            <Footer style={styles.bottomContainer}>
            {this.props.installation.paired &&
              <Button rounded
                style={styles.button}
                textStyle={{color: colors.textPrimary}}
                onPress={() => this.continue()}
              >{loc.general.continue}</Button>
            }
            </Footer>
          </View>
        )
      }
    }.bind(this);

    return (
        <Container theme={carfitTheme}>
          <Header>
            <Title style={{color: 'white'}}>{headerTitle}</Title>
          </Header>
          <View style={styles.headerLine}/>
          <Content
            padder={false}
            keyboardShouldPersistTaps="always"
            style={{backgroundColor: colors.backgroundPrimary}}
            ref={c => this._content = c}>

            {getOnboardingView()}
          </Content>
        </Container>
    );
  },

  componentWillUpdate(nextProps, nextState) {
    this.numberOfItems = nextProps.installation.foundDevices.length;

    return true;
  },

  async connect(device) {
    // store device id
    this.setState({selected: device});

    // start spinner
    this.props.setModalVisible(true);

    // timeout interval
    var timeout = 15000;

    // connect device
    var conn = new Connection();
    var response = await conn.connectDevice(device);

    if (response) {
      // stop refreshing device list
      clearInterval(this.rssi_refresh);

      // stop spinner
      this.props.setSpinner(response);
    }
    else {
      Alert.alert(
        loc.carInstallation.connect,
        loc.carInstallation.connectError,
        [{text: 'Support', onPress: () => Linking.openURL("https://carfit.zendesk.com/").catch(err => console.error('An error occurred', err))},
         {text: 'OK', onPress: () => this.props.setModalVisible(false)}]
      );
    }
  },

  continue() {
    // disable modal
    this.props.setModalVisible(false);

    // reset spinner
    this.props.setSpinner(false);

    // if not onboarding go to homeview
    if (!this.props.navigationState.onboarding)
      this.props.switchToMain();
    // if norauto skip carstartinstallation
    else if (this.locationFrance())
      this.props.pushRoute({key: 'CarInstallation', title: loc.carInstallation.inCarInstallation});
    // continue onboarding
    else
      this.props.pushRoute({key: 'CarStartInstallation', title: loc.carInstallation.inCarInstallation});
  },

  setPage(index) {
    this.props.setPageIndex(index);
    if (index == 4) this.scanDevices();
  },

  scanDevices() {
    var interval = 2000;
    var counter = 0;
    const stop_count = 2;

    this.props.discover();
    this.rssi_refresh = setInterval(function() {
      if (counter == stop_count)
        // notify user if bluetooth is off
        if (this.props.navigationState.drawerOpen == "true")
          Alert.alert(
            loc.login.connection_error,
            loc.login.bluetooth,
            [{text: 'OK', onPress: () => undefined}]
          );
        // notify user if no devices are found
        else if (!this.props.installation.foundDevices.length)
          Alert.alert(
            loc.login.connection_error,
            loc.login.noneFound,
            [{text: 'OK', onPress: () => this.setPage(0)}]
          );

      // refresh device list
      this.props.discover();
      if (counter <= stop_count)
        ++counter;
    }.bind(this), interval);
  },

  popRoute() {
    this.props.setPageIndex(0);
    this.props.clearDevices();
    this.props.onNavigateBack();
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
    alignItems: 'center'
  },
  device: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 13
  },
  firmware: {
    textAlign: 'center',
    marginTop: 150
  },
  button: {
    alignSelf: 'center'
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
  },
  row: {
    height: 35,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  bottomContainer: {
    backgroundColor: colors.backgroundPrimary,
    borderColor: colors.backgroundPrimary,
    height: 60,
    width: 335,
    position: 'absolute',
    top: Dimensions.get('window').height - 195,
    left: 0
  }
});

export default InstallationView;
