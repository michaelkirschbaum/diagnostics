import React, {PropTypes} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
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
import Vehicle from '../../carfit/vehicle';
import store from '../../redux/store';
import * as NavigationState from '../navigation/NavigationState';

/**
 * Login view
 * Likely to be the main app view, but will only display login dialog when needed.
 * Otherwise pass by.
 */
const MyCarsView = React.createClass({
  getInitialState() {
    return {
      title: '',
      description: '',
      photo: ''
    }
  },

  propTypes: {

  },

  componentDidMount() {
    this.loadVehicle().done();
  },

  onNextPress() {
    // this.props.pushRoute({key: 'CarInstallation', title: loc.carInstallation.inCarInstallation});
    // this.props.switchRoute('Overview');
    this.props.switchRoute(2);
  },

  onMyCarsPress() {
    this.props.pushRoute({key: 'Details', title: loc.settings.settings});
  },

  popRoute() {
    this.props.onNavigateBack();
  },

  async loadVehicle () {
    const vin = store.getState().get("carInstallation").get("vin");

    var vehicle = new Vehicle(vin);

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
  },

  addVehicle() {

  },

  render() {
    let windowHeight = Dimensions.get('window').height;
    let windowWidth = Dimensions.get('window').width;

    let headerTitle = loc.myCars.myCars;

    let carName = "Sam's Car";
    let carDescription = "Ford Fiesta 2015";
    let carStatus = loc.myCars.active;

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
          style={{flex: 1, backgroundColor: colors.backgroundPrimary, height: windowHeight}}
          ref={c => this._content = c}>

          <View style={styles.layoutContainer}>
            <TouchableWithoutFeedback onPress={this.onMyCarsPress}>
              <View style={styles.carContainer}>
                <View style={styles.carImageContainer}>
                  <Text>IMAGE</Text>
                </View>
                <View style={styles.carDetailsContainer}>
                  <H2 style={{fontWeight:'bold'}}>{this.state.title} ({carStatus})</H2>
                  <H3>{this.state.description}</H3>
                </View>
              </View>
            </TouchableWithoutFeedback>


            <View style={{
              height: 1,
              backgroundColor: colors.headerTextColor,
              marginTop: 20,
              marginBottom: 20,
              }}/>

            <View style={styles.carContainer}>

              <View style={styles.carImageContainer}>
                <Image source={require('../../../images/icons/change-car.png')} style={styles.icon}/>
              </View>
              <View style={styles.carDetailsContainer}>
                <Button transparent
                      textStyle={{color: colors.textPrimary}}
                      onPress={() => this.props.pushRoute({key: 'NewVehicle', title: loc.carInstallation.inCarInstallation})}
                >{loc.myCars.changeMyCar}</Button>
              </View>

            </View>

        </View>

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
    flex: 1,
    backgroundColor: colors.backgroundPrimary
  },
  layoutContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 20
  },
  carContainer: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
  },
  carImageContainer: {
    marginRight: 17,
  },
  carDetailsContainer: {
    flex: 1,
    flexDirection: 'column',
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
  icon: {
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default MyCarsView;
