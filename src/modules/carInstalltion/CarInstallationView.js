import React, {PropTypes} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  Alert,
  NativeModules,
  TouchableOpacity,
  ActivityIndicator,
  TouchableHighlight
} from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  InputGroup,
  Button,
  Input,
  Text,
  Icon,
  H3,
  List,
  ListItem,
  Picker
} from 'native-base';
import colors from '../../config/colors';
import carfitTheme from '../../config/carfit-theme';
import Swiper from 'react-native-swiper';
import * as NavigationState from '../navigation/NavigationState';
import Vehicle from '../../carfit/vehicle';
import PickerContainer from '../../components/PickerContainer';
import en from '../../config/localization.en';
import fr from '../../config/localization.fr';
if (NativeModules.SettingsManager.settings.AppleLocale.startsWith("fr"))
  var loc = fr;
else
  var loc = en;
import Modal from 'react-native-simple-modal';
import SimplePicker from 'react-native-simple-picker';

/**
 * Login view
 * Likely to be the main app view, but will only display login dialog when needed.
 * Otherwise pass by.
 */
const CarInstallationStateView = React.createClass({
  getInitialState: function() {
    return {
      plate: '',
      vin: '',
      vehicle: '',
      modalVisible: false,
      connecting: false,
      failureModalVisible: false
    };
  },

  propTypes: {
    // dispatch: PropTypes.func.isRequired
    carInstallation: PropTypes.object.isRequired
  },

  async addVIN(vin) {
    this.setState({connecting: true});

    // add user vehicle
    vehicle = new Vehicle();

    if (!this.validVIN(vin))
      console.log("Invalid VIN.");
    else {
      var response = await vehicle.addByVIN(vin);

      // notify user whether vehicle has been added
      if (response) {
        // store vehicle to be accessed in verification
        this.setState({vehicle: response});

        this.props.setVehicle(response["vin"]);

        // verify vehicle
        this.setState({modalVisible: true});
      }
      else {
        this.setState({failureModalVisible: true});
      }
    }
  },

  async addPlate(plate, region) {
    this.setState({connecting: true});

    // add user vehicle
    vehicle = new Vehicle();

    if (!this.validPlate(plate))
      console.log("Invalid plate.");
    else {
      var response = await vehicle.addByPlate(plate, region);

      // notify user whether vehicle has been added
      if (response) {
        // store vehicle to be accessed in verification
        this.setState({vehicle: response});

        this.props.setVehicle(response["vin"]);

        // verify vehicle
        this.setState({modalVisible: true});
      }
      else {
        this.setState({failureModalVisible: true});
      }
    }
  },

  validVIN(vin) {
    return true;
  },

  validPlate(plate) {
    return true;
  },

  popRoute() {
    this.props.setPageIndex(0);
    this.props.onNavigateBack();
  },

  setPage(index) {
    this.props.setPageIndex(index);
  },

  setMode(mode) {
    this.props.setEnterMode(mode);
  },

  verifyVehicle(vehicle) {
    // save vehicle
    this.props.addVehicle(vehicle);
    this.props.switchRoute(2);
  },

  turnOffModal() {
    // disable modal
    this.setState({connecting: false});
    this.setState({modalVisible: false});
    this.setState({failureModalVisible: false});
  },

  render() {
    let windowHeight = Dimensions.get('window').height;
    let windowWidth = Dimensions.get('window').width;

    let headerTitle = loc.carInstallation.inCarInstallation;
    switch (this.props.carInstallation.pageIndex) {
      case 0:
        headerTitle = loc.carInstallation.inCarInstallation;
        break;
      case 1:
        headerTitle = loc.carInstallation.installation;
        break;
      case 2:
        headerTitle = loc.carInstallation.header4;
        break;
      default:
        headerTitle = loc.carInstallation.inCarInstallation;
    }

    let finalView = this.props.carInstallation.enterMode

    let regions = ["Alaska"];

    getFinalView = function () {

      if (finalView == 'vin') {
        return (
          <View>
            {/* <View style={styles.profilesContainer}>
              <TouchableOpacity onPress={this.setMode('license')}>
                <Image source={require('../../../images/enter-plate.png')} style={styles.icon}/>
              </TouchableOpacity>
            </View> */}

            <Image source={require('../../../images/enter-vin.png')} style={styles.image}/>
            <InputGroup borderType='rounded' style={styles.textInput}>
              <Input
                ref='vinInput'
                placeholder={loc.carInstallation.enterVin}
                onChangeText = {(text) => this.setState({text})}
              />
            </InputGroup>
            {/* <Text
              style={{marginTop: 22, textAlign: "center", color: colors.primary, textDecorationLine: 'underline'}}
              onPress={() => { this.setMode('license') }}>{loc.carInstallation.enterLicensePlate}</Text> */}
            <View style={styles.bottomContainer}>
              <Button rounded
                      style={{alignSelf: 'auto'}}
                      textStyle={{color: colors.textPrimary, textDecorationLine: 'underline'}}
                      onPress={() => this.addVIN(this.state.text)}
              >{loc.general.continue}</Button>
            </View>
            <ActivityIndicator
              style={styles.spinner}
              animating={this.state.connecting}
              size='large'
            />
          </View>
        )
      } else {
        return (
          <View>
            {/* <View style={styles.profilesContainer}>
              <TouchableOpacity onPress={this.setMode('vin')}>
                <Image source={require('../../../images/enter-vin.png')} style={styles.icon}/>
              </TouchableOpacity>
            </View> */}

            <Image source={require('../../../images/enter-plate.png')} style={styles.image}/>
             <InputGroup borderType='rounded' style={styles.textInput}>
              <Input
                ref='licenseInput'
                placeholder={loc.carInstallation.enterLicensePlate}
                onChangeText = {(text) => this.setState({plate: text})}
              />
            </InputGroup>
            <InputGroup borderType='rounded' style={styles.textInput}>
              <Input
                ref='regionInput'
                placeholder={loc.carInstallation.enterRegion}
                onFocus = {() => this.refs.regionPicker.show()}
              />
            </InputGroup>
            {/* <Text
              style={{marginTop: 22, textAlign: "center", color: colors.primary, textDecorationLine: 'underline'}}
              onPress={() => { this.setMode('vin') }}>{loc.carInstallation.enterByVin}</Text> */}
            <View style={styles.bottomContainer}>
              <Button rounded
                      style={{alignSelf: 'auto'}}
                      textStyle={{color: colors.textPrimary, textDecorationLine: 'underline'}}
                      onPress={() => this.addPlate(this.state.plate, this.state.region)}
              >{loc.general.continue}</Button>
            </View>

            <SimplePicker
              ref={'regionPicker'}
              options={regions}
              onSubmit={(options) => undefined}
            />
          </View>
        )
      }
    }.bind(this);

    return (
      <Container theme={carfitTheme}>
        <Header>
          <Button transparent onPress={() => this.popRoute()}>
            <Icon name="ios-arrow-back"/>
          </Button>
          <Title>{headerTitle}</Title>
        </Header>
        <View style={styles.headerLine}/>
        <Content
          padder={false}
          keyboardShouldPersistTaps="always"
          style={{backgroundColor: colors.backgroundPrimary}}
          ref={c => this._content = c}>

          <Swiper
            loop={false}
            index={this.props.carInstallation.pageIndex}
            height={windowHeight - 100}
            style={styles.container}
            dot={<View style={{backgroundColor:colors.inputBackground, width: 8, height: 8,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
            activeDot={<View style={{backgroundColor:colors.primary, width: 8, height: 8,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
            onMomentumScrollEnd={(e, state, context) => this.setPage(state.index)}
          >
            <View style={styles.instructionsContainer}>
              <Image source={require('../../../images/peel-adhesive.png')} style={styles.image}/>
              <H3 style={{fontWeight: "bold", textAlign: "center", marginTop: 25}}>{loc.carInstallation.header2}</H3>
              <Text style={{marginTop: 17, textAlign: "center"}}>{loc.carInstallation.detail2a}</Text>
            </View>
            <View style={styles.instructionsContainer}>
              <Image source={require('../../../images/place-02.png')} style={styles.image}/>
              <H3 style={{fontWeight: "bold", textAlign: "center", marginTop: 25}}>{loc.carInstallation.header3}</H3>
              <Text style={{marginTop: 17, textAlign: "center"}}>{loc.carInstallation.detail3a}</Text>
              <Text style={{marginTop: 17, textAlign: "center"}}>{loc.carInstallation.detail3b}</Text>
            </View>
            <View style={styles.instructionsContainer}>
              {getFinalView()}
            </View>
          </Swiper>
          <Modal
            open={this.state.modalVisible}
            modalDidOpen={() => undefined}
            modalDidClose={() => undefined}
            style={{alignItems: 'center'}}
            closeOnTouchOutside={false}
            containerStyle={{}}
            modalStyle={{
              borderRadius: 7
            }}>
            <View>
              <Image source={require('../../../images/icons/check.png')} style={styles.icon}/>
              <Text style={{color: 'black', alignSelf: 'center'}}>{loc.carInstallation.success}</Text>
              <Text style={{color: 'black', textAlign: 'center'}}>{this.state.vehicle["make"]}</Text>
              <Text style={{color: 'black', textAlign: 'center'}}>{this.state.vehicle["model"]}</Text>
              <Text style={{color: 'black', textAlign: 'center'}}>{this.state.vehicle["year"]}</Text>
              <TouchableHighlight onPress={() => this.props.pushRoute({key: 'CarPhoto', title: ''})} underlayColor={'#F4F3F4'}>
                <Image
                  source={require('../../../images/add-picture-car-identified.png')}
                  style={styles.image}
                />
              </TouchableHighlight>
              <Button rounded
                    style={{alignSelf: 'center'}}
                    textStyle={{color: colors.textPrimary}}
                    onPress={() => this.verifyVehicle(this.state.vehicle)}
              >Continue</Button>
              <Button transparent
                    textStyle={{color: 'red', textDecorationLine: 'underline'}}
                    style={{alignSelf: 'center'}}
                    onPress={() => this.turnOffModal()}
              >{loc.carInstallation.failure}</Button>
            </View>
          </Modal>

          <Modal
            open={this.state.failureModalVisible}
            style={{alignItems: 'center'}}
            closeOnTouchOutside={false}
            modalStyle={{
              borderRadius: 7
            }}>
            <View>
              <Image source={require('../../../images/icons/exclamation-mark-icon@2x.png')} style={styles.icon}/>
              <Text style={{color: 'black', alignSelf: 'center'}}>{loc.carInstallation.notFound}</Text>
              <Button rounded
                    style={{alignSelf: 'center'}}
                    textStyle={{color: colors.textPrimary}}
                    onPress={() => this.turnOffModal()}
              >{loc.carInstallation.retry}</Button>
              <Button transparent
                    textStyle={{color: 'black', textDecorationLine: 'underline'}}
                    style={{alignSelf: 'center'}}
                    onPress={() => Alert.alert(
                      'Support',
                      'Support called.',
                      {text: 'OK', onPress: () => console.log('OK pressed.')})
                    }
              >{loc.carInstallation.support}</Button>
            </View>
          </Modal>
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
    // flex: 1,
    // height: 200,
    // width: 100
  },
  askMilesContainer: {
    marginTop: 22
  },
  textInput: {
    // alignSelf: 'stretch',
    backgroundColor: colors.inputBackground,
    borderColor: colors.primary,
    borderWidth: 2.5,
    marginTop: 22,
  },
  instructionsContainer: {
    marginLeft: 20,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    // flex: 1,
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
    alignSelf: 'center'
  },
  titles: {
    marginTop: 17,
    marginBottom: 8
  },
  bottomContainer: {
    // flex: 1,
    marginTop: 22,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  profileContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 55,
    // backgroundColor: '#002200',
    marginBottom: 16,
  },
  spinner: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  }
});

export default CarInstallationStateView;
