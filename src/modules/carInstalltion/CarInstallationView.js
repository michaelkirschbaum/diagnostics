import React, {PropTypes} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  Alert,
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
} from 'native-base';
import colors from '../../config/colors';
import loc from '../../config/localization';
import carfitTheme from '../../config/carfit-theme';
import Swiper from 'react-native-swiper';
import * as NavigationState from '../navigation/NavigationState';
import Vehicle from '../../carfit/vehicle';

/**
 * Login view
 * Likely to be the main app view, but will only display login dialog when needed.
 * Otherwise pass by.
 */
const CarInstallationStateView = React.createClass({
  getInitialState: function() {
    return {plate: '', vin: ''};
  },

  propTypes: {
    // dispatch: PropTypes.func.isRequired
    carInstallation: PropTypes.object.isRequired
  },

  async addVIN(vin) {
    // add user vehicle
    vehicle = new Vehicle();

    if (!this.validVIN(vin))
      console.log("Invalid VIN.");
    else {
      var response = await vehicle.addByVIN(vin);

      // notify user whether vehicle has been added
      if (response) {
        // make notification synchronous
        Alert.alert(
          'Success',
          'Vehicle has been added.',
          {text: 'OK', onPress: () => console.log('OK Pressed.')},
        );

        // how to access AWSModel?
        // console.log(response['vin']);

        // store vin
        this.props.addVehicle(vin);

        this.props.pushRoute({key: 'Overview', title: ''});
      }
      else {
        Alert.alert(
          'Fail',
          'Unable to add vehicle.',
          {text: 'OK', onPress: () => console.log('OK Pressed.')},
        );
      }
    }
  },

  async addPlate(plate, region) {
    // add user vehicle
    vehicle = new Vehicle();

    if (!this.validPlate(plate))
      console.log("Invalid plate.");
    else {
      var response = await vehicle.addByPlate(plate, region);

      // notify user whether vehicle has been added
      if (response) {
        Alert.alert(
          'Success',
          'Vehicle has been added.',
          {text: 'OK', onPress: () => console.log('OK Pressed.')},
        );

        this.props.pushRoute({key: 'Overview', title: ''});

        // store vin
      }
      else {
        Alert.alert(
          'Fail',
          'Unable to add vehicle.',
          {text: 'OK', onPress: () => console.log('OK Pressed.')},
        );
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

    getFinalView = function () {

      if (finalView == 'vin') {
        return (
          <View>
            <Image source={require('../../../images/enter-vin.png')} style={styles.image}/>
            <InputGroup borderType='rounded' style={styles.textInput}>
              <Input
                ref='vinInput'
                placeholder={loc.carInstallation.enterVin}
                onChangeText = {(text) => this.setState({text})}
              />
            </InputGroup>
            <Text
              style={{marginTop: 22, textAlign: "center", color: colors.primary, textDecorationLine: 'underline'}}
              onPress={() => { this.setMode('license') }}>{loc.carInstallation.enterLicensePlate}</Text>
            <View style={styles.bottomContainer}>
              <Button rounded
                      style={{alignSelf: 'auto'}}
                      textStyle={{color: colors.textPrimary, textDecorationLine: 'underline'}}
                      onPress={() => this.addVIN(this.state.text)}
              >{loc.general.continue}</Button>
            </View>
          </View>
        )
      } else {
        return (
          <View>
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
                onChangeText = {(text) => this.setState({region: text})}
              />
            </InputGroup>
            <Text
              style={{marginTop: 22, textAlign: "center", color: colors.primary, textDecorationLine: 'underline'}}
              onPress={() => { this.setMode('vin') }}>{loc.carInstallation.enterByVin}</Text>
            <View style={styles.bottomContainer}>
              <Button rounded
                      style={{alignSelf: 'auto'}}
                      textStyle={{color: colors.textPrimary, textDecorationLine: 'underline'}}
                      onPress={() => this.addPlate(this.state.plate, this.state.region)}
              >{loc.general.continue}</Button>
            </View>
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
          padder
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
    borderWidth: 2.5,
    marginTop: 22
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
    // flex: 1,
    marginTop: 22,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CarInstallationStateView;
