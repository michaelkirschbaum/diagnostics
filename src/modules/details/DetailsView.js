import React, {PropTypes} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  NativeModules
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
  ListItem
} from 'native-base';
import _ from 'lodash';
import colors from '../../config/colors';
import carfitTheme from '../../config/carfit-theme';
import Swiper from 'react-native-swiper';
import store from '../../redux/store';
import * as NavigationState from '../navigation/NavigationState';
import en from '../../config/localization.en';
import fr from '../../config/localization.fr';

// set language
if (NativeModules.SettingsManager.settings.AppleLocale.startsWith("fr"))
  var loc = fr;
else
  var loc = en;

const DetailsView = React.createClass({
  propTypes: {

  },

  popRoute() {
    this.props.onNavigateBack();
  },

  render() {
    let windowHeight = Dimensions.get('window').height;
    let windowWidth = Dimensions.get('window').width;

    let headerTitle = loc.myCars.myCars;

    // get current vehicle
    let vehicle = this.props.carInstallation.vehicles.slice(-1)[0];

    let name = vehicle.name ? vehicle.name : loc.myCars.notAvailable;
    let mileage = this.convertToLocal(this.props.carInstallation.odometer).toString();
    let image = loc.myCars.notAvailable;

    let connected = this.props.connected ? loc.myCars.connected : loc.myCars.disconnected;

    let phone = loc.myCars.notAvailable;

    let infoDetailsData = {
      year: vehicle.year ? vehicle.year : loc.myCars.notAvailable,
      make: vehicle.make ? vehicle.make : loc.myCars.notAvailable,
      model: vehicle.model ? vehicle.model : loc.myCars.notAvailable,
      mpgCity: vehicle.meters_per_liter_city ? this.fuelConsumption(vehicle.meters_per_liter_city) : loc.myCars.notAvailable,
      mpgHighway: vehicle.meters_per_liter_highway ? this.fuelConsumption(vehicle.meters_per_liter_highway) : loc.myCars.notAvailable,
      license: vehicle.plate ? vehicle.plate : loc.myCars.notAvailable,
      vin: vehicle.vin,
      drivenWheels: vehicle.driven_wheels ? vehicle.driven_wheels : loc.myCars.notAvailable,
      trimLevel: vehicle.gettrim_level ? vehicle.gettrim_level : loc.myCars.notAvailable,
      doors: vehicle.num_doors ? vehicle.num_doors : loc.myCars.notAvailable
    };

    let infoDetails = _.map(_.toPairs(infoDetailsData), infoPairs => {
      let infoTitle = loc.details[infoPairs[0]] || '';
      let infoValue = infoPairs[1] || '';
      return (
        <View key={infoTitle}>
          <View style={{height: 1,backgroundColor: colors.headerTextColor,marginTop: 17,marginBottom: 17}}/>
          <View style={styles.sectionContainer}>
            <View style={styles.sectionDetails}>
              <H3 style={styles.sectionTitle}>{infoTitle}</H3>
              <Text>{infoValue}</Text>
            </View>
          </View>
        </View>
      )
    });

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
          style={{flex: 1, backgroundColor: colors.backgroundPrimary, height: windowHeight}}
          ref={c => this._content = c}>

          <View style={styles.layoutContainer}>

            <View style={styles.sectionContainer}>
              <H2 style={styles.sectionHeader}>{loc.details.displayInfo}</H2>
            </View>
            <View style={{height: 1,backgroundColor: colors.headerTextColor,marginTop: 17,marginBottom: 17,}}/>
            <View style={styles.sectionContainer}>
              <View style={styles.sectionDetails}>
                <H3 style={styles.sectionTitle}>{loc.details.name}</H3>
                <Text>{name}</Text>
              </View>
              {/* <View style={styles.sectionAction}>
                <Icon active name="ios-arrow-forward"></Icon>
              </View> */}
            </View>
            <View style={{height: 1,backgroundColor: colors.headerTextColor,marginTop: 17,marginBottom: 17,}}/>
            <View style={styles.sectionContainer}>
              <View style={styles.sectionDetails}>
                <H3 style={styles.sectionTitle}>{loc.details.mileage}</H3>
                <Text>{mileage}</Text>
              </View>
              {/* <View style={styles.sectionAction}>
                <Icon active name="ios-arrow-forward"></Icon>
              </View> */}
            </View>
            <View style={{height: 1,backgroundColor: colors.headerTextColor,marginTop: 17,marginBottom: 17,}}/>
            <View style={styles.sectionContainer}>
              <View style={styles.sectionDetails}>
                <H3 style={styles.sectionTitle}>{loc.details.image}</H3>
                <Text>{image}</Text>
              </View>
              {/* <View style={styles.sectionAction}>
                <Icon active name="ios-arrow-forward"></Icon>
              </View> */}
            </View>
            <View style={{height: 1,backgroundColor: colors.headerTextColor,marginTop: 17,marginBottom: 17,}}/>

            <View style={styles.sectionContainer}>
              <H2 style={styles.sectionHeader}>{loc.details.connectedSensors}</H2>
            </View>
            <View style={{height: 1,backgroundColor: colors.headerTextColor,marginTop: 17,marginBottom: 17,}}/>
            <View style={styles.sectionContainer}>
              <View style={styles.sectionDetails}>
                <H3 style={styles.sectionTitle}>{loc.details.carfit}</H3>
                <Text>{connected}</Text>
              </View>
              {/* <View style={styles.sectionAction}>
                <Icon active name="ios-arrow-forward"></Icon>
              </View> */}
            </View>
            <View style={{height: 1,backgroundColor: colors.headerTextColor,marginTop: 17,marginBottom: 17,}}/>
            <View style={styles.sectionContainer}>
              <View style={styles.sectionDetails}>
                <H3 style={styles.sectionTitle}>{loc.details.phone}</H3>
                <Text>{phone}</Text>
              </View>
              {/* <View style={styles.sectionAction}>
                <Icon active name="ios-arrow-forward"></Icon>
              </View> */}
            </View>
            <View style={{height: 1,backgroundColor: colors.headerTextColor,marginTop: 17,marginBottom: 17,}}/>

            <View style={styles.sectionContainer}>
              <H2 style={styles.sectionHeader}>{loc.details.info}</H2>
            </View>
            {infoDetails}

        </View>

        </Content>
      </Container>
    );
  },

  convertToLocal(meters) {
    // get location
    var region = NativeModules.SettingsManager.settings.AppleLocale;

    // if in US or Britain use Miles, otherwise use Kilometers
    if (region.endsWith('US') || region.endsWith('GB'))
      return Math.round(meters / 1609.344);
    else
      return Math.round(meters / 1000);
  },

  fuelConsumption(meters_per_liter) {
    // get location
    var region = NativeModules.SettingsManager.settings.AppleLocale;

    if (region.endsWith('US') || region.endsWith('GB'))
      return Math.round(this.convertToLocal(meters_per_liter) * 3.78541);
    else
      return Math.round(100 / this.convertToLocal(meters_per_liter));
  }
});

const styles = StyleSheet.create({
  headerLine: {
    height: 1,
    backgroundColor: colors.headerTextColor
  },
  container: {
    flex: 1,
    backgroundColor: colors.backgroundPrimary
  },
  layoutContainer: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 4
  },

  sectionContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 20,
  },
  sectionDetails: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  sectionAction: {

  },
  sectionHeader: {
    fontWeight: 'bold'
  },
  sectionTitle: {
    fontWeight: 'bold'
  },
  textInput: {
    backgroundColor: colors.inputBackground,
    borderColor: colors.primary,
    borderWidth: 2.5,
    marginTop: 22
  },

  menuText: {
    marginBottom: 24,
    fontWeight: "bold"
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
  footer: {
    height: 200,
    // backgroundColor: colors.backgroundPrimary,
    backgroundColor: '#550000',
    borderColor: colors.backgroundPrimary,
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
  },
});

export default DetailsView;
