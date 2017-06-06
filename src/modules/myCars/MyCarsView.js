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
import carfitTheme from '../../config/carfit-theme';
import Swiper from 'react-native-swiper';
import Vehicle from '../../carfit/vehicle';
import store from '../../redux/store';
import * as NavigationState from '../navigation/NavigationState';

// set language
if (NativeModules.SettingsManager.settings.AppleLocale.startsWith("fr"))
  var loc = fr;
else
  var loc = en;

const MyCarsView = React.createClass({
  getInitialState() {
    return {
      title: '',
      description: '',
      photo: ''
    }
  },

  render() {
    let windowHeight = Dimensions.get('window').height;
    let windowWidth = Dimensions.get('window').width;
    let headerTitle = loc.myCars.myCars;
    let carStatus = loc.myCars.active;

    return (
      <Container theme={carfitTheme}>
        <Header>
          <Button transparent onPress={() => this.props.onNavigateBack()}>
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
          <TouchableWithoutFeedback onPress={this.onMyCarsPress}>
              <View style={styles.carContainer}>
                <View style={styles.carImageContainer}>
                  <Text>IMAGE</Text>
                </View>
                <View style={styles.carDetailsContainer}>
                  <H2 style={{fontWeight:'bold'}}>{this.state.title}</H2>
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
                      onPress={() => this.onNewVehiclePress()}
                >{loc.myCars.changeMyCar}</Button>
              </View>
            </View>
        </View>
        </Content>
      </Container>
    );
  },

  componentDidMount() {
    this.loadVehicle().done();
  },

  async loadVehicle () {
    const vin = this.props.carInstallation.vin;
    var vehicle = new Vehicle(vin);

    // load title
    var title = await vehicle.getTitle();
    if (title) {
      this.setState({title});
    } else {
      this.setState({title: loc.home.error});
    }

    // load description
    var description = await vehicle.getDescription();
    if (description) {
      this.setState({description});
    } else {
      this.setState({title: loc.home.error});
    }
  },

  onMyCarsPress() {
    this.props.pushRoute({key: 'Details', title: loc.settings.settings});
  },

  onNewVehiclePress() {
    this.props.setOnboarding(true);

    // reset installation instructions index
    this.props.setInstallationIndex(0);

    // redirect to installation route
    this.props.newVehicle();
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
